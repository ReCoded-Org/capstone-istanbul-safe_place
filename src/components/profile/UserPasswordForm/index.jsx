import React from "react";
import { Col } from "react-bootstrap";
import Input from "../../form/SafePlaceInput";
import "./index.scss";

export default function UserPasswordForm({register, errors }) {
  return (
    <Col xs={12} className="userPasswordSection">
      <Input
        type="password"
        label="New password"
        placeholder="Enter new password"
        name="newPassword"
        ref={register()}
        errors={errors}
      />

      <Input
        type="password"
        label="Confirm password"
        placeholder="Confirm new password"
        name="confirmPassword"
        ref={register()}
        errors={errors}
      />
    </Col>
  );
}
