import React from "react";
import { Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import InputErrorMessage from "../InputErrorMessage";
import firebase from "../../firebaseConfig";
import { getErrorClass } from "../../utils/formErrorHelpers";
import "./index.scss";

export default function ContactForm() {
  const { register, handleSubmit, errors, reset } = useForm();
  const { t } = useTranslation();

  const onSubmit = (data) => {
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
            {t("contactUs.contactUsForm.nameInputLabel")}
            <input
              className={getErrorClass(errors.fullName)}
              type="text"
              placeholder={t("contactUs.contactUsForm.nameInputPlaceholder")}
              name="fullName"
              id="fullName"
              aria-label="Full Name"
              ref={register()}
            />
          </label>
        </div>

        <div className="formInput">
          <label htmlFor="email">
            {t("contactUs.contactUsForm.emailInputLabel")}
            <input
              className={getErrorClass(errors.email)}
              type="email"
              placeholder={t("contactUs.contactUsForm.emailInputPlaceholder")}
              name="email"
              id="email"
              aria-label="Email address"
              ref={register({
                required: {
                  value: true,
                  message: t("contactUs.contactUsForm.emailInputErrorMessage"),
                },
                // TODO: intall joi and use it for email validation
              })}
            />
            <InputErrorMessage error={errors.email} />
          </label>
        </div>

        <div className="formInput">
          <label htmlFor="messageContent">
            {t("contactUs.contactUsForm.messageInputLabel")}
            <textarea
              className={getErrorClass(errors.message)}
              name="messageContent"
              id="messageContent"
              placeholder={t("contactUs.contactUsForm.messageInputPlaceholder")}
              aria-label="message"
              ref={register({
                required: {
                  value: true,
                  message: t(
                    "contactUs.contactUsForm.messageInputErrorMessage0"
                  ),
                },
                minLength: {
                  value: 10,
                  message: t(
                    "contactUs.contactUsForm.messageInputErrorMessage1"
                  ),
                },
                maxLength: {
                  value: 2000,
                  message: t(
                    "contactUs.contactUsForm.messageInputErrorMessage3"
                  ),
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
