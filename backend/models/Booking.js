const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Room" },
    checkInDate: Date,
    checkOutDate: Date,
    status: {
        type: String,
        enum: ["booked", "checked-in", "checked-out"],
        default: "booked"
    }
});

module.exports = mongoose.model("Booking", bookingSchema);