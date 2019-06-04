import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Tutorial Platform</h1>
    <p>This site uses technologies such as React and Redux</p>
    <Link to="about" className="btn btn-primary">
      Learn More
    </Link>
  </div>
);

export default HomePage;
