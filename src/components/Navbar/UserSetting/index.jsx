import React from "react";
import { Dropdown } from "react-bootstrap";
import defaultProfileImage from "../../../images/defaultProfileImage.png";
import firebase from "../../../firebaseConfig";
import "./index.scss";

export default function UserSetting({ currentUser }) {
  const handleSignOut = () => {
    firebase.auth().signOut();
  };

  return (
    <div className="userSetting">
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          split="true"
          as="a"
        >
          <img
            src={currentUser.photoURL || defaultProfileImage}
            alt="User icon"
          />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/profile">Your profile</Dropdown.Item>
          <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
