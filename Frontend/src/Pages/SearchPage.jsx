import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import MovieCard from '../Component/MovieCard';

const SearchPage = () => {
   const url = "https://movie-ticket-booking-backend-m5sa.onrender.com";
const [movie,setMovie]=useState([])
const fetchMovie = async () => {
  try {
    const movieList = await axios.get(url + `/api/movie/movieList`);
    if (movieList) {
         setMovie(movieList.data.data)
         console.log(movieList.data);
      toast.success("Movie fetched successfully");
    } else {
      toast.error("Movie not found");
    }
  } catch (error) {
    toast.error(error.message);
  }
};

useEffect(() => {
  fetchMovie();
}, []);

    const [query, setQuery] = useState("")
    const filteredMovie = movie.filter(m => m.name.toLowerCase().includes(query.toLowerCase()))
    return (
        <div>
            <input type='text' onChange={(e)=>{setQuery(e.target.value)}}/>
            <button >Search</button>
          {filteredMovie.map((item,index)=>{
            return(
            <div key={index}>
           <MovieCard  movie={item}/>
            </div>
            )
          })}
        </div>
    )
}

export default SearchPage
