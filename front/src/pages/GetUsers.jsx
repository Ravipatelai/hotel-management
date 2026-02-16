import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/auth/users",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUsers(res.data);
      } catch (error) {
        console.error(error);
        alert("Unauthorized Access");
        navigate("/login");
      }
    };

    fetchUsers();
  }, [navigate, token]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>All Registered Users</h1>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            
            <th>Email</th>
            <th>Mobile</th>
            <th>Room Type</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Message</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.roomType}</td>
                <td>
                  {new Date(user.checkIn).toLocaleDateString()}
                </td>
                <td>
                  {new Date(user.checkOut).toLocaleDateString()}
                </td>
                <td>{user.message}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No Users Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "30px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
};

export default GetUsers;