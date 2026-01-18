const express = require("express");
const path = require("path");
const multer = require("multer");
const { addMovie, fetchMovie, removeMovie, getMovieById } = require("../Controller/MovieController");

const movieRoute = express.Router();

// -------- Multer storage config --------
const storage = multer.diskStorage({
  destination: path.join(path.resolve(), "uploads"), // folder to save images
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Create multer instance
const upload = multer({ storage });


movieRoute.post("/addMovie", upload.single("image"), addMovie);
movieRoute.get("/movieList",fetchMovie);
movieRoute.delete("/deleteMovie/:id",removeMovie)
movieRoute.get("/getbyId/:id",getMovieById)
module.exports = { movieRoute };
