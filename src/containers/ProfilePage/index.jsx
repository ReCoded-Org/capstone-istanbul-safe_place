import React from "react";
import { Container, Row, Accordion } from "react-bootstrap";
import { useForm } from "react-hook-form";
import UserDetailForm from "../../components/profile/UserDetailForm";
import UserEmailForm from "../../components/profile/UserEmailForm";
import UserPasswordForm from "../../components/profile/UserPasswordForm";
import defaultProfileImage from "../../images/defaultProfileImage.png";
import ProfileSection from "./ProfileSection";
import "./index.scss";

export default function ProfilePage({ submit }) {
  const { register, handleSubmit, errors } = useForm();

  const sections = [
    {
      label: "User details",
      children: <UserDetailForm register={register} errors={errors} />,
    },
    {
      label: "Email address",
      children: <UserEmailForm register={register} errors={errors} />,
    },
    {
      label: "Change password",
      children: <UserPasswordForm register={register} errors={errors} />,
    },
  ];

  const onSave = (data) => {
    // TODO: save data in the database
    submit(data);
  };

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
        </Accordion>
      </form>
    </Container>
  );
}
