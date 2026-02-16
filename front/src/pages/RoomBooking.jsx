import React, { useEffect, useState } from "react";
import axios from "axios";

function RoomBooking() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    const res = await axios.get("http://localhost:5000/api/rooms");
    setRooms(res.data);
  };

  const bookRoom = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/rooms/book/${id}`);
      alert("Room booked successfully!");
      fetchRooms();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Room Booking</h2>

      {rooms.map((room) => (
        <div
          key={room._id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        >
          <h3>Room No: {room.roomNumber}</h3>
          <p>Type: {room.type}</p>
          <p>Price: ₹{room.price}</p>
          <p>Status: {room.status}</p>

          {room.status === "available" && (
            <button
              onClick={() => bookRoom(room._id)}
              style={{
                padding: "8px 12px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Book Now
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default RoomBooking;