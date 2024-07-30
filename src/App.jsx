import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import Forget from "./Authentication/Forget";
import Reset from "./Authentication/Reset";
import Otp from "./Authentication/Otp";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Members from "./Pages/Members";
import News from "./Pages/News";

import BuyerLayout from "./Dashboard/Buyer/BuyerLayout";
import BLandingPage from "./Dashboard/Buyer/BlandingPage";
import AllOrders from "./Dashboard/Buyer/AllOrders";
import Create from "./Dashboard/Buyer/Create";
import BuyerProfile from "./Dashboard/Buyer/BuyerProfile";
import Support from "./Dashboard/Buyer/Support";
import ProtectedRoute from "./ProtectedRoute";

import LandingPage from "./Dashboard/Farmer/LandingPage";
import FarmerLayout from "./Dashboard/Farmer/FarmerLayout";
import FarmerProfile from "./Dashboard/Farmer/Profile";
import UploadProduct from "./Dashboard/Farmer/UploadProduct";
import ReceivedOrders from "./Dashboard/Farmer/ReceivedOrders";
import Stock from "./Dashboard/Farmer/Stock";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="members" element={<Members />} />
          <Route path="news" element={<News />} />
        </Route>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/otp" element={<Otp />} />

        <Route
          path="/dashboard/buyer"
          element={<ProtectedRoute allowedRoles={["buyer"]} />}
        >
          <Route path="" element={<BuyerLayout />}>
            <Route path="" element={<BLandingPage />} />
            <Route path="allorders" element={<AllOrders />} />
            <Route path="create/:productId/:NameOfProduct" element={<Create />} />
            <Route path="create" element={<Create />} />
            <Route path="profile" element={<BuyerProfile />} />
            <Route path="news" element={<News />} />
            <Route path="support" element={<Support />} />
          </Route>
        </Route>

        <Route
          path="/dashboard/farmer"
          element={<ProtectedRoute allowedRoles={["farmer"]} />}
        >
          <Route element={<FarmerLayout />}>
            <Route path="" element={<LandingPage />} />
            <Route path="orders" element={<ReceivedOrders />} />
            <Route path="uploadproduct" element={<UploadProduct />} />
            <Route path="profile" element={<FarmerProfile />} />
            <Route path="stock" element={<Stock />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
