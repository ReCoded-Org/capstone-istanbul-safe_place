import React from "react";
import { Container, Row } from "react-bootstrap";
import UserDetail from '../../components/UserDetail';
import UserEmail from '../../components/UserEmail';
import UserPassword from '../../components/UserPassword';

// object mapper to map API props to const props
const userInfoObj = {
  portraitURL: "",
  userDetail: {
    firstName: "",
    lastName: "",
    nationality: "",
    phoneNumber: [],
    sex: "",
    birthday: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
  },
  email: {
    primary: "",
    secondary: [],
  },
  password: {
    current: "",
    newPassword: "",
    confirmNewPassword: "",
  },
};

export default function ProfilePage() {
  const [user, setUser] = React.useState();

  const updateUserField = (updatedValues) => {
    setUser((prevUser) => {
      return { ...prevUser, ...updatedValues };
    });
  };

  React.useEffect(() => {
    setUser(userInfoObj);
  });

  return (
    <Container fluid="md" className="profileContainer">
      <Row className="profilePortrait">
        <h2>Profile</h2>
        <div>
          <img
            className="userPortrait"
            src={user?.portraitURL}
            alt="User portrait"
          />
        </div>
      </Row>
      <Row className="userDetail">
        <UserDetail
          userDetail={user?.userDetail}
          updateUserField={updateUserField}
        />
      </Row>
      <Row className="userEmail">
        <UserEmail email={user?.email} updateUserField={updateUserField} />
      </Row>
      <Row className="userPassword">
        <UserPassword
          password={user?.password}
          updateUserField={updateUserField}
        />
      </Row>
      <Row className="submitUserInfo">
        <button type="button">Save Changes</button>
      </Row>
    </Container>
  );
}
