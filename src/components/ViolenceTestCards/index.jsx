import React, {useState} from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";

const ViolenceTestCards = () => {

  const { t } = useTranslation();
  const [translationKey, setTranslationKey] = useState("TestSpec");
  const cardsArr = [...t(`violenceTestPage.${translationKey}`, { returnObjects: true })];
  
  // const TEST_SPEC = [
  //   {
  //     category: "Physical Abuse",
  //     subtitle: "Has your partner:",
  //     checkboxItems: ["Pushed or shoved you"],
  //   },
  //   {
  //     category: "Physical Abuse",
  //     subtitle: "Has your partner:",
  //     checkboxItems: ["Pushed or shoved you"],
  //   },
  //   {
  //     category: "Physical Abuse",
  //     subtitle: "Has your partner:",
  //     checkboxItems: ["Pushed or shoved you"],
  //   },
  // ]; 
  
  const cards = cardsArr.map((test) => (
    <Col className="card">
      <h3>{test.category}</h3>
      <h5>{test.subtitle}</h5>
      <form className="test">
        {test.checkboxItems.map((item) => (
          <div>
            <input type="checkbox" />
            {item}
          </div>
        ))}
      </form>
    </Col>
  ));

  return (
    <Row className="justify-content-md-center">
      {/* <Col className="card">  */}
      {cards}
      {/* </Col> */}
      {/* <Col className="card">
        <h3>Physical Abuse</h3>
        <h5>Has your partner:</h5>
        <form className="test">
          <div>
            <input type="checkbox" />
            Pushed or shoved you?
          </div>
          <div>
            <input type="checkbox" />
            Held you to keep you from leaving?
          </div>
          <div>
            <input type="checkbox" />
            Slapped or bit you?
          </div>
          <div>
            <input type="checkbox" />
            Kicked or choked you?
          </div>
          <div>
            <input type="checkbox" />
            Hit or punched you?
          </div>
          <div>
            <input type="checkbox" />
            Thrown objects at you?
          </div>
        </form>
      </Col> */}
      {/* <Col className="card">
        <h3>Sexual Abuse</h3>
        <h5>Has your partner:</h5>
        <form className="test">
          <div>
            <input type="checkbox" />
            Been jealously angry, assuming you would have sex with others?
          </div>
          <div>
            <input type="checkbox" />
            Insisted you dress in a more sexual/less sexual way than you wanted?
          </div>
          <div>
            <input type="checkbox" />
            Criticized you sexually?
          </div>
          <div>
            <input type="checkbox" />
            Insisted on unwanted or uncomfortable touching?
          </div>
          <div>
            <input type="checkbox" />
            Withheld sex and/or affection?
          </div>
          <div>
            <input type="checkbox" />
            Called you sexual names? (e.g. “whore” or “frigid”)
          </div>
          <div>
            <input type="checkbox" />
            Demanding monogamy from you, while insisting on freedom for self?
          </div>
          <div>
            <input type="checkbox" />
            Forced sex with them or others or forced you to watch others?
          </div>
          <div>
            <input type="checkbox" />
            Forced sex after beating?
          </div>
        </form>
      </Col>
      <Col className="card">
        <h3>Emotional Abuse</h3>
        <h5>Has your partner:</h5>
        <form className="test">
          <div>
            <input type="checkbox" />
            Ignored your feelings?
          </div>
          <div>
            <input type="checkbox" />
            Ridiculed or insulted your most valued beliefs? (i.e. religion,
            heritage, or class)
          </div>
          <div>
            <input type="checkbox" />
            Withheld approval, appreciation or affection as punishment?
          </div>
          <div>
            <input type="checkbox" />
            Continually criticized you, called you names, shouted?
          </div>
          <div>
            <input type="checkbox" />
            Insulted or drove away your friends or family?
          </div>
          <div>
            <input type="checkbox" />
            Humiliated you in private or public?
          </div>
        </form>
      </Col> */}
    </Row>
  );
};

export default ViolenceTestCards;
