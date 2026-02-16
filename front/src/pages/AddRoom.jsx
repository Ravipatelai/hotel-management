import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [form, setForm] = useState({
    roomNumber: "",
    type: "",
    price: "",
    status: "available"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/rooms",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Room Added Successfully ✅");
      //navigate("/admin");

    } catch (error) {
      alert(error.response?.data?.message || "Error adding room");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        backgroundColor: "#f4f6f9"
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          width: "350px"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#333"
          }}
        >
          Add New Room
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px"
          }}
        >
          <input
            type="number"
            name="roomNumber"
            placeholder="Room Number"
            value={form.roomNumber}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option value="">Select Room Type</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="luxury">Luxury</option>
          </select>

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="available">Available</option>
            <option value="booked">Booked</option>
          </select>

          <button
            type="submit"
            style={{
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#007bff",
              color: "white",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Add Room
          </button>
        </form>
      </div>
    </div>
  );
};

// Reusable input style
const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "14px",
  outline: "none"
};

export default AddRoom;