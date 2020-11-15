import React from "react";
import { Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import UserDetail from "../../components/UserDetail";
import UserEmail from "../../components/UserEmail";
import UserPassword from "../../components/UserPassword";
import defaultProfileImage from "../../images/defaultProfileImage.png";
import "./index.scss";

function getArrowClass(selectedElm, currentElm) {
  return selectedElm === currentElm ? "arrow down" : "arrow right";
}

function checkCollapseClass(selectedElm, currentElm) {
  if (selectedElm === currentElm) return "";

  return `collapsed`;
}

export default function ProfilePage({ submit }) {
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
        <Row className="section userDetail">
          <button
            className="sectionTitle"
            onClick={() => setSelectedElement("userDetail")}
            type="button"
          >
            <i className={getArrowClass(selectedElement, "userDetail")} />
            User Details
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
        <Row className="section userEmail">
          <button
            className="sectionTitle"
            type="button"
            onClick={() => setSelectedElement("userEmail")}
          >
            <i className={getArrowClass(selectedElement, "userEmail")} />
            Email Address
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
        <Row className="section userPassword">
          <button
            className="sectionTitle"
            type="button"
            onClick={() => setSelectedElement("userPassword")}
          >
            <i className={getArrowClass(selectedElement, "userPassword")} />
            Change Password
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
          <button type="submit">Save Changes</button>
        </Row>
      </form>
    </Container>
  );
}
