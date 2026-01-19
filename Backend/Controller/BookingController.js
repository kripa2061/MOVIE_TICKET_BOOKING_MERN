const bookingModel = require("../Model/BookingModel");
const movieModel=require("../Model/MovieModel")

const bookSeats=async(req,res)=>{
    try {
          const {userId,showId,bookedSeats,amount,isPaid,showDateTime}=req.body;
    if(!userId||!showId||!bookedSeats||!showDateTime){
        return res.json({success:false,message:"missing Data"})
    }
      const movie = await movieModel.findById(showId);
    if (!movie) return res.json({ success: false, message: "Movie not found" });
    const booking= new bookingModel({
        userId,showId,bookedSeats,amount,isPaid,showDateTime,image:movie.image
    })
    await booking.save();
    res.json({success:true,message:"Movie Booked"})
    } catch (error) {
           res.json({success:false,message:error.message}) 
    }
  
}
const getBookingsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const bookings = await bookingModel.find({ userId });
    if (!bookings || bookings.length === 0) {
      return res.json({ success: false, message: "No bookings found" });
    }
    res.json({ success: true, data: bookings });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

module.exports={bookSeats,getBookingsByUser}