require("dotenv").config();
const express = require("express");
const cors = require("cors");   // ✅ add this
const connectDB = require("./config/db");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

connectDB();

// ✅ Add CORS middleware
app.use(cors());

app.use(express.json());


app.use("/api/admin", adminRoutes);
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/rooms", require("./routes/roomRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});