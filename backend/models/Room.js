const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    roomNumber: Number,
    type: String,
    price: Number,
    status: {
        type: String,
        enum: ["available", "booked"],
        default: "available"
    }
});

module.exports = mongoose.model("Room", roomSchema);