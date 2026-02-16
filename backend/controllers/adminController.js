const User = require("../models/User");
const Booking = require("../models/Booking");
const Room = require("../models/Room");

const getDashboard = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalBookings = await Booking.countDocuments();
    const totalRooms = await Room.countDocuments();

    res.json({
      message: "Welcome Admin",
      totalUsers,
      totalBookings,
      totalRooms
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getDashboard };