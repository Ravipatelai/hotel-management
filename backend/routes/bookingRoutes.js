const router = require("express").Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const bookingController = require("../controllers/bookingController");

router.post("/book", auth, role("customer"), bookingController.bookRoom);

module.exports = router;