const  movieModel  = require("../Model/MovieModel");

const addMovie = async (req, res) => {
  try {
  let image_fileName = req.file ? req.file.filename : req.body.image;
let thumbnail_fileName = req.file ? req.file.filename : req.body.thumbnail;

    let datetimeArray = [];
    if (req.body.datetime) {
      // Parse string or take object directly
      const parsed =
        typeof req.body.datetime === "string"
          ? JSON.parse(req.body.datetime)
          : req.body.datetime;
      datetimeArray = Object.entries(parsed).flatMap(([date, times]) =>
        times.map((time) => ({ date, time }))
      );
    }

    const movie = new movieModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      datetime: datetimeArray,
      image: image_fileName,
      thumbnail:thumbnail_fileName,
      movieUrl:req.body.movieUrl,
      Runtime:req.body.Runtime,
      generes:req.body.generes,
      cast:req.body.cast
    });

    await movie.save();

    res.json({ success: true, message: "Movie Added successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const fetchMovie = async (req, res) => {
  try {
    const movies = await movieModel.find({});
    res.json({ success: true, data: movies });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
const removeMovie=async(req,res)=>{
  try {
const id=req.params.id;
const movies=await movieModel.findByIdAndDelete(id)
  if(movies){
    res.json({success:true,message:"movie removed successfully"})
  }else{
        res.json({success:false,message:"movie not found"})
  }
  } catch (error) {
      res.json({success:false,message:error.message});
  }


}
const getMovieById=async(req,res)=>{
  try {
    const id=req.params.id;
  const movies=await movieModel.findById(id);
  if(!movies){
  res.json({success:false,message:"movies not available"});
  }else{
 res.json({success:true,data:movies});
  }

  } catch (error) {
     res.json({success:false,message:error.message});
  }
  
}
module.exports = { addMovie, fetchMovie ,removeMovie,getMovieById};
