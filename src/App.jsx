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
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <div>
      <HelpNavbar />
      <MainNavbar />
      <SearchForHelpPage />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/sign-in">
          <SignIn />
        </Route>
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
