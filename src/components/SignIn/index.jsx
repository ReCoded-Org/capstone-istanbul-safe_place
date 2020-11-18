import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import SignInForm from "../SignInForm";
import womenGroupHuggingTogether from "../../images/womenGroupHuggingTogether.png";
import googleIcon from "../../images/icons/googleIcon.svg";
import twitterIcon from "../../images/icons/twitterIcon.svg";
import facebookIcon from "../../images/icons/facebookIcon.svg";
import { setFirebaseProvider } from "../../utils/setFirebaseProvider";
import firebase from "../../firebaseConfig";

import "./index.scss";

export default function SignIn() {
  const history = useHistory();

  const signUpFailed = (error) => {
    alert(error);
  };

  const handleSignUpWithProvider = React.useCallback(
    async (providerName) => {
      const firebaseProvider = setFirebaseProvider(providerName);

      firebase
        .auth()
        .signInWithPopup(firebaseProvider)
        .then(function (result) {
          history.push("/");
        })
        .catch(function (error) {
          // Handle errors here.
          signUpFailed(error);
        });
    },
    [history]
  );

  return (
    <Container fluid="md" className="signInSection">
      <Row>
        <Col className="signInImg" md={6} xs={12}>
          <img
            src={womenGroupHuggingTogether}
            alt="Women Group Hugging Together"
          />
        </Col>
        <Col className="signInForm" md={6} xs={12}>
          <h2>Welcome Back!</h2>
          <h4>Sign in with</h4>
          <ul className="signInIcons">
            <li className="signInIcon">
              <a href="#/" onClick={() => handleSignUpWithProvider("twitter")}>
                <img src={twitterIcon} alt="Twitter icon" />
              </a>
            </li>
            <li className="signInIcon">
              <a href="#/" onClick={() => handleSignUpWithProvider("facebook")}>
                <img src={facebookIcon} alt="Facebook icon" />
              </a>
            </li>
            <li className="signInIcon">
              <a href="#/" onClick={() => handleSignUpWithProvider("google")}>
                <img src={googleIcon} alt="Google icon" />
              </a>
            </li>
          </ul>
          <hr className="divider" />

          <SignInForm
            submit={() => {
              /* TODO: implement the signing in functionality */
            }}
          />

          <p>
            New here?
            <a href="/sign-up"> Create an account</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
