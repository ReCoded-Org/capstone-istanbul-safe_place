import React from "react";
import "./App.scss";
import Home from "./containers/Home";
import SearchForHelp from "./containers/SearchForHelp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HelpNavbar from "./components/HelpNavbar";

const App = () => (
  <div>
    <HelpNavbar />
    <Home />
    <SearchForHelp />
  </div>
);

export default App;
