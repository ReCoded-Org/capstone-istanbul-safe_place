import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignUpForm from "../SignUpForm";
import womenSupportEachOther from "../../images/womenSupportEachOther.png";
import googleIcon from "../../images/icons/googleIcon.svg";
import twitterIcon from "../../images/icons/twitterIcon.svg";
import facebookIcon from "../../images/icons/facebookIcon.svg";
import "./index.scss";

export default function SignUp() {
  return (
    <Container fluid="md" className="signUpSection">
      <Row>
        <Col className="signInImg" md={6} xs={12}>
          <img src={womenSupportEachOther} alt="Women Group Hugging Together" />
        </Col>
        <Col className="signInForm" md={6} xs={12}>
          <h2>Welcome to Safe Place!</h2>
          <h4>Sign up with</h4>
          <ul className="signInIcons">
            <li className="signInIcon">
              <a href="#/">
                <img src={twitterIcon} alt="Twitter icon" />
              </a>
            </li>
            <li className="signInIcon">
              <a href="#/">
                <img src={facebookIcon} alt="Facebook icon" />
              </a>
            </li>
            <li className="signInIcon">
              <a href="#/">
                <img src={googleIcon} alt="Google icon" />
              </a>
            </li>
          </ul>
          <hr className="divider" />

          <SignUpForm
            submit={() => {
              /* TODO: implement the signing in functionality */
            }}
          />

          <p>
            Alredy have an account?
            <a href="/signin"> Sign in</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
