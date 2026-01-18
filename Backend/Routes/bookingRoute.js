const express=require("express");
const { bookSeats } = require("../Controller/BookingController");

const bookingRoute=express.Router();
bookingRoute.post("/booking",bookSeats);