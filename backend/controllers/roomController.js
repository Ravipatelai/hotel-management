const Room = require("../models/Room");

exports.addRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(201).json(room);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.bookRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);

    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    if (room.status === "booked") {
      return res.status(400).json({ message: "Room already booked" });
    }

    room.status = "booked";
    await room.save();

    res.json({ message: "Room booked successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ DELETE ROOM BY ROOM NUMBER
exports.deleteRoomByNumber = async (req, res) => {
  try {
    const { roomNumber } = req.params;

    const room = await Room.findOneAndDelete({ roomNumber });

    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.json({ message: "Room deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};