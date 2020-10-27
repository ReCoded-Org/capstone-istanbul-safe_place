import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import img1 from "../../images/violence-test-image1.png";
import img2 from "../../images/violence-test-image2.png";
import img3 from "../../images/violence-test-image3.png";
import "./index.scss";

const ViolenceTest = () => {
  return (
    <div className="violence-intro">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={6} md={12}>
            <img src={img1} alt="A woman trapped by fear" className="img1" />
          </Col>
          <Col lg={6} md={12}>
            <Row>
              <Col>
                <img src={img2} alt="A man not allowing woman to speak" />
              </Col>
              <Col>
                <img src={img3} alt="A women saying stop to violence" />
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
                <div className="violence-test">
                  <h5>
                    Are you in an abusive relationship?
                    <span>Take our test</span>
                  </h5>
                  <Button> Find out now</Button>
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
