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
import ChatBotMessages from "./components/ChatBotMessages";
import ContactUsPage from "./containers/ContactUsPage";
import { AuthProvider } from "./auth/Authentication";
import PrivateRoute from "./auth/PrivateRoute";
import BlogPage from "./containers/BlogPage";
import SingleBlog from "./components/SingleBlog";
import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <AuthProvider>
    <Router>
      <div>
        <ScrollToTop />
        <HelpNavbar />
        <MainNavbar />
        <ChatBotMessages />
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
          <PrivateRoute exact path="/profile">
            <ProfilePage />
          </PrivateRoute>
          <Route exact path="/opportunities">
            <JobsTrainingPage />
          </Route>
          <Route exact path="/about">
            <AboutUsPage />
          </Route>
          <Route exact path="/blog">
            <BlogPage />
          </Route>
          <Route exact path="/contact">
            <ContactUsPage />
          </Route>
          <Route
            exact
            path="/blog/:id"
            render={(props) => <SingleBlog {...props} />}
          ></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  </AuthProvider>
);

export default App;
