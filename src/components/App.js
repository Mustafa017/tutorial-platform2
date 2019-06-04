import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import Header from "./common/Header";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </div>
  );
}

export default App;
