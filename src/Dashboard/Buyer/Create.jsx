import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const { stockItemId, NameOfProduct } = useParams(); // Extracting nameofproduct from URL params
  // const params = useParams();
  // console.log(params);
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  console.log(NameOfProduct);
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation for the order
    let isValid = true;
    setErrorMessage("");

    if (quantity < 1 || !Number.isInteger(quantity)) {
      isValid = false;
      setErrorMessage("Please enter a valid quantity (positive integer).");
    }

    if (phoneNumber.trim() === "") {
      isValid = false;
      setErrorMessage("Please enter your phone number.");
    }

    if (shippingAddress.trim() === "") {
      isValid = false;
      setErrorMessage("Please enter your shipping address.");
    }

    if (!unit) {
      isValid = false;
      setErrorMessage("Please select a unit.");
    }

    // If validation is successful, create the order
    if (isValid) {
      try {
        const token = localStorage.getItem("token");
        const orderData = {
          selectedStockItems: [
            {
              NameOfProduct: NameOfProduct, // Using nameofproduct extracted from URL params
              quantity: quantity,
            },
          ],
          phoneNumber: phoneNumber,
          shippingAddress: shippingAddress,
        };

        const response = await axios.post(
          "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/order/create",
          orderData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setSuccessMessage("Order created successfully!");
        setTimeout(() => {
          navigate("/dashboard/buyer/allorders");
        }, 2000);
      } catch (error) {
        console.error("Error creating order:", error);
        setErrorMessage("Failed to create order. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <h1 className="text-2xl font-bold mb-4">Create New Order</h1>

      {errorMessage && (
        <div className="text-red-500 font-bold mb-4">{errorMessage}</div>
      )}

      {successMessage && (
        <div className="text-green-500 font-bold mb-4">{successMessage}</div>
      )}

      <form onSubmit={handleSubmit} className="w-[80%] lg:w-[50%]">
        <div className="mb-3 w-full">
          <label
            htmlFor="quantity"
            className="block text-gray-700 font-bold mb-1"
          >
            Quantity
          </label>
          <div className="flex items-center">
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="shadow appearance-none border rounded w-[50%] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black"
              required
            />
            <select
              id="unit"
              name="unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="shadow appearance-none border rounded w-[50%] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black ml-3"
              required
            >
              <option value="" disabled>
                Select Unit
              </option>
              <option value="kg">Kg</option>
              <option value="Ton">Ton</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-gray-700 font-bold mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="shippingAddress"
            className="block text-gray-700 font-bold mb-1"
          >
            Shipping Address
          </label>
          <textarea
            id="shippingAddress"
            name="shippingAddress"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black"
            required
          />
        </div>
        <div className="flex gap-5">
          <button
            type="submit"
            className="bg-green-900 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-offset-2"
          >
            Order
          </button>

          <Link to="/dashboard/buyer">
            <button
              type="button"
              className="bg-green-900 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-offset-2"
            >
              Back
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Create;
