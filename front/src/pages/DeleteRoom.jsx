import React, { useState } from "react";
import axios from "axios";

const DeleteRoom = () => {
  const [roomNumber, setRoomNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!roomNumber) {
      setMessage("Please enter room number");
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:5000/api/rooms/number/${roomNumber}`
      );

      setMessage(response.data.message);

      // ✅ Clear input after success
      setRoomNumber("");

    } catch (error) {
      setMessage(error.response?.data?.message || "Error deleting room");
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
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          width: "350px",
          textAlign: "center"
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Delete Room</h2>

        <form
          onSubmit={handleDelete}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px"
          }}
        >
          <input
            type="number"
            placeholder="Enter Room Number"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
          />

          <button
            type="submit"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#dc3545",
              color: "white",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Delete Room
          </button>
        </form>

        {message && (
          <p style={{ marginTop: "15px", color: "green" }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default DeleteRoom;