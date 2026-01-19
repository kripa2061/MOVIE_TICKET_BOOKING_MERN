const express=require("express");
const { bookSeats, getbookedSeats, getBookingsByUser } = require("../Controller/BookingController");

const bookingRoute=express.Router();
bookingRoute.post("/Moviebooking",bookSeats);
bookingRoute.get("/getmoviebyId/:userId",getBookingsByUser)

module.exports={bookingRoute}