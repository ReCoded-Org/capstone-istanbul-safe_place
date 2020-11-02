import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import SearchForHelpPage from "./containers/SearchForHelpPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HelpNavbar from "./components/HelpNavbar";
import MainNavbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => (
<<<<<<< HEAD
  <div>
    <HelpNavbar />
    <MainNavbar />
    <Home />
    <SearchForHelpPage />
    <Footer />
  </div>
=======
  <Router>
    <div>
      <HelpNavbar />
      <MainNavbar />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  </Router>
>>>>>>> dev
);

export default App;
