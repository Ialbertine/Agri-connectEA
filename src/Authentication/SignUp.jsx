import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const [generalError, setGeneralError] = useState("");
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    role: "",
    agreeTerms: "",
  });

  const [isLoading, setLoading] = useState(false);
  


  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const errors = {};

    if (!fullName) {
      errors.fullName = "Full Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    const phoneNumberRegex = /^\d{10}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      errors.phoneNumber = "Please enter a valid phone number";
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      errors.password =
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!role) {
      errors.role = "User role is required";
    }

    if (!agreeTerms) {
      errors.agreeTerms = "Please agree to terms and conditions";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post(
        "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/user/signup",
        {
          fullName: fullName,
          email: email,
          PhoneNumber: phoneNumber,
          password: password,
          confirmPassword: confirmPassword,
          role: role,
        }
      );

      if (response.status === 200 || response.status === 201) {
        console.log("Signup successful:", response.data);
        
        setSuccess("You have successfully registered your account.");
        setTimeout(() => {
          navigate("/otp");
        }, 3000);
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setGeneralError("an Error occurred during sign up");
      } else {
        console.error("Error during signup:", error);
        setGeneralError("Email is already in use. Please sign in.");
      }
      // this is used to reset the form when an error occurs
      setTimeout(() => {
        setGeneralError("");
        setFullName("");
        setEmail("");
        setPhoneNumber("");
        setPassword("");
        setConfirmPassword("");
        setRole("");
        setAgreeTerms(false);
        setErrors({});
      }, 5000);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat bg-opacity-50 object-cover"
      style={{ backgroundImage: "url('img/photo3.jpg')" }}
    >
      <div className="w-[80%] flex flex-col lg:flex-row lg:w-[70%] rounded-2lg">
        <div className="flex-grow lg:w-[40%] p-8 overflow-hidden">
          <div className="flex flex-col justify-center lg:pt-[10rem] text-[#cccbcb]">
            <span className="text-center lg:text-left text-4xl lg:text-6xl font-bold lg:pb-[1rem] font-serif">
              AgriConnect
              <br />
              <span className="text-green-900 pl-[3rem]">East-Africa</span>
            </span>
            <p className="text-lg lg:text-xl mb-4 w-full">
              Connecting farmers, innovators, and enthusiasts to cultivate a
              sustainable future. Join us on this journey to nurture the earth
              and feed the world.
            </p>
          </div>
        </div>
        <div className="bg-white opacity-70 shadow-2xl rounded-xl p-8 w-[100%] lg:w-[40%] h-[70%]">
          <h1 className="text-center text-3xl font-bold mb-4 text-green-900">
            Register Here
          </h1>
          {success && <p className="text-green-500">{success}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
            />
            {errors.fullName && (
              <p className="text-red-500">{errors.fullName}</p>
            )}

            <label htmlFor="email" className="mt-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}

            <label htmlFor="phoneNumber" className="mt-2">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
            />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber}</p>
            )}

            <label htmlFor="password" className="mt-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
              />
              <span
                onClick={passwordVisibility}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}

            <label htmlFor="confirmPassword" className="mt-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword}</p>
            )}

            <label htmlFor="userRole" className="mt-2">
              User Role
            </label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black mb-2"
            >
              <option value="" disabled>
                Select User Role
              </option>
              <option value="farmer">farmer</option>
              <option value="buyer">buyer</option>
            </select>
            {errors.userRole && (
              <p className="text-red-500">{errors.userRole}</p>
            )}

            <div className="flex gap-1 pb-2">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.value)}
                required
              />
              <label htmlFor="agreeTerms" className="text-sm">
                I agree to the Terms and Conditions
              </label>
            </div>
            {errors.agreeTerms && (
              <p className="text-xs text-red-500">{errors.agreeTerms}</p>
            )}
            {generalError && (
              <p className="text-red-500 text-center mb-1">{generalError}</p>
            )}

            <div className="mt-3 flex justify-center pb-3">
              <button
                type="submit"
                className={`bg-green-900 hover:bg-[#378000] text-white font-bold py-2 px-4 rounded-md w-[50%] ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Sign Up"}{" "}
              </button>
            </div>
          </form>
          <span className="flex justify-center gap-1">
            Already have an account?{" "}
            <Link to="/login" className="text-green-900">
              Sign In
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
