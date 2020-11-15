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
import ViolenceTestPage from "./containers/ViolenceTestPage";
import AboutUsPage from "./containers/AboutUsPage";
import ChatBotSettings from "./components/ChatBotSettings";

const App = () => (
  <Router>
    <div>
      <HelpNavbar />
      <MainNavbar />
      <ChatBotSettings />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/seekhelp">
          <SearchForHelpPage />
        </Route>
        <Route exact path="/test">
          <ViolenceTestPage />
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
