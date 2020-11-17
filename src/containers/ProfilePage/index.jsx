import React from "react";
import { Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import UserDetailForm from "../../components/profile/UserDetailForm";
import UserEmailForm from "../../components/profile/UserEmailForm";
import UserPasswordForm from "../../components/profile/UserPasswordForm";
import defaultProfileImage from "../../images/defaultProfileImage.png";
import "./index.scss";

function getArrowClass(selectedElement, currentElement) {
  return selectedElement === currentElement ? "arrow down" : "arrow right";
}

function checkCollapseClass(selectedElement, currentElement) {
  if (selectedElement === currentElement) {
    return "";
  }

  return "collapsed";
}

export default function ProfilePage({ submit }) {
  // track the active and inactive sections to show/hide them
  const [selectedElement, setSelectedElement] = React.useState("UserDetailForm");
  const { register, handleSubmit, errors } = useForm();

  const onSave = (data) => {
    // TODO: save data in the database
    submit(data);
  };

  return (
    <Container fluid="md" className="profileContainer">
      <form onSubmit={handleSubmit(onSave)}>
        <Row className="profilePortrait">
          <h2>Profile</h2>
          <div className="userPortrait">
            <img src={defaultProfileImage} alt="User portrait" />
          </div>
        </Row>
        <Row className="UserDetailForm">
          <button
            className="sectionTitle"
            onClick={() => setSelectedElement("UserDetailForm")}
            type="button"
          >
            <i className={getArrowClass(selectedElement, "UserDetailForm")} />
            User details
          </button>
          <div
            className={`
            sectionContent 
            ${checkCollapseClass(selectedElement, "UserDetailForm")}
          `}
          >
            <UserDetailForm register={register} validErrors={errors} />
          </div>
        </Row>
        <Row className="UserEmailForm">
          <button
            className="sectionTitle"
            type="button"
            onClick={() => setSelectedElement("UserEmailForm")}
          >
            <i className={getArrowClass(selectedElement, "UserEmailForm")} />
            Email address
          </button>
          <div
            className={`
            sectionContent 
            ${checkCollapseClass(selectedElement, "UserEmailForm")}
          `}
          >
            <UserEmailForm register={register} validErrors={errors} />
          </div>
        </Row>
        <Row className="UserPasswordForm">
          <button
            className="sectionTitle"
            type="button"
            onClick={() => setSelectedElement("UserPasswordForm")}
          >
            <i className={getArrowClass(selectedElement, "UserPasswordForm")} />
            Change password
          </button>
          <div
            className={`
            sectionContent 
            ${checkCollapseClass(selectedElement, "UserPasswordForm")}
          `}
          >
            <UserPasswordForm register={register} validErrors={errors} />
          </div>
        </Row>
        <Row className="submitBtn">
          <button type="submit">Save changes</button>
        </Row>
      </form>
    </Container>
  );
}
