import React, { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import Modal from "./Model";

const Operation = () => {
  const [orders, setOrders] = useState([]);
  const [searchBuyer, setSearchBuyer] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedBuyer, setExpandedBuyer] = useState(null); // Track the buyer whose details are being shown

  useEffect(() => {
    const fetchBuyerOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No token found, please log in");
          setLoading(false);
          return;
        }

        const response = await fetch(
          "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/admin/buyers",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }

        const contentType = response.headers.get("content-type") || "";
        if (!contentType.includes("application/json")) {
          throw new Error(`Unexpected response format: ${contentType}`);
        }

        const data = await response.json();
        console.log("Fetched data:", data); // Debug log

        if (data.buyersWithOrder && Array.isArray(data.buyersWithOrder)) {
          setOrders(data.buyersWithOrder);
        } else {
          throw new Error(
            "Expected an array but received a different type of response"
          );
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBuyerOrders();
  }, []);

  const handleDeleteOrder = async (orderId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found, please log in");
        setLoading(false);
        return;
      }
      const response = await fetch(
        `https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/order/remove/${orderId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete order: ${response.statusText}`);
      }

      setOrders((prevOrders) => {
        return prevOrders
          .map((order) => ({
            ...order,
            orders: order.orders.filter((ord) => ord._id !== orderId),
          }))
          .filter((order) => order.orders.length > 0);
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleOpenModal = (buyer) => {
    setExpandedBuyer(buyer);
  };

  const handleCloseModal = () => {
    setExpandedBuyer(null);
  };

  if (loading) {
    return (
      <div className="p-10 flex flex-col gap-5 bg-[#f2f2f2]">
        <strong className="text-xl">MANAGE ORDERS</strong>
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 p-5">
          <strong>Reccent order</strong>
          <div className="mt-3"></div>
        </div>
        <div className="pt-20 flex justify-center gap-5 text-xl h-[80vh] text-black font-semibold">
          <VscLoading className="animate-spin" />
          <p>Loading</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-10 flex flex-col gap-5 bg-[#f2f2f2]">
      <strong className="text-xl">MANAGE ORDERS</strong>
      <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex justify-between items-center p-5">
        <strong>Reccent order</strong>
        <div className="m-4">
          <input
            type="text"
            placeholder="Search buyer"
            value={searchBuyer}
            onChange={(e) => setSearchBuyer(e.target.value.toUpperCase())}
            className="px-4 py-2 border rounded-md w-[50vh]"
          />
        </div>
      </div>
      <div>
        {orders.length === 0 ? (
          <strong>No orders found</strong>
        ) : (
          <ul className="flex flex-wrap gap-8">
            {orders
              .filter((order) => order.orders.length > 0)
              .map((order, index) => (
                <li
                  key={index}
                  className="lg:w-[50vh] md:w-[40vh] sm:w-[39vh] border shadow-md shadow-slate-400 py-3 px-5 flex flex-col gap-4"
                >
                  <h2>
                    Buyer:{" "}
                    <span className="font-semibold">
                      {order.buyer.toUpperCase()}
                    </span>
                  </h2>
                  <div className="flex flex-col gap-1 w-[50vh]">
                    <p className="font-semibold underline underline-offset-2">
                      Buyer details
                    </p>
                    <p className="pt-2">Order ID: {order.orders[0]._id}</p>
                    <p>Buyer id: {order.orders[0].customer}</p>
                    <p>
                      Created At:{" "}
                      {new Date(order.orders[0].createdAt).toLocaleString()}
                    </p>
                    <p>Phone: {order.orders[0].phoneNumber}</p>
                    <p>Shipping Address: {order.orders[0].shippingAddress}</p>
                    <p>Status: {order.orders[0].status}</p>
                    <p className="pt-3">
                      <span className="font-semibold underline underline-offset-2">
                        What is ordered
                      </span>
                      {order.orders[0].selectedStockItems.map((item) => (
                        <div key={item._id} className="pt-2">
                          <p>Item: {item.NameOfProduct}</p>
                          <p>Quantity: {item.quantity} tons</p>
                          <p>Price: {item.itemTotalPrice} RWF</p>
                        </div>
                      ))}
                    </p>
                    <div className="pt-2">
                      <button
                        className="text-white rounded-lg px-3 hover:bg-orange-900 bg-[#b63636] p-1 py-2 text-lg w-[13vh]"
                        onClick={() => handleDeleteOrder(order.orders[0]._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  {order.orders.length > 1 && (
                    <button
                      className="text-blue-500 mt-2"
                      onClick={() => handleOpenModal(order)}
                    >
                      View all their orders
                    </button>
                  )}
                </li>
              ))}
          </ul>
        )}
      </div>
      {expandedBuyer && (
        <Modal isOpen={!!expandedBuyer} onClose={handleCloseModal}>
          <h2 className="text-2xl mb-4">
            Buyer:{" "}
            <span className="font-semibold">
              {expandedBuyer.buyer.toUpperCase()}
            </span>
          </h2>
          {expandedBuyer.orders.map((ord, ordIndex) => (
            <div key={ordIndex} className="flex flex-col gap-1 mb-4">
              <p className="font-semibold underline underline-offset-2">
                Buyer details
              </p>
              <p className="pt-2">Order ID: {ord._id}</p>
              <p>Buyer id: {ord.customer}</p>
              <p>Created At: {new Date(ord.createdAt).toLocaleString()}</p>
              <p>Phone: {ord.phoneNumber}</p>
              <p>Shipping Address: {ord.shippingAddress}</p>
              <p>Status: {ord.status}</p>
              <p className="pt-3">
                <span className="font-semibold underline underline-offset-2">
                  What is ordered
                </span>
                {ord.selectedStockItems.map((item) => (
                  <div key={item._id} className="pt-2">
                    <p>Item: {item.NameOfProduct}</p>
                    <p>Quantity: {item.quantity} tons</p>
                    <p>Price: {item.itemTotalPrice} RWF</p>
                  </div>
                ))}
              </p>
              <div className="pt-2">
                <button
                  className="text-white rounded-lg px-3 hover:bg-orange-900 bg-[#b63636] p-1 py-2 text-lg w-[13vh]"
                  onClick={() => handleDeleteOrder(ord._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </Modal>
      )}
    </div>
  );
};

export default Operation;
