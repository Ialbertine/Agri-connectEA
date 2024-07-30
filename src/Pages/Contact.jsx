import React, { useState } from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { FaXTwitter, FaInstagram, FaPinterestP } from "react-icons/fa6";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState(""); 
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); 

    const formData = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      subject: subject,
      message: message,
    };

    try {
      const response = await axios.post(
        "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/contact/add",
        formData
      );

      if (response.status === 200 || response.status === 201) {
        setResponseMessage("Message sent successfully");
        setError("");
        setTimeout(() => {
          setResponseMessage(""); 
          resetForm();
        }, 20000);
      } else {
        console.error("Response status:", response.status);
        console.error("Response data:", response.data);
        setError("Failed to submit the form. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsSubmitting(false); 
    }
  };

//   this will be used to reset form after message was sent
  const resetForm = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setSubject("");
    setMessage("");
  };

  return (
    <>
      <div id="contact">
        <div className="relative">
          <img
            src="img/AboutUs.png"
            className="h-[50vh] w-full object-cover"
            alt="Contact Us"
          />
          <div className="absolute lg:top-48 md:top-44 sm:top-44 lg:left-[92vh] md:left-[42vh] sm:left-[8vh] text-white">
            <p className="text-5xl">
              <b>Contact US</b>
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-col sm:flex-col justify-evenly py-28  bg-white">
          <div className="lg:w-[44vh] md:w-[80vh] mb-10 sm:w-[44vh] flex flex-col lg:p-0 md:p-0 sm:p-3 gap-3  lg:ml-0 md:ml-20 sm:ml-7">
            <p>Contact now</p>
            <p className="text-5xl text-green-900 lg:w-[50vh]">Get in touch with us</p>
            <p>
              Our contact information reflects our commitment to providing
              excellent customer service and support to all users of our
              Agri-connectEA platform. Feel free to reach out to us with any
              questions or needs you may have.
            </p>
            <div className="flex gap-3">
              <div className="rounded-full bg-[black] flex items-center justify-center w-11 h-11 text-2xl cursor-pointer">
                <FaXTwitter className="text-[white]" />
              </div>
              <div className="rounded-full bg-[#4343f1] flex items-center justify-center w-11 h-11  text-3xl  cursor-pointer">
                <MdOutlineFacebook className="text-white" />
              </div>
              <div className="rounded-full bg-[red] flex items-center justify-center w-11 h-11  cursor-pointer">
                <FaPinterestP className="text-[white] text-3xl" />
              </div>
              <div className="rounded-full flex items-center justify-center w-11 h-11  text-3xl bg-gradient-to-r from-[#feda75] via-[#fa7e1e] via-[red] to-[purple] cursor-pointer">
                <FaInstagram className="text-white" />
              </div>
            </div>
          </div>
          <div className="lg:ml-0 md:ml-20 sm:ml-7">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex lg:flex-row md:flex-col sm:flex-col gap-5">
                <input
                  type="text"
                  name="names"
                  placeholder="Names"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-[#ebebea] rounded-xl p-5 lg:w-[40vh] md:w-[80vh] sm:w-[40vh]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#ebebea] rounded-xl p-5 lg:w-[40vh] md:w-[80vh] sm:w-[40vh]"
                  required
                />
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col gap-5 ">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="bg-[#ebebea] rounded-xl p-5 lg:w-[40vh] md:w-[80vh] sm:w-[40vh]"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="bg-[#ebebea] rounded-xl p-5 lg:w-[40vh] md:w-[80vh] sm:w-[40vh]"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Write message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-[#ebebea] rounded-xl p-2 lg:w-[83vh] md:w-[80vh] sm:w-[40vh] h-[30vh]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-200 px-5 py-3 lg:w-[30vh] md:w-[27vh] sm:w-[27vh] text-xl rounded-xl text-black hover:text-white hover:bg-green-900 transition duration-500 ease-in-out"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send message"}{" "}
              </button>
            </form>
            {responseMessage && (
              <div className="bg-[#ebebea] text-green-700 px-4 py-3 rounded mt-3">
                {responseMessage}
              </div>
            )}

            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
