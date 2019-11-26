import React from "react";
import Card from "../UIElements/Card";
const CompleteMovieDetails = props => {
  return (
    <li className="completeMovie-details">
      <Card className="completemovie-details__content">
        <div className="completeMovie-details__image">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="completeMovie-details__info">
          <h1>{props.name}</h1>
          <h3>Director: {props.director}</h3>
          <h3>Release Date: {props.releaseDate}</h3>
          <p>Story: {props.story}</p>
          <p>Cast:{props.cast}</p>
          <h2>{props.category}</h2>
          <h3>Uploaded Date:{props.uploadDate}</h3>
        </div>

        <div className="completeMovie-details__actions">
          <button>Delete</button>
          <button>Edit</button>
        </div>
      </Card>
    </li>
  );
};
export default CompleteMovieDetails;
