import React from "react";
import { Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import UserDetail from "../../components/profile/UserDetail";
import UserEmail from "../../components/profile/UserEmail";
import UserPassword from "../../components/profile/UserPassword";
import defaultProfileImage from "../../images/defaultProfileImage.png";
import "./index.scss";

function getArrowClass(selectedElement, currentElement) {
  return selectedElement === currentElement ? "arrow down" : "arrow right";
}

function checkCollapseClass(selectedElement, currentElement) {
  if (selectedElement === currentElement) return "";

  return "collapsed";
}

export default function ProfilePage({ submit }) {
  // track the active and inactive sections to show/hide them
  const [selectedElement, setSelectedElement] = React.useState("userDetail");
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
        <Row className="userDetail">
          <button
            className="sectionTitle"
            onClick={() => setSelectedElement("userDetail")}
            type="button"
          >
            <i className={getArrowClass(selectedElement, "userDetail")} />
            User details
          </button>
          <div
            className={`
            sectionContent 
            ${checkCollapseClass(selectedElement, "userDetail")}
          `}
          >
            <UserDetail register={register} validErrors={errors} />
          </div>
        </Row>
        <Row className="userEmail">
          <button
            className="sectionTitle"
            type="button"
            onClick={() => setSelectedElement("userEmail")}
          >
            <i className={getArrowClass(selectedElement, "userEmail")} />
            Email address
          </button>
          <div
            className={`
            sectionContent 
            ${checkCollapseClass(selectedElement, "userEmail")}
          `}
          >
            <UserEmail register={register} validErrors={errors} />
          </div>
        </Row>
        <Row className="userPassword">
          <button
            className="sectionTitle"
            type="button"
            onClick={() => setSelectedElement("userPassword")}
          >
            <i className={getArrowClass(selectedElement, "userPassword")} />
            Change password
          </button>
          <div
            className={`
            sectionContent 
            ${checkCollapseClass(selectedElement, "userPassword")}
          `}
          >
            <UserPassword register={register} validErrors={errors} />
          </div>
        </Row>
        <Row className="submitBtn">
          <button type="submit">Save changes</button>
        </Row>
      </form>
    </Container>
  );
}