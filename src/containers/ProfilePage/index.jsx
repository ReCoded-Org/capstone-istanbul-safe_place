import React from "react";
import { Container, Row, Accordion } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useTranslation } from "react-i18next";
import UserDetailForm from "../../components/profile/UserDetailForm";
import UserEmailForm from "../../components/profile/UserEmailForm";
import UserPasswordForm from "../../components/profile/UserPasswordForm";
import { AuthContext } from "../../auth/Authentication";
import defaultProfileImage from "../../images/defaultProfileImage.png";
import ProfileSection from "./ProfileSection";
import { validationSchemaObject } from "../../utils/formHelpers";
import "./index.scss";

const EMAIL_UPDATED = "Email updated successfully!";

export default function ProfilePage() {
  const [updateStatus, setUpdateStatus] = React.useState(null);
  const currentUser = React.useContext(AuthContext);
  const { t } = useTranslation();

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
    email: validationSchemaObject.email.messages({
      "string.empty": t("validationMessage.emptyEmail"),
      "string.email": t("validationMessage.emailNotValid"),
    }),
    newPassword: validationSchemaObject.anyOptional,
    confirmNewPassword: validationSchemaObject.anyOptional,
  });

  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched",
    defaultValues: {
      email: currentUser?.email,
    },
    resolver: joiResolver(profileFormSchema),
  });

  const sections = [
    {
      label: "profile.userDetail.label",
      children: (
        <UserDetailForm
          register={register}
          errors={errors}
          currentUser={currentUser}
        />
      ),
    },
    {
      label: "profile.userEmail.label",
      children: (
        <UserEmailForm
          register={register}
          errors={errors}
          currentUser={currentUser}
        />
      ),
    },
    {
      label: "profile.userPassword.label",
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
            <h2>{t("profile.title")}</h2>
            <Row className="justify-content-center">
              <img
                src={currentUser?.photoURL || defaultProfileImage}
                alt={t("profile.userImageAlt")}
                className="userPortrait"
              />
            </Row>
          </Row>
          {sections.map((section, index) => (
            <>
              <ProfileSection
                key={section.label}
                eventKey={index.toString()}
                label={t(`${section.label}`)}
              >
                {section.children}
              </ProfileSection>
              {index !== sections.length - 1 && <hr className="divider" />}
            </>
          ))}

          <Row className="submitBtn">
            <button type="submit">{t("profile.saveChanges")}</button>
          </Row>
          <Row className="updateStatus">
            <p>{updateStatus}</p>
          </Row>
        </Accordion>
      </form>
    </Container>
  );
}
