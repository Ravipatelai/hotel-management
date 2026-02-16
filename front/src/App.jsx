import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import RoomBooking from "./pages/RoomBooking";
import Rooms from "./pages/Rooms";
import AddRoom from "./pages/AddRoom";
import DeleteRoom from "./pages/DeleteRoom";
import GetUsers from "./pages/GetUsers";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="service" element={<Service />} />
          <Route path="booknow" element={<RoomBooking />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contact" element={<Contact />} />
          <Route path="admin" element={<Admin />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="addroom" element={<AddRoom />} />
          <Route path="/deleteroom" element={<DeleteRoom />} />
           <Route path="/getusers" element={<GetUsers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;