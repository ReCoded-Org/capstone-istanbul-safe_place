import React from "react";
import { Container, Row, Accordion } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import UserDetailForm from "../../components/profile/UserDetailForm";
import UserEmailForm from "../../components/profile/UserEmailForm";
import UserPasswordForm from "../../components/profile/UserPasswordForm";
import { AuthContext } from "../../auth/Authentication";
import defaultProfileImage from "../../images/defaultProfileImage.png";
import ProfileSection from "./ProfileSection";
import { validationSchemaObject } from "../../utils/formHelpers";
import LoadingSpinner from "../../components/LoadingSpinner";
import firebase from "../../firebaseConfig";
import "./index.scss";

const profileFormSchema = Joi.object({
  address: validationSchemaObject.anyOptional,
  birthdate: validationSchemaObject.anyOptional,
  city: validationSchemaObject.anyOptional,
  countryCode: validationSchemaObject.anyOptional,
  firstName: validationSchemaObject.anyOptional,
  lastName: validationSchemaObject.anyOptional,
  nationality: validationSchemaObject.anyOptional,
  phoneNumber: validationSchemaObject.anyOptional,
  sex: validationSchemaObject.anyOptional,
  state: validationSchemaObject.anyOptional,
  zipCode: validationSchemaObject.anyOptional,
  email: validationSchemaObject.email,
});

// split the full name into first and last name
const splitFullName = (fullName = "") => {
  const fullNameArr = fullName.split(" ");
  const lastName = fullNameArr.pop();
  const firstName = fullNameArr.join(" ");

  return [firstName, lastName];
};

const UPDATED_SUCCESSFUL = "Profile updated successfully!";

export default function ProfilePage() {
  const [updateStatus, setUpdateStatus] = React.useState(null);
  const [isdataReady, setIsdataReady] = React.useState(false);
  const currentUser = React.useContext(AuthContext);

  const { register, handleSubmit, errors, setValue } = useForm({
    mode: "onTouched",
    defaultValues: {
      firstName: splitFullName(currentUser?.displayName)[0],
      lastName: splitFullName(currentUser?.displayName)[1],
      phoneNumber: currentUser?.phoneNumber,
      email: currentUser?.email,
    },
    resolver: joiResolver(profileFormSchema),
  });

  React.useEffect(() => {
    // fetch user data and display it
    firebase
      .firestore()
      .collection("users")
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          // update user data
          Object.entries(doc.data()).map(([key, value]) =>
            setValue(key, value)
          );
          setIsdataReady(true);
        }
      })
      .catch((error) => {
        alert("Error getting document:", error);
      });
  }, [currentUser]);

  const writeUserData = async (userId, data) => {
    firebase.firestore().collection("users").doc(userId).set({
      address: data.address,
      birthdate: data.birthdate,
      city: data.city,
      countryCode: data.countryCode,
      firstName: data.firstName,
      lastName: data.lastName,
      nationality: data.nationality,
      phoneNumber: data.phoneNumber,
      sex: data.sex,
      state: data.state,
      zipCode: data.zipCode,
    });
  };

  // sectoins to be rendered
  const sections = [
    {
      label: "User details",
      children: (
        <UserDetailForm
          register={register}
          errors={errors}
          currentUser={currentUser}
        />
      ),
    },
    {
      label: "Email address",
      children: (
        <UserEmailForm
          register={register}
          errors={errors}
          currentUser={currentUser}
        />
      ),
    },
    {
      label: "Change password",
      children: (
        <UserPasswordForm
          register={register}
          errors={errors}
          currentUser={currentUser}
        />
      ),
    },
  ];

  const onSave = async (data) => {
    try {
      // update default user info
      await currentUser.updateProfile({
        displayName: `${data.firstName} ${data.lastName}`,
        phoneNumber: data.phoneNumber,
      });

      await writeUserData(currentUser.uid, data);

      // check if email changed and update it
      if (data.email !== currentUser.email) {
        await currentUser.updateEmail(data.email);
      }

      setUpdateStatus(UPDATED_SUCCESSFUL);
    } catch (error) {
      setUpdateStatus(error.message);
    }
  };

  return (
    <Container fluid="md" className="profileContainer">
      <form onSubmit={handleSubmit(onSave)}>
        {!isdataReady && <LoadingSpinner />}
        <Accordion defaultActiveKey="0">
          <Row className="profilePortrait">
            <h2>Profile</h2>
            <div className="userPortrait">
              <img
                src={currentUser?.photoURL || defaultProfileImage}
                alt="User portrait"
              />
            </div>
          </Row>
          {sections.map((section, index) => (
            <ProfileSection
              key={section.label}
              eventKey={index.toString()}
              label={section.label}
            >
              {section.children}
            </ProfileSection>
          ))}

          <Row className="submitBtn">
            <button type="submit">Save changes</button>
          </Row>
          <Row className="updateStatus">
            <p>{updateStatus}</p>
          </Row>
        </Accordion>
      </form>
    </Container>
  );
}
