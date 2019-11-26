import React from "react";
import CompleteMovieDetails from "./CompleteMovieDetails";

const MovieRecord = props => {
  return (
    <ul>
      {props.movies.map(completeMovieDetails => (
        <CompleteMovieDetails
          key={completeMovieDetails.id}
          id={completeMovieDetails.id}
          name={completeMovieDetails.name}
          image={completeMovieDetails.image}
          uploadDate={completeMovieDetails.uploadDate}
          releaseDate={completeMovieDetails.releaseDate}
          director={completeMovieDetails.director}
          story={completeMovieDetails.story}
          cast={completeMovieDetails.cast}
        />
      ))}
    </ul>
  );
};
export default MovieRecord;
