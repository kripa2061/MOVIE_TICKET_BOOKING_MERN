const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    
    "name": {
        type: "String"
    },
    "description": {
        type: "String"
    },
    "price": {
        type: "Number"
    },
    "datetime": [
        {
            date:{type:"Date"},
            time:{type:"string"}
        }
    ],
"image":{
      type:String,
       required:true
}
})
const movieModel = mongoose.model("movie", movieSchema);
module.exports =  movieModel ;