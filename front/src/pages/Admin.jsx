import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Admin = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [data, setData] = useState(null);

  useEffect(() => {
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

    // Fetch admin data
    axios
      .get("http://localhost:5000/api/admin/admin-data", {
        headers: { Authorization: token }
      })
      .then((res) => setData(res.data))
      .catch(() => navigate("/login"));

  }, [token, navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Admin Dashboard</h1>

      {data ? (
        <>
          <h3>{data.message}</h3>
          <p>Total Users: {data.totalUsers}</p>
          <p>Total Bookings: {data.totalBookings}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Admin;