const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomNumber: {
    type: Number,
    required: true,
    unique: true
  },
  type: {
    type: String,
    required: true,
    enum: ["single", "double", "luxury"]
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ["available", "booked"],
    default: "available"
  }
});

module.exports = mongoose.model("Room", roomSchema);