const router = require("express").Router();
const { addRoom, getRooms } = require("../controllers/roomController");
const auth = require("../middleware/auth");
const role = require("../middleware/role");

router.post("/", auth, role("admin"), addRoom);
router.get("/", auth, getRooms);

module.exports = router;