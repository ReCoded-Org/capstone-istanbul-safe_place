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

const EMAIL_UPDATED = "Email updated successfully!";

export default function ProfilePage() {
  const [updateStatus, setUpdateStatus] = React.useState(null);
  const currentUser = React.useContext(AuthContext);

  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched",
    defaultValues: {
      email: currentUser?.email,
    },
    resolver: joiResolver(profileFormSchema),
  });

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

  const onSave = (data) => {
    // check if email changed and update it
    if (data.email !== currentUser.email) {
      currentUser
        .updateEmail(data.email)
        .then(function () {
          setUpdateStatus(EMAIL_UPDATED);
        })
        .catch(function (error) {
          setUpdateStatus(error.message);
        });
    }
  };

  return (
    <Container fluid="md" className="profileContainer">
      <form onSubmit={handleSubmit(onSave)}>
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
