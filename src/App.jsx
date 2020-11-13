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
import ChatBot from "react-simple-chatbot";

const steps = [
  {
    id: "1",
    message: "Hello. Are you in an immidiate danger?",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: 1, label: "Yes", trigger: "3" },
      { value: 2, label: "No", trigger: "4" },
      { value: 3, label: "I don't know", trigger: "3" },
    ],
  },
  {
    id: "3",
    message: "Please call +902127382625",
    trigger: "2",
  },
  {
    id: "4",
    message: "Please go to ..",
    end: true,
  },
];

const App = () => (
  <Router>
    <div>
      <HelpNavbar />
      <MainNavbar />
      <ChatBot steps={steps} />
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
