import React from 'react';
import MovieItem from './MovieItem'

const MovieList = ({ movies }) => {
   
  const renderedList = movies.map(movie => {
    
    return (
     <div key={movie.imdbID} >
         <MovieItem movie={movie} />
     </div>
    );
  });
 
  return <div className="ui grid">{renderedList}</div>;

};

export default MovieList;