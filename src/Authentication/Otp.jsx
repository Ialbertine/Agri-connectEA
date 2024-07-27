import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (value.length <= 1 && value.match(/[0-9]/)) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);

      if (index < otp.length - 1) {
        setActiveIndex(index + 1);
      }
    }
  };

  const handleKeyPress = (index, e) => {
    if (e.key === "Backspace") {
      if (otp[index] === "") {
        if (index > 0) {
          setActiveIndex(index - 1);
        }
      } else {
        const newOTP = [...otp];
        newOTP[index] = "";
        setOTP(newOTP);
      }
    } else if (e.key.match(/[0-9]/)) {
      const newOTP = [...otp];
      newOTP[index] = e.key;
      setOTP(newOTP);

      if (index < otp.length - 1) {
        setActiveIndex(index + 1);
      }
    }
  };

  const handleFocus = (index) => {
    setActiveIndex(index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const otpValue = otp.join("");
    try {
      const response = await axios.post(
        "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/user/verify",
        { otp: otpValue }
      );

      // Set success message
      setSuccessMessage(
        "Your Account has been verified successfully. Please Sign in to Continue."
      );

     
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.error("Error:", error.response);
      if (error.response && error.response.status === 400) {
        setErrorMessage("Failed to verify OTP. Please try again.");
      } else {
        setErrorMessage(
          "An unexpected error occurred. Please try again later."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#e4e3e3]">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className=" mb-6">Please check your Email and Enter verification code below to verify your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center space-x-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                className={`w-12 h-12 border border-[#0000005f] rounded-md text-center ${
                  activeIndex === index
                    ? "border-blue-500 focus:border-blue-700"
                    : ""
                }`}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyPress(index, e)}
                onFocus={() => handleFocus(index)}
                autoFocus={index === activeIndex}
              />
            ))}
          </div>
          {errorMessage && (
            <div className="text-red-500 text-center mt-2">{errorMessage}</div>
          )}
          {successMessage && ( // Render success message
            <div className="text-green-500 text-center mt-2">
              {successMessage}
            </div>
          )}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className={`bg-green-900 text-white w-32 h-11 rounded ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "verifying..." : "Verify"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Otp;
