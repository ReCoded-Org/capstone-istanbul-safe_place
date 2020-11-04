import React from "react";
import { Col, Row } from "react-bootstrap";
import "./index.scss";

const ViolenceTestCards = () => {
  return (
    <Row className="justify-content-md-center">
      <Col className="card">
        <h3>Physical Abuse</h3>
        <h5>Has your partner:</h5>
        <form className="test">
          <label>
            <input type="checkbox" />
            Pushed or shoved you?
          </label>
          <label>
            <input type="checkbox" />
            Held you to keep you from leaving?
          </label>
          <label>
            <input type="checkbox" />
            Slapped or bit you?
          </label>
          <label>
            <input type="checkbox" />
            Kicked or choked you?
          </label>
          <label>
            <input type="checkbox" />
            Hit or punched you?
          </label>
          <label>
            <input type="checkbox" />
            Thrown objects at you?
          </label>
        </form>
      </Col>
      <Col className="card">
        <h3>Sexual Abuse</h3>
        <h5>Has your partner:</h5>
        <form className="test">
          <label>
            <input type="checkbox" />
            Been jealously angry, assuming you would have sex with others?
          </label>
          <label>
            <input type="checkbox" />
            Insisted you dress in a more sexual/less sexual way than you wanted?
          </label>
          <label>
            <input type="checkbox" />
            Criticized you sexually?
          </label>
          <label>
            <input type="checkbox" />
            Insisted on unwanted or uncomfortable touching?
          </label>
          <label>
            <input type="checkbox" />
            Withheld sex and/or affection?
          </label>
          <label>
            <input type="checkbox" />
            Called you sexual names? (e.g. “whore” or “frigid”)
          </label>
          <label>
            <input type="checkbox" />
            Demanding monogamy from you, while insisting on freedom for self?
          </label>
          <label>
            <input type="checkbox" />
            Forced sex with them or others or forced you to watch others?
          </label>
          <label>
            <input type="checkbox" />
            Forced sex after beating?
          </label>
        </form>
      </Col>
      <Col className="card">
        <h3>Emotional Abuse</h3>
        <h5>Has your partner:</h5>
        <form className="test">
          <label>
            <input type="checkbox" />
            Ignored your feelings?
          </label>
          <label>
            <input type="checkbox" />
            Ridiculed or insulted your most valued beliefs? (i.e. religion,
            heritage, or class)
          </label>
          <label>
            <input type="checkbox" />
            Withheld approval, appreciation or affection as punishment?
          </label>
          <label>
            <input type="checkbox" />
            Continually criticized you, called you names, shouted?
          </label>
          <label>
            <input type="checkbox" />
            Insulted or drove away your friends or family?
          </label>
          <label>
            <input type="checkbox" />
            Humiliated you in private or public?
          </label>
        </form>
      </Col>
    </Row>
  );
};

export default ViolenceTestCards;
