import React from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import InputErrorMessage from "../InputErrorMessage";
import { getErrorClass } from "../../utils/formErrorHelpers";
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

  const onSubmit = async (data) => {
    const status = await submit(data);
    switch (status) {
      case 'auth/email-already-in-use':
        setError("email", {
          type: "already taken",
          message: "Email is already taken! Please enter another one or sign in."
        });
        break;
      case 'succeed':
        reset();
        break;
      default:
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
              placeholder="First name"
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
              placeholder="Last name"
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
            placeholder="Your email"
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
              placeholder="Password"
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
              placeholder="Repeat password"
              name="confirmPassword"
              aria-label="confirmPassword"
              ref={register()}
            />
            <InputErrorMessage error={errors.confirmPassword} />
          </div>
        </div>

        <div className="formInput">
          <label htmlFor="acceptTerms">
            <input
              className={getErrorClass(errors.acceptTerms)}
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              value="accepted"
              aria-label="acceptTerms"
              ref={register()}
            />
            I have read and agree with the <a href="/terms">Terms of Service</a>{" "}
            and our <a href="/privacy">Privacy Policy</a>
          </label>
          <InputErrorMessage error={errors.acceptTerms} />
        </div>

        <button type="submit" className="submitBtn">
          Sign in
        </button>
      </form>
    </div>
  );
}
