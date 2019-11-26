import React from "react";
import "./MainHeading.css";
const MainHeading = props => {
  return <header className="main-header">{props.children}</header>;
};
export default MainHeading;
