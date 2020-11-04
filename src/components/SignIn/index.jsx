import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignInForm from "../SignInForm";
import womenGroupHuggingTogether from "../../images/womenGroupHuggingTogether.png";
import googleIcon from '../../images/icons/googleIcon.svg'
import twitterIcon from '../../images/icons/twitterIcon.svg'
import facebookIcon from '../../images/icons/facebookIcon.svg'
import "./index.scss";

export default function SignIn() {
  const [signInData, setSignInData] = React.useState({});
  // TODO: implement the siging in functinoality
  console.log(signInData);

  return (
    <section className="singInSection">
      <Container fluid="md" className="contactContainer">
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
                <a href="/">
                  <img src={twitterIcon} alt="Twitter icon" />
                </a>
              </li>
              <li className="signInIcon">
                <a href="/">
                  <img src={facebookIcon} alt="Facebook icon" />
                </a>
              </li>
              <li className="signInIcon">
                <a href="/">
                  <img src={googleIcon} alt="Google icon" />
                </a>
              </li>
            </ul>
            <hr className="divider" />

            <SignInForm submit={setSignInData} />

            <p>New here? <a href="/sign-up">Create an account</a></p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
