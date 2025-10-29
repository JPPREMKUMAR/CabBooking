import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react'
import Home from "./pages/Home"
import SuvTaxi from "./pages/SuvTaxi"
import Outstation from "./pages/Outstation"
import Services from "./pages/Services"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Login from "./pages/Login"
import Register from "./pages/Register"
import RestPassword from "./pages/ResetPassword"
import MyProfile from "./pages/MyProfile"
import ResetPassword from "./pages/ResetPassword"

function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suvTaxi" element={<SuvTaxi />} />
          <Route path="/outStation" element={<Outstation />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/myProfile" element={<MyProfile />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
