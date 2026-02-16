import React, { useEffect, useState } from "react";
import axios from "axios";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/rooms");
      setRooms(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Rooms Data</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table border="1" cellPadding="10" cellSpacing="0" width="100%">
          <thead>
            <tr>
              <th>Room Number</th>
              <th>Type</th>
              <th>Status</th>
              <th>Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {rooms.length > 0 ? (
              rooms.map((room) => (
                <tr key={room._id}>
                  <td>{room.roomNumber}</td>
                  <td>{room.type}</td>
                  <td>{room.status}</td>
                  <td>₹{room.price}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" align="center">
                  No Rooms Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Rooms;