import React from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useTranslation } from "react-i18next";
import InputErrorMessage from "../InputErrorMessage";
import { getErrorClass } from "../../utils/formHelpers";
import { EMAIL_ALREADY_TAKEN_ERROR } from "../../utils/authHelpers";
import "./index.scss";

const schema = Joi.object({
  firstName: Joi.string().required().messages({
    "string.empty": `Please provide your first name`,
  }),
  lastName: Joi.string().required().messages({
    "string.empty": `Please provide your last name`,
  }),
  email: Joi.string().required().email({ tlds: {} }).messages({
    "string.empty": `Please provide your email`,
    "string.email": `Please provide a valid email`,
  }),
  password: Joi.string().required().min(8).max(64).strict().messages({
    "string.empty": `Please provide a password`,
  }),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .strict()
    .messages({
      "any.only": "Those passwords didn't match",
    }),
  acceptTerms: Joi.valid("accepted").required().messages({
    "any.only": `You must accept our terms of service and privacy policy`,
  }),
});

export default function SignUpForm({ submit }) {
  const { register, handleSubmit, errors, reset, setError } = useForm({
    resolver: joiResolver(schema),
  });
  const { t } = useTranslation();

  const onSubmit = async (data) => {
    const status = await submit(data);
    switch (status) {
      case "auth/email-already-in-use":
        setError("email", {
          type: EMAIL_ALREADY_TAKEN_ERROR,
          message:
            "Email is already taken! Please enter another one or sign in.",
        });
        break;
      case "succeed":
        reset();
        break;
      default:
        reset();
    }
  };

  return (
    <div className="signUpForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formInputGroup">
          <div className="formInput">
            <input
              className={getErrorClass(errors.firstName)}
              type="text"
              placeholder={t("signUp.firstName")}
              name="firstName"
              aria-label="firstName"
              ref={register()}
            />
            <InputErrorMessage error={errors.firstName} />
          </div>

          <div className="formInput">
            <input
              className={getErrorClass(errors.lastName)}
              type="text"
              placeholder={t("signUp.lastName")}
              name="lastName"
              aria-label="lastName"
              ref={register()}
            />
            <InputErrorMessage error={errors.lastName} />
          </div>
        </div>

        <div className="formInput">
          <input
            className={getErrorClass(errors.email)}
            type="email"
            placeholder={t("signUp.emailAddress")}
            name="email"
            aria-label="email"
            ref={register()}
          />
          <InputErrorMessage error={errors.email} />
        </div>

        <div className="formInputGroup">
          <div className="formInput">
            <input
              className={getErrorClass(errors.password)}
              type="password"
              placeholder={t("signUp.password")}
              name="password"
              aria-label="password"
              ref={register()}
            />
            <InputErrorMessage error={errors.password} />
          </div>

          <div className="formInput">
            <input
              className={getErrorClass(errors.confirmPassword)}
              type="password"
              placeholder={t("signUp.confirmPassword")}
              name="confirmPassword"
              aria-label="confirmPassword"
              ref={register()}
            />
            <InputErrorMessage error={errors.confirmPassword} />
          </div>
        </div>

        <div className="formInput">
          <div className="termsConditions">
            <div>
              <input
                className={getErrorClass(errors.acceptTerms)}
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                value="accepted"
                aria-label="acceptTerms"
                ref={register()}
              />
            </div>
            <div>
              <label
                htmlFor="acceptTerms"
                dangerouslySetInnerHTML={{
                  __html: t("signUp.acceptTerms", {
                    terms: `<a href="/terms">${t("signUp.terms")}</a>`,
                    privacy: `<a href="/privacy">Privacy Policy</a>`,
                  }),
                }}
              />
            </div>
          </div>
          <InputErrorMessage error={errors.acceptTerms} />
        </div>

        <button type="submit" className="submitBtn">
          {t("signUp.signUp")}
        </button>

        <p
          dangerouslySetInnerHTML={{
            __html: t("signUp.haveAccount", {
              signIn: `<a href="/signin">${t("signUp.signIn")}</a>`,
            }),
          }}
        />
      </form>
    </div>
  );
}
