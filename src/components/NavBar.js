import React from "react";
import MainHeading from "../components/MainHeading";
import "./NavBar.css";

const NavBar = props => {
  return (
    <MainHeading>
      <h1 classname="main-navigation__title">Best Movies</h1>
      <nav>
        <div class="dropdown">
          <button class="dropbtn">Sort BY</button>
          <div class="dropdown-content">
            <a href>UpLoad Date</a>
            <a href>Category</a>
            <a href>Release Date</a>
          </div>
        </div>
      </nav>
    </MainHeading>
  );
};
export default NavBar;
