import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MovieComponent = () => {
  const [movies, setMovies] = useState([]); // state must start as an array
  const [query, setQuery] = useState("");

  const url = "http://localhost:8000";

  const fetchMovie = async () => {
    try {
      const response = await axios.get(`${url}/api/movie/movieList`);
      if (Array.isArray(response.data)) {
        setMovies(response.data); // store the array
        toast.success("Movies fetched successfully");
      } else {
        toast.error("No movies found");
        setMovies([]); // fallback to empty array
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  // Filter movies based on search query
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px" }}
      />

      <ul>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <li key={movie._id}>{movie.name}</li>
          ))
        ) : (
          <li>No movies found</li>
        )}
      </ul>
    </div>
  );
};

export default MovieComponent;