import React, { useState } from "react";
import { VscLoading } from "react-icons/vsc";

const ReceivedOrders = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const orders = [
    {
      _id: 7,
      NameOfProduct: "Cassava",
      description: "High quality cassava",
      pricePerTon: 110,
      quantity: 250,
      typeOfProduct: "grain",
      country: "Kenya",
      image: "/img/Maize.webp",
      customer: {
        fullName: "John Doe",
        phoneNumber: "123-456-7890",
      },
      shippingAddress: "123 Main St, Nairobi, Kenya",
      status: "Pending",
    },
    {
      _id: 7,
      NameOfProduct: "Coffee Beans",
      description: "High quality of coffee beans",
      pricePerTon: 300,
      quantity: 250,
      typeOfProduct: "Beverage",
      country: "Rwanda",
      image: "/img/coffe.jpeg",
      customer: {
        fullName: "Albertine",
        phoneNumber: "123-456-7890",
      },
      shippingAddress: "123 Main St, Kigali, Rwanda",
      status: "Pending",
    },
  ];

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.customer.fullName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      order.NameOfProduct.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-5 bg-[#f2f2f2] flex flex-col gap-10">
      <div className="relative">
        <img
          src="/img/AboutUs.png"
          alt="Agri-Connect Banner"
          className="h-[20vh] w-[100%] object-cover"
        />
        <div className="absolute lg:top-10 md:top-24 sm:top-5 lg:left-[70vh] md:left-[42vh] sm:left-[8vh] text-[#cbcaca]">
          <p className="text-4xl font-bold">Farmer Dashboard</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-5">
          <strong className="text-xl flex justify-center">
            Received Orders
          </strong>
          <strong className="pb-5">New orders</strong>
        </div>
        <input
          type="text"
          placeholder="Search orders"
          value={searchQuery}
          onChange={handleSearch}
          className="py-2 px-3 border w-[50%] border-gray-300 rounded"
        />
        {filteredOrders.length > 0 ? (
          <div className="bg-white p-4 mt-5 rounded-md shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-2">Order ID</th>
                  <th className="px-4 py-2">Customer Name</th>
                  <th className="px-4 py-2">Phone Number</th>
                  <th className="px-4 py-2">Product</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Total Price</th>
                  <th className="px-4 py-2">Shipping address</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <React.Fragment key={order._id}>
                    <tr>
                      <td className="py-2">{order._id}</td>
                      <td className="px-4 py-2">{order.customer.fullName}</td>
                      <td className="px-4 py-2">
                        {order.customer.phoneNumber}
                      </td>
                      <td className="px-4 py-2">{order.NameOfProduct}</td>
                      <td className="px-4 py-2">{order.quantity}</td>
                      <td className="px-4 py-2">
                        {order.pricePerTon * order.quantity}
                      </td>
                      <td className="px-4 py-2">{order.shippingAddress}</td>
                      <td className="px-4 py-2">{order.status}</td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="pl-4 mt-5">
            <p>No orders found</p>
          </div>
        )}
      </div>
      <div className="pt-5">
        <strong>Paid orders</strong>
        <div className="bg-white px-10 py-5 mt-5 rounded-md shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2">Order ID</th>
                <th className="px-4 py-2">Customer Name</th>
                <th className="px-4 py-2">Phone Number</th>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Total Price</th>
                <th className="px-4 py-2">Shipping address</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Placeholder for paid orders */}
              <tr>
                <td className="py-2 px-4" colSpan="8">
                  No paid orders
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReceivedOrders;
