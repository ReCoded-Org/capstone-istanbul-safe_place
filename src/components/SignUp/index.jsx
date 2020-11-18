import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import SignUpForm from "../SignUpForm";
import womenSupportEachOther from "../../images/womenSupportEachOther.png";
import googleIcon from "../../images/icons/googleIcon.svg";
import twitterIcon from "../../images/icons/twitterIcon.svg";
import facebookIcon from "../../images/icons/facebookIcon.svg";
import firebase from "../../firebaseConfig";
import "./index.scss";

export default function SignUp() {
  const history = useHistory();
  const handleSignUp = React.useCallback(async data => {
    const { email, password } = data;
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

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
              <a href="#/">
                <img src={facebookIcon} alt="Facebook icon" />
              </a>
            </li>
            <li className="signUpIcon">
              <a href="#/">
                <img src={googleIcon} alt="Google icon" />
              </a>
            </li>
          </ul>
          <hr className="divider" />

          <SignUpForm
            submit={handleSignUp}
          />

          <p>
            Already have an account?&nbsp;
            <a href="/signin">Sign in</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
