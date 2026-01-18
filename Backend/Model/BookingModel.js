const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  showId: { type: mongoose.Schema.Types.ObjectId, ref: "Show", required: true },
  bookedSeats: { type: [String], required: true }, // array of seat numbers
  amount: { type: Number, required: true },
  isPaid: { type: Boolean, default: false },
  showDateTime: {
    date: { type: String, required: true },
    time: { type: String, required: true },
  },
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
