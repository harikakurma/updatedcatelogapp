import React from "react";
import Avatar from "../UIElements/Avatar";
import { Link } from "react-router-dom";
import Cards from "../UIElements/Card";
import "./MovieDetails.css";
// import PlusIcon from "../Icons/plusone.svg";
// import CatelogyList from "./CategoryList";

const MovieDetails = props => {
  return (
    <React.Fragment>
      <li className="movie-details">
        <Cards className="movie-details__content">
          <Link to={`/${props.id}/MovieRecord`}>
            <div className="movie-details__image">
              <Avatar image={props.image} alt={props.name} />
            </div>
            <div className="movie-details__info">
              <h3>{props.name}</h3>

              {/* <h3>{props.uploadDate}</h3> */}
            </div>
          </Link>
        </Cards>
      </li>
    </React.Fragment>
  );
};
export default MovieDetails;
