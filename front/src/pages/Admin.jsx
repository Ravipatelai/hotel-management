import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Admin = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        if (!token) {
          navigate("/login");
          return;
        }

        const decoded = jwtDecode(token);

        if (decoded.role !== "admin") {
          alert("Access Denied! Admin Only");
          navigate("/home");
          return;
        }

        const res = await axios.get(
          "http://localhost:5000/api/admin/dashboard",
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );

        setData(res.data);
      } catch (error) {
        navigate("/login");
      }
    };

    fetchDashboard();
  }, [token, navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/home");
  };

  return (
    <div
      style={{
        marginTop:"-40px",
        minHeight: "50vh",
        backgroundColor: "#f4f6f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
          width: "400px",
          textAlign: "center"
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#333" }}>
          Admin Dashboard
        </h1>

        {data ? (
          <>
            <p style={{ fontWeight: "bold", color: "#007bff" }}>
              {data.message}
            </p>

            <div
              style={{
                marginTop: "20px",
                textAlign: "left",
                background: "#f8f9fa",
                padding: "15px",
                borderRadius: "8px"
              }}
            >
              <p><strong>Total Users:</strong> {data.totalUsers}</p>
              <p><strong>Total Bookings:</strong> {data.totalBookings}</p>
              <p><strong>Total Rooms:</strong> {data.totalRooms}</p>
            </div>

            <div
              style={{
                marginTop: "25px",
                display: "flex",
                flexDirection: "column",
                gap: "12px"
              }}
            >
              <button style={buttonStyleBlue} onClick={() => navigate("/addroom")}>
                Add Room
              </button>

              <button style={buttonStyleGreen} onClick={() => navigate("/rooms")}>
                Show Rooms
              </button>

              <button style={buttonStyleRed} onClick={() => navigate("/deleteroom")}>
                Delete Room
              </button>
              <button style={buttonStyleRed} onClick={() => navigate("/getusers")}>
                Get Users
              </button>

              <button style={buttonStyleDark} onClick={logout}>
                Logout
              </button>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

// Button Styles
const buttonStyleBlue = {
  padding: "10px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#007bff",
  color: "white",
  fontSize: "15px",
  cursor: "pointer"
};

const buttonStyleGreen = {
  padding: "10px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#28a745",
  color: "white",
  fontSize: "15px",
  cursor: "pointer"
};

const buttonStyleRed = {
  padding: "10px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#dc3545",
  color: "white",
  fontSize: "15px",
  cursor: "pointer"
};

const buttonStyleDark = {
  padding: "10px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#343a40",
  color: "white",
  fontSize: "15px",
  cursor: "pointer"
};

export default Admin;