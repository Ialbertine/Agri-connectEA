import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from "./Pages/Home";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import Forget from "./Authentication/Forget";
import Reset from "./Authentication/Reset";
import Otp from "./Authentication/Otp";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
        </Route>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App