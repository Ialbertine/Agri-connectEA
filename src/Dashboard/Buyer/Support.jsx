import React, { useState } from "react";
import axios from "axios";

const Support = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [subject, setSubject] = useState("");
   const [message, setMessage] = useState("");

   const [successMessage, setSuccessMessage] = useState("");
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
         setSuccessMessage("Message sent successfully");
         setError("");
         setTimeout(() => {
           setSuccessMessage("");
           resetForm();
         }, 5000);
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
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-[80%] max-w-md bg-gray-100 p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-green-800">Support</h1>
        {successMessage && (
          <p className="text-green-500 mb-4">{successMessage}</p>
        )}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="issue" className="block mb-2">
              Issue
            </label>
            <input
              type="text"
              id="issue"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
