import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import trappedWomen from "../../images/trappedWomen.png";
import dontSpeak from "../../images/dontSpeak.png";
import womenStopViolence from "../../images/womenStopViolence.png";
import "./index.scss";

const ViolenceTest = () => {
  return (
    <div className="violenceIntro">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={6} md={12}>
            <img src={trappedWomen} alt="A woman trapped by fear" />
          </Col>
          <Col lg={6} md={12}>
            <Row>
              <Col>
                <img src={dontSpeak} alt="A man not allowing woman to speak" />
              </Col>
              <Col>
                <img
                  src={womenStopViolence}
                  alt="A women saying stop to violence"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>What is violence against women?</h3>
                <p>
                  According to the first article of the Declaration on the
                  Prevention of Violence Against Women, adopted by the United
                  Nations General Assembly in 1993; It is the threat or coercion
                  of any kind of gender-based violence or act that results in or
                  is likely to result in physical, sexual and emotional harm to
                  women in the public and private spheres, and arbitrarily
                  restricting freedom.
                </p>
                <div className="violenceTest">
                  <h5>
                    Are you in an abusive relationship?
                    <span>Take our test</span>
                  </h5>
                  <Link to="/test">
                    <Button> Find out now</Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ViolenceTest;
