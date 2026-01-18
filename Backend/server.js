const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");   // <- don't forget to import
require("dotenv").config();
const connectDB = require("./connection");
const authRouter = require("./Routes/authRoutes");
const userRouter = require("./Routes/userRoutes");
const { clerkMiddleware } = require("@clerk/express");
const { serve } = require("inngest/express");
const { inngest, functions } = require("./Inngest/Index");

const { movieRoute } = require("./Routes/MovieRoute");
const BookingModel = require("./Model/BookingModel");
const { bookingRoute } = require("./Routes/bookingRoute");

const app = express();
const PORT = process.env.PORT || 3000;
connectDB(); 
const allowedOrigins = ['http://localhost:5173'];

app.use(cookieParser()); 
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());
// in your Express app
app.use('/uploads', express.static('uploads'));

app.use('/api/user',userRouter);
app.use('/api/movie',movieRoute)
app.use('/api/booking',bookingRoute)
app.get("/", (req, res) => {
  res.send("Server running and database connected!");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
