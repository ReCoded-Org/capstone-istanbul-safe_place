import React from "react";
import { Container, Row } from "react-bootstrap";
import UserDetail from "../../components/UserDetail";
import UserEmail from "../../components/UserEmail";
import UserPassword from "../../components/UserPassword";
import defaultProfileImage from "../../images/default-profile-image.png";
import "./index.scss";

export default function ProfilePage() {
  const [elementSelected, setElementSelected] = React.useState("userDetail");

  return (
    <Container fluid="md" className="profileContainer">
      <Row className="profilePortrait">
        <h2>Profile</h2>
        <div className="userPortrait">
          <img src={defaultProfileImage} alt="User portrait" />
        </div>
      </Row>
      <Row className="section userDetail">
        <button
          className="sectionTitle"
          onClick={() => setElementSelected("userDetail")}
          type="button"
        >
          <i
            className={
              elementSelected === "userDetail" ? "arrow down" : "arrow right"
            }
          />
          User Details
        </button>
        <div
          className={`
            sectionContent 
            ${elementSelected !== "userDetail" && `collapsed`}
          `}
        >
          <UserDetail />
        </div>
      </Row>
      <Row className="section userEmail">
        <button
          className="sectionTitle"
          type="button"
          onClick={() => setElementSelected("userEmail")}
        >
          <i
            className={
              elementSelected === "userEmail" ? "arrow down" : "arrow right"
            }
          />
          Email Address
        </button>
        <div
          className={`
            sectionContent 
            ${elementSelected !== "userEmail" && `collapsed`}
          `}
        >
          <UserEmail />
        </div>
      </Row>
      <Row className="section userPassword">
        <button
          className="sectionTitle"
          type="button"
          onClick={() => setElementSelected("userPassword")}
        >
          <i
            className={
              elementSelected === "userPassword" ? "arrow down" : "arrow right"
            }
          />
          Change Password
        </button>
        <div
          className={`
            sectionContent 
            ${elementSelected !== "userPassword" && `collapsed`}
          `}
        >
          <UserPassword />
        </div>
      </Row>
      <Row className="submitBtn">
        <button type="button">Save Changes</button>
      </Row>
    </Container>
  );
}
