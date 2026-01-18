const express=require("express");
const { bookSeats, getbookedSeats } = require("../Controller/BookingController");

const bookingRoute=express.Router();
bookingRoute.post("/Moviebooking",bookSeats);
bookingRoute.get("/getmoviebyId/:id",getbookedSeats)

module.exports={bookingRoute}