import React from "react";
import MovieDetails from "./MovieDetails";
// import CategoryList from "./CategoryList";
import "./CompleteMovieDetails.css";
import "./MovieList.css";
import Cards from "../UIElements/Card";
import { Link } from "react-router-dom";
const MovieList = props => {
  if (props.movies.length === 0) {
    return (
      <h1 className="No-Movie text-center" style={{ color: "red" }}>
        NO movie yet listed
      </h1>
    );
  }
  return (
    <div>
      <ul className="movie-list">
        {props.movies.map(item => (
          <MovieDetails
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
          />
        ))}
      </ul>
      <div>
        <div className="movie-details">
          <Cards className="movie-details__content">
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 40 40"
              >
                <title>plusone</title>
                <path
                  d="M40,20H0M20,0V40"
                  fill="none"
                  stroke="#fff"
                  stroke-miterlimit="10"
                  stroke-width="3"
                />
              </svg>
            </Link>
          </Cards>
        </div>
      </div>
      {/* <ul>
        {props.category.map(categoryList => (
          <CategoryList
            key={categoryList.id}
            id={categoryList.id}
            name={categoryList.name}
          />
        ))}
      </ul> */}
    </div>
  );
};
export default MovieList;
