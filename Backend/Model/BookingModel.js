const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  showId: { type: mongoose.Schema.Types.ObjectId, ref: "Show", required: true },
  name:{
    type:String,
    required:true
  },
  bookedSeats: { type: [String], required: true }, // array of seat numbers
  price: { type: Number , required:true},
  isPaid: { type: Boolean, default: false },
  // showDateTime: {
  //   date: { type: String },
  //   time: { type: String }
  // },
  showDateTime: [
    {
      date: { type: String },
      time: { type: String }
    }
  ],

  "image": {
    type: String,

  }

}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
