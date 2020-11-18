import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import SignUpForm from "../SignUpForm";
import womenSupportEachOther from "../../images/womenSupportEachOther.png";
import googleIcon from "../../images/icons/googleIcon.svg";
import twitterIcon from "../../images/icons/twitterIcon.svg";
import facebookIcon from "../../images/icons/facebookIcon.svg";
import firebase from "../../firebaseConfig";
import { AuthContext } from "../../auth/Authentication";
import "./index.scss";

export default function SignUp() {
  const history = useHistory();

  const signUpSucceed = () => {
    history.push("/");
  };

  const signUpFailed = (error) => {
    alert(error);
  };
  const handleSignUp = React.useCallback(
    async (data) => {
      const { email, password } = data;

      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        signUpSucceed();
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          return "auth/email-already-in-use";
        }
        signUpFailed(error);
      }
      return "succeed";
    },
    [history]
  );

  const handleSignUpWithProvider = (providerName) => {
    let provider;
    switch (providerName) {
      case "google":
        provider = new firebase.auth.GoogleAuthProvider();
        break;
      case "facebook":
        provider = new firebase.auth.FacebookAuthProvider();
        break;
      default:
    }

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        signUpSucceed(result);
      })
      .catch(function (error) {
        // Handle Errors here.
        signUpFailed(error);
      });
  };

  return (
    <Container fluid="md" className="signUpSection">
      <Row>
        <Col className="signUpImg" md={6} xs={12}>
          <img src={womenSupportEachOther} alt="Two women support each other" />
        </Col>
        <Col className="signUpForm" md={6} xs={12}>
          <h2>Welcome to Safe Place!</h2>
          <h4>Sign up with</h4>
          <ul className="signUpIcons">
            <li className="signUpIcon">
              <a href="#/">
                <img src={twitterIcon} alt="Twitter icon" />
              </a>
            </li>
            <li className="signUpIcon">
              <a href="#/" onClick={() => handleSignUpWithProvider("facebook")}>
                <img src={facebookIcon} alt="Facebook icon" />
              </a>
            </li>
            <li className="signUpIcon">
              <a href="#/" onClick={() => handleSignUpWithProvider("google")}>
                <img src={googleIcon} alt="Google icon" />
              </a>
            </li>
          </ul>
          <hr className="divider" />

          <SignUpForm submit={handleSignUp} />

          <p>
            Already have an account?&nbsp;
            <a href="/signin">Sign in</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
