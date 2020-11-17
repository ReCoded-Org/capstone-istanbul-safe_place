import React from "react";
import {
  Container,
  Row,
  Accordion,
  useAccordionToggle,
  AccordionContext,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import UserDetailForm from "../../components/profile/UserDetailForm";
import UserEmailForm from "../../components/profile/UserEmailForm";
import UserPasswordForm from "../../components/profile/UserPasswordForm";
import defaultProfileImage from "../../images/defaultProfileImage.png";
import "./index.scss";

function getArrowClass(isCurrentElementSelected) {
  return isCurrentElementSelected ? "arrow down" : "arrow right";
}

export default function ProfilePage({ submit }) {
  const { register, handleSubmit, errors } = useForm();

  const onSave = (data) => {
    // TODO: save data in the database
    submit(data);
  };

  function ToggleButton({ children, eventKey, callback }) {
    const currentEventKey = React.useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
      <button type="button" onClick={decoratedOnClick} className="sectionTitle">
        <i className={getArrowClass(isCurrentEventKey)} />
        {children}
      </button>
    );
  }

  return (
    <Container fluid="md" className="profileContainer">
      <form onSubmit={handleSubmit(onSave)}>
        <Accordion defaultActiveKey="0">
          <Row className="profilePortrait">
            <h2>Profile</h2>
            <div className="userPortrait">
              <img src={defaultProfileImage} alt="User portrait" />
            </div>
          </Row>
          <Row className="UserDetailSection section">
            <ToggleButton eventKey="0">User details</ToggleButton>
            <div className="sectionContent">
              <Accordion.Collapse eventKey="0">
                <UserDetailForm register={register} validErrors={errors} />
              </Accordion.Collapse>
            </div>
          </Row>
          <Row className="UserEmailSection section">
            <ToggleButton eventKey="1">Email address</ToggleButton>
            <div className="sectionContent">
              <Accordion.Collapse eventKey="1">
                <UserEmailForm register={register} validErrors={errors} />
              </Accordion.Collapse>
            </div>
          </Row>
          <Row className="UserPasswordSection section">
            <ToggleButton eventKey="2">Change password</ToggleButton>
            <div className="sectionContent">
              <Accordion.Collapse eventKey="2">
                <UserPasswordForm register={register} validErrors={errors} />
              </Accordion.Collapse>
            </div>
          </Row>
          <Row className="submitBtn">
            <button type="submit">Save changes</button>
          </Row>
        </Accordion>
      </form>
    </Container>
  );
}
