const express=require("express");
const { bookSeats, getbookedSeats, getBookingsByUser, getallBooking } = require("../Controller/BookingController");

const bookingRoute=express.Router();
bookingRoute.post("/Moviebooking",bookSeats);
bookingRoute.get("/getmoviebyId/:userId",getBookingsByUser)
bookingRoute.get("/bookingList",getallBooking)
module.exports={bookingRoute}