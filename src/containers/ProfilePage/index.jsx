import React from "react";
import {
  Container,
  Row,
  Accordion,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import UserDetailForm from "../../components/profile/UserDetailForm";
import UserEmailForm from "../../components/profile/UserEmailForm";
import UserPasswordForm from "../../components/profile/UserPasswordForm";
import defaultProfileImage from "../../images/defaultProfileImage.png";
import ToggleButton from './ToggleButton'
import "./index.scss";

const SECTIONS = [
  {
    label: "User details",
    componentName: UserDetailForm,
  },
  {
    label: "Email address",
    componentName: UserEmailForm,
  },
  {
    label: "Change password",
    componentName: UserPasswordForm,
  },
];

export default function ProfilePage({ submit }) {
  const { register, handleSubmit, errors } = useForm();

  const onSave = (data) => {
    // TODO: save data in the database
    submit(data);
  };

  const Section = ({ eventKey, label, Component }) => (
    <Row className="section">
      <ToggleButton eventKey={eventKey}>{label}</ToggleButton>
      <div className="sectionContent">
        <Accordion.Collapse eventKey={eventKey}>
          <Component register={register} validErrors={errors} />
        </Accordion.Collapse>
      </div>
    </Row>
  );

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
          {SECTIONS.map((section, index) => (
            <Section
              key={section.label}
              eventKey={index.toString()}
              label={section.label}
              Component={section.componentName}
            />
          ))}

          <Row className="submitBtn">
            <button type="submit">Save changes</button>
          </Row>
        </Accordion>
      </form>
    </Container>
  );
}
