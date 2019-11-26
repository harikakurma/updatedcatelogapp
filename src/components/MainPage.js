import React from "react";
import MovieList from "./MovieList";
//import MovieDetails from "./MovieDetails";
import MovieRecord from "./MovieRecord";

const Movie = () => {
  const MOVIE = [
    {
      id: "movie1",
      name: "MadMax",
      releaseDate: "25/02/1991",
      uploadDate: "06/06/2019",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOJfGdCV9BAvfC2LvRqiNnVuJberzXAdIbTvx_geH6fN5Rq-rsQ&s",
      story: "It is Mad mad Story",
      Cast: ["hero, heroin, side"],
      director: "Hash"
    },
    {
      id: "movie1",
      name: "MadMax",
      releaseDate: "25/02/1991",
      uploadDate: "06/06/2019",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOJfGdCV9BAvfC2LvRqiNnVuJberzXAdIbTvx_geH6fN5Rq-rsQ&s",
      story: "It is Mad mad Story",
      Cast: ["hero, heroin, side"],
      director: "Hash"
    }
  ];
  // const Category = [
  //   { id: 1, name: "action" },
  //   { id: 2, name: "horror" },
  //   { id: 3, name: "thriller" },
  //   { id: 4, name: "comedy" },
  //   { id: 5, name: "romantic" }
  // ];
  return (
    <React.Fragment>
      <div>
        <MovieList movies={MOVIE} />
        <MovieRecord movies={MOVIE} />
      </div>
    </React.Fragment>
  );
};
export default Movie;
