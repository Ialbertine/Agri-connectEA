import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VscLoading } from "react-icons/vsc";

const BLandingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const stockData = [
    {
      _id: 1,
      NameOfProduct: "Tea",
      description: "High quality Rwandan tea",
      pricePerTon: 2500,
      quantity: 100,
      typeOfProduct: "Beverage",
      country: "Rwanda",
      image: "/img/Tea.jpg",
    },
    {
      _id: 2,
      NameOfProduct: "Cotton",
      description: "Soft and pure cotton",
      pricePerTon: 1500,
      quantity: 200,
      typeOfProduct: "Textile",
      country: "Tanzania",
      image: "/img/cotton.jpg",
    },
    {
      _id: 3,
      NameOfProduct: "Coffee",
      description: "Premium Arabica coffee beans",
      pricePerTon: 3000,
      quantity: 150,
      typeOfProduct: "Beverage",
      country: "Kenya",
      image: "/img/coffee.jpeg",
    },
    {
      _id: 4,
      NameOfProduct: "Sugar Cane",
      description: "Fresh and organic sugar cane",
      pricePerTon: 1800,
      quantity: 120,
      typeOfProduct: "Crop",
      country: "Uganda",
      image: "/img/sugar_cane.jpg",
    },
    {
      _id: 5,
      NameOfProduct: "Tobacco",
      description: "High quality tobacco leaves",
      pricePerTon: 2200,
      quantity: 80,
      typeOfProduct: "Crop",
      country: "Burundi",
      image: "/img/tobacco.jpg",
    },
    {
      _id: 6,
      NameOfProduct: "Coconut",
      description: "Fresh and organic coconuts",
      pricePerTon: 2000,
      quantity: 50,
      typeOfProduct: "Fruit",
      country: "South Sudan",
      image: "/img/coconut.jpg",
    },
    {
      _id: 7,
      NameOfProduct: "Cassava",
      description: "High quality maize",
      pricePerTon: 1100,
      quantity: 250,
      typeOfProduct: "grain",
      country: "Kenya",
      image: "/img/Maize.webp",
    },
    {
      _id: 8,
      NameOfProduct: "Cassava",
      description: "High quality cassava",
      pricePerTon: 1100,
      quantity: 250,
      typeOfProduct: "Root Crop",
      country: "Burundi",
      image: "/img/cassava.webp",
    },
    {
      _id: 9,
      NameOfProduct: "Rice",
      description: "High quality Tanzanian rice",
      pricePerTon: 1100,
      quantity: 250,
      typeOfProduct: "grain",
      country: "Tanzania",
      image: "/img/Rice.webp",
    },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredStockData = stockData.filter((stockItem) =>
    stockItem.NameOfProduct.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div>
        <div className="relative">
          <img
            src="/img/AboutUs.png"
            alt="Agri-Connect Banner"
            className="h-[20vh] w-[100%] object-cover"
          />
          <div className="absolute lg:top-10 md:top-24 sm:top-5 lg:left-[70vh] md:left-[42vh] sm:left-[8vh] text-[#cbcaca]">
            <p className="text-4xl font-bold">Buyer Dashboard</p>
          </div>
        </div>
        <div className="pt-20 flex justify-center gap-5 text-xl h-[80vh] text-black font-semibold">
          <VscLoading className="animate-spin" />
          <p>Loading</p>
        </div>
      </div>
    );
  }

  return (
    <div className="landing-page bg-gray-100">
      <div className="relative">
        <img
          src="/img/AboutUs.png"
          alt="Agri-Connect Banner"
          className="h-[20vh] w-[100%] object-cover"
        />
        <div className="absolute lg:top-10 md:top-24 sm:top-5 lg:left-[70vh] md:left-[42vh] sm:left-[8vh] text-[#cbcaca]">
          <p className="text-4xl font-bold">Buyer Dashboard</p>
        </div>
      </div>
      {error && <div>Error: {error}</div>}
      <div className="m-4">
        <input
          type="text"
          placeholder="Search for a product"
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-4 py-2 border rounded-md"
        />
        <h1 className="text-xl font-medium my-3">
          Choose what you can order from these and click on it to create your Order
        </h1>
      </div>
      {filteredStockData.length > 0 ? (
        <div className="stock-container px-4 py-8 bg-white rounded-md shadow-md mt-8">
          <h2 className="text-3xl font-bold mb-4 text-green-800">Available Stock</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredStockData.map((stockItem) => (
              <Link
                key={stockItem._id}
                to={`/dashboard/buyer/create/${stockItem._id}/${encodeURIComponent(stockItem.NameOfProduct.trim())}`}
                className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center no-underline"
              >
                <img
                  src={stockItem.image}
                  alt={stockItem.NameOfProduct}
                  className="w-[65%] h-[10rem] object-cover mb-4"
                />
                <span className="text-xl font-medium">
                  Product Name: {stockItem.NameOfProduct}
                </span>
                <div className="text-left pt-3">
                  <div className="pb-2">
                    <span className="text-gray-600">
                      {stockItem.description}
                    </span>
                  </div>
                  <div className="flex gap-2 text-xl font-medium">
                    <span>Price PerTon: {stockItem.pricePerTon}</span>
                    <span>RWF</span>
                  </div>
                  <div className="flex gap-2 text-xl font-medium">
                    <span>Quantity: {stockItem.quantity}</span>
                    <span>Ton</span>
                  </div>
                  <span className="text-xl font-medium">
                    Type of Product: {stockItem.typeOfProduct}
                  </span><br/>
                  <span className="text-xl font-medium">
                    Country: {stockItem.country}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="pl-4">
          <p>No stock data available</p>
        </div>
      )}
    </div>
  );
};

export default BLandingPage;
