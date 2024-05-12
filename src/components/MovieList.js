// Create MovieList function
function MovieList({ movies }) {
  const movieInfo = movies.map((movie) => (
    <div key={movie.id}>
      <h2 className="example-heading">{movie.name}</h2>
      <img src={movie.poster} alt="poster" width="300px" height="400px"/>
      <p>
        {movie.synopsis}<br /><br />
        Rotten Tomatoes: <span className="percentage">{movie.rating}%</span>
      </p>
    </div>
  ))
  
  // Render the movie info
  return (
    <div>
      {movieInfo}
    </div>
  );
}

// Export the MovieList Component
export default MovieList;
