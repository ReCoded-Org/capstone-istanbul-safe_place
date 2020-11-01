import React from "react";
import "./App.scss";
import Home from "./containers/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HelpNavbar from "./components/HelpNavbar";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <HelpNavbar />
    <Home />
    <Footer />
  </div>
);

export default App;
