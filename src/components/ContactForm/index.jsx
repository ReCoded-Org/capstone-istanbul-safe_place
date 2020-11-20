import React from "react";
import { Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import InputErrorMessage from "../InputErrorMessage";
import firebase from "../../firebaseConfig";
import { getErrorClass } from "../../utils/formHelpers";
import "./index.scss";

export default function ContactForm({ handleShow }) {
  const { register, handleSubmit, errors, reset } = useForm();
  const { t } = useTranslation();

  const onSubmit = (data) => {
    handleShow();
    const newMessage = firebase
      .firestore()
      .collection("contactUsMessages")
      .doc();
    newMessage.set({
      name: data.fullName,
      email: data.email,
      message: data.messageContent,
    });
    reset();
  };

  return (
    <Col md={6} xs={12} className="contactForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formInput">
          <label htmlFor="fullName">
            {t("contactUs.contactUsForm.name.label")}
            <input
              className={getErrorClass(errors.fullName) || ""}
              type="text"
              placeholder={t("contactUs.contactUsForm.name.placeholder")}
              name="fullName"
              id="fullName"
              aria-label="Full Name"
              ref={register()}
            />
          </label>
        </div>

        <div className="formInput">
          <label htmlFor="email">
            {t("contactUs.contactUsForm.email.label")}
            <input
              className={getErrorClass(errors.email) || ""}
              type="email"
              placeholder={t("contactUs.contactUsForm.email.placeholder")}
              name="email"
              id="email"
              aria-label="Email address"
              ref={register({
                required: {
                  value: true,
                  message: t("contactUs.contactUsForm.email.error.required"),
                },
                // TODO: intall joi and use it for email validation
              })}
            />
            <InputErrorMessage error={errors.email} />
          </label>
        </div>

        <div className="formInput">
          <label htmlFor="messageContent">
            {t("contactUs.contactUsForm.message.label")}
            <textarea
              className={getErrorClass(errors.message) || ""}
              name="messageContent"
              id="messageContent"
              placeholder={t("contactUs.contactUsForm.message.placeholder")}
              aria-label="message"
              ref={register({
                required: {
                  value: true,
                  message: t("contactUs.contactUsForm.message.error.required"),
                },
                minLength: {
                  value: 10,
                  message: t("contactUs.contactUsForm.message.error.minLength"),
                },
                maxLength: {
                  value: 2000,
                  message: t("contactUs.contactUsForm.message.error.maxLength"),
                },
              })}
            />
            <InputErrorMessage error={errors.messageContent} />
          </label>
        </div>

        <button type="submit" className="submitBtn">
          {t("contactUs.contactUsForm.submitBtn")}
        </button>
      </form>
    </Col>
  );
}
