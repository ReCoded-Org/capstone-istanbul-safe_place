import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

const ViolenceTestTry = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          {" "}
          <h1>Self Test</h1>{" "}
        </Row>
        <Row>
          <p>This test is developed Domestic </p>
        </Row>
        <Row>
          <a href="https://dvs-snoco.org/what-is-domestic-violence-self-test/">
            Violence Services Snohomish County
          </a>
        </Row>
        <Row>
          <Col>
            <h3>Physical Abuse</h3>
            <p>Has your partner:</p>
            <form>
              <label>
                <input name="isGoing" type="checkbox" />
                Pushed or shoved you?
              </label><br />
              <label>
                <input name="isGoing" type="checkbox" />
                Held you to keep you from leaving?
              </label>
              <label>
                <input name="isGoing" type="checkbox" />
                Slapped or bit you?
              </label>
              <label>
                <input name="isGoing" type="checkbox" />
                Kicked or choked you?
              </label>
              <label>
                <input name="isGoing" type="checkbox" />
                Hit or punched you?
              </label>
              <label>
                <input name="isGoing" type="checkbox" />
                Thrown objects at you?
              </label>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ViolenceTestTry;
