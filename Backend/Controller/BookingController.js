const bookingModel = require("../Model/BookingModel");


const bookSeats=async(req,res)=>{
    try {
          const {userId,showId,bookedSeats,amount,isPaid,showDateTime}=req.body;
    if(!userId||!showId||!bookedSeats||!showDateTime){
        return res.json({success:false,message:"missing Data"})
    }
    const booking= new bookingModel({
        userId,showId,bookedSeats,amount,isPaid,showDateTime
    })
    await booking.save();
    res.json({success:true,message:"Movie Booked"})
    } catch (error) {
           res.json({success:false,message:error.message}) 
    }
  
}
const getbookedSeats=async(req,res)=>{
try {
        const id=req.params.body;
    const booking=await bookingModel.findById(id)
    if(booking){
        return res.json({success:true,data:{booking}})
    }else{
        return res.json({success:false,message:"No booking"})
    }
} catch (error) {
       return res.json({success:false,message:error.message})
}
}
module.exports={bookSeats,getbookedSeats}