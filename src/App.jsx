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
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import ProfilePage from "./containers/ProfilePage";
import ViolenceTestPage from "./containers/ViolenceTestPage";
import JobsTrainingPage from "./containers/JobsTrainingPage";
import AboutUsPage from "./containers/AboutUsPage";

const App = () => (
  <Router>
    <div>
      <HelpNavbar />
      <MainNavbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/seekhelp">
          <SearchForHelpPage />
        </Route>
        <Route exact path="/test">
          <ViolenceTestPage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route exact path="/jobs">
          <JobsTrainingPage />
        </Route>
        <Route exact path="/about">
          <AboutUsPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
