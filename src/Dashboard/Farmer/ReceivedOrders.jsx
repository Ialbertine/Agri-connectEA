import React, { useState, useEffect } from "react";
import { VscLoading } from "react-icons/vsc";

const ReceivedOrders = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    throw new Error('No token found, please log in');
                }

                const response = await fetch('https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/stock/getAllOrders', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    // throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const data = await response.json();
                console.log('Fetched data:', data);
                setOrders(data);
            } catch (error) {
                // console.error('Error fetching orders:', error);
                // setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    if (loading) {
        return (
            <div className='p-10 flex flex-col gap-5 bg-[#f2f2f2]'>
                <div className="flex flex-col gap-5">
                    <strong className='text-xl flex justify-center'>Received Orders</strong>
                    <strong className="pb-5">New orders</strong>
                </div>
                <div className='pt-20 flex justify-center gap-5 text-xl h-[80vh] text-black font-semibold'>
                    <VscLoading className='animate-spin' />
                    <p>Loading</p>
                </div>
            </div>
        );
    }

    let filteredOrders = orders.filter(order =>
        order.customer.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.selectedStockItems.some(item =>
            item.NameOfProduct.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    console.log(filteredOrders);
    return (
        <div className='p-5 bg-[#f2f2f2] flex flex-col gap-10'>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-5">
                    <strong className='text-xl flex justify-center'>Received Orders</strong>
                    <strong className="pb-5">New orders</strong>
                </div>
                <input
                    type="text"
                    placeholder="Search orders"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="py-2 px-3 border w-[50%] border-gray-300 rounded"
                />
                <div className="bg-white p-4">
                    <table>
                        <thead>
                            <tr>
                                <th className="py-2">Order ID</th>
                                <th className="px-4 py-2">Customer Name</th>
                                <th className="px-4 py-2">Phone Number</th>
                                <th className="px-4 py-2">Product</th>
                                <th className="px-4 py-2">Quantity</th>
                                <th className="px-4 py-2">Total Price</th>
                                <th className="px-4 py-2">Shipping address</th>
                                <th className="px-4 py-2">status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map(order => (
                                <React.Fragment key={order._id}>
                                    <tr>
                                        <td className=" py-2">{order._id}</td>
                                        <td className=" px-4 py-2">{order.customer.fullName}</td>
                                        <td className=" px-4 py-2">{order.phoneNumber}</td>
                                        <td className=" px-4 py-2">{order.selectedStockItems[0].NameOfProduct}</td>
                                        <td className=" px-4 py-2">{order.selectedStockItems[0].quantity}</td>
                                        <td className=" px-4 py-2">{order.selectedStockItems[0].itemTotalPrice}</td>
                                        <td className=" px-4 py-2">{order.shippingAddress}</td>
                                        <td className=" px-4 py-2">{order.status}</td>
                                    </tr>
                                    {order.selectedStockItems.slice(1).map(item => (
                                        <tr key={item._id}>
                                            <td className=" px-4 py-2">{item.NameOfProduct}</td>
                                            <td className=" px-4 py-2">{item.quantity}</td>
                                            <td className=" px-4 py-2">{item.itemTotalPrice}</td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>

                </div>

                {/* DERIVED ORDERS  */}

                <div className="pt-5">
                    <strong>Paid orders</strong>
                    <div className="bg-white px-10 py-5 mt-5">
                        <table>
                            <thead>
                                {/* <tr>
                                    <th className="py-2">Order ID</th>
                                    <th className="px-4 py-2">Customer Name</th>
                                    <th className="px-4 py-2">Phone Number</th>
                                    <th className="px-4 py-2">Product</th>
                                    <th className="px-4 py-2">Quantity</th>
                                    <th className="px-4 py-2">Total Price</th>
                                    <th className="px-4 py-2">Shipping address</th>
                                    <th className="px-4 py-2">status</th>
                                </tr> */}
                                <tr>No paid orders</tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReceivedOrders;
