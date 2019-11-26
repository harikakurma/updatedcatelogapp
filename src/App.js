import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <Route>
        <NavBar />
        <main>
          <Switch>
            <Route>
              <MainPage />
            </Route>

            <Route path="/" exact>
              <MovieList />
            </Route>
            <Route path="/MovieDetails" exact>
              <MovieDetails />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Route>
    </Router>
  );
};

export default App;
