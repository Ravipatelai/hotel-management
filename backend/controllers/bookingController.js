const Booking = require("../models/Booking");
const Room = require("../models/Room");

exports.bookRoom = async (req, res) => {
    try {
        const room = await Room.findById(req.body.roomId);

        if (!room || room.status === "booked") {
            return res.status(400).json({ message: "Room not available" });
        }

        room.status = "booked";
        await room.save();

        const booking = await Booking.create({
            userId: req.user.id,
            roomId: req.body.roomId,
            checkInDate: req.body.checkInDate,
            checkOutDate: req.body.checkOutDate
        });

        res.status(201).json({
            message: "Room Booked Successfully",
            booking
              });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};