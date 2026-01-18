const {bookingModel}=require("../Model/BookingModel")

const bookSeats=async(req,res)=>{
    const {userId,showId,bookedSeats,amount,isPaid,showDateTime}=req.body;
    if(!userId||!showId||!bookSeats||!amount||!isPaid||!showDateTime){
        return res.json({success:false,message:"missing Data"})
    }
    const booking= new bookingModel({
        userId,showId,bookedSeats,amount,isPaid,showDateTime
    })
    await booking.save();
    res.json({success:true,message:"Movie Booked"})
}
module.exports={bookSeats}