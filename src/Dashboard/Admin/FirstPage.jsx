import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import { VscLoading } from "react-icons/vsc";

const FirstPage = () => {
  const [buyers, setBuyers] = useState([]);
  const [farmers, setFarmers] = useState([]);
  const [stock, setStock] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (endpoint, setter, errorMsg) => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No token found, please log in");
          setLoading(false);
          return;
        }

        const response = await fetch(endpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const contentType = response.headers.get("content-type") || "";
        if (!contentType.includes("application/json")) {
          throw new Error(`Unexpected response format: ${contentType}`);
        }

        const data = await response.json();
        console.log(`${errorMsg} data:`, data); // Debug log

        if (data && typeof data[errorMsg] === "number") {
          setter(data[errorMsg]);
        } else {
          console.error(`Unexpected data structure for ${errorMsg}:`, data); // Debug log
          throw new Error(`Response data does not contain expected ${errorMsg}`);
        }
      } catch (error) {
        console.error(`Error fetching ${errorMsg}:`, error); // Debug log
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData(
      "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/admin/totalFarmer",
      setFarmers,
      "farmers"
    );
    fetchData(
      "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/admin/totalBuyer",
      setBuyers,
      "buyers"
    );
    fetchData(
      "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/admin/totalStock",
      setStock,
      "stocks"
    );
    fetchData(
      "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/admin/totalOrder",
      setOrders,
      "orders"
    );
    fetchData(
      "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/admin/totalUsers",
      setUsers,
      "users"
    );
  }, []);

  if (loading) {
    return (
      <>
        <div className="relative">
          <img
            src="/img/AboutUs.jpg"
            className="h-[30vh] w-full object-cover"
          ></img>
          <div className="absolute lg:top-16 md:top-24 sm:top-24 lg:left-[72vh] md:left-[42vh] sm:left-[8vh] text-white">
            <p className="text-5xl">
              <b>Admin Dashboard</b>
            </p>
          </div>
        </div>
        <div className="pt-20 flex justify-center gap-5 text-xl h-[80vh] text-black font-semibold">
          <VscLoading className="animate-spin" />
          <p>Loading</p>
        </div>
      </>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // BarChart data
  const data = [
    {
      name: "Users",
      farmerCount: farmers,
      buyerCount: buyers,
      amt: farmers + buyers,
    },
  ];

  // PieChart data
  const PieData = [
    { name: "Users", value: users - 2 },
    { name: "Stocks", value: stock },
    { name: "Orders", value: orders },
  ];
  const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];

  return (
    <>
      <div>
        <div className="relative pl-[5px]">
          <img
            src="/img/photo3.jpg"
            className="h-[30vh] w-full object-cover"
          ></img>
          <div className="absolute lg:top-16 md:top-24 sm:top-24 lg:left-[72vh] md:left-[42vh] sm:left-[8vh] text-white">
            <p className="text-5xl">
              <b>Admin Dashboard</b>
            </p>
          </div>
        </div>
        <div className="pt-10 px-5 flex gap-10">
          {/* Flex container for charts */}
          <div className="flex-1 bg-[#f2f2f2] rounded-sm p-5" style={{ maxWidth: "600px" }}>
            <strong className="block mb-4">General Statistics</strong>
            <BarChart width={600} height={300} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="farmerCount" fill="#269553" name="Farmers" />
              <Bar dataKey="buyerCount" fill="#B3C860" name="Buyers" />
            </BarChart>
          </div>

          <div className="flex-1 bg-[#f2f2f2] rounded-sm p-5" style={{ maxWidth: "400px" }}>
            <strong className="block mb-4">Web Statistics</strong>
            <PieChart width={300} height={300}>
              <Pie
                dataKey="value"
                data={PieData}
                cx="50%"
                cy="50%"
                fill="#8884d8"
                label
              >
                {PieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
