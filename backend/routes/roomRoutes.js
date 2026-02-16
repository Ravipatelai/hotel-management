const express = require("express");
const router = express.Router();
const roomController = require("../controllers/roomController");

router.post("/", roomController.addRoom);
router.get("/", roomController.getRooms);
router.put("/book/:id", roomController.bookRoom);   // 👈 ADD THIS

router.delete("/number/:roomNumber", roomController.deleteRoomByNumber);

module.exports = router;