import React from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import InputErrorMessage from "../InputErrorMessage";
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
    "any.only": `You should accept our terms of service and privcey policy`,
  }),
});

export default function SignUpForm({ submit }) {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = (data) => {
    submit(data);
    reset();
  };

  return (
    <div className="signUpForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formInputGroup">
          <div className="formInput">
            <input
              className={errors.email && "inputError"}
              type="text"
              placeholder="First name"
              name="firstName"
              aria-label="firstName"
              ref={register()}
            />
            <InputErrorMessage errors={errors} name="firstName" />
          </div>

          <div className="formInput">
            <input
              className={errors.email && "inputError"}
              type="text"
              placeholder="Last name"
              name="lastName"
              aria-label="lastName"
              ref={register()}
            />
            <InputErrorMessage errors={errors} name="lastName" />
          </div>
        </div>

        <div className="formInput">
          <input
            className={errors.email && "inputError"}
            type="email"
            placeholder="Your email"
            name="email"
            aria-label="email"
            ref={register()}
          />
          <InputErrorMessage errors={errors} name="email" />
        </div>

        <div className="formInputGroup">
          <div className="formInput">
            <input
              className={errors.password && "inputError"}
              type="password"
              placeholder="Password"
              name="password"
              aria-label="password"
              ref={register()}
            />
            <InputErrorMessage errors={errors} name="password" />
          </div>

          <div className="formInput">
            <input
              className={errors.confirmPassword && "inputError"}
              type="password"
              placeholder="Repeat password"
              name="confirmPassword"
              aria-label="confirmPassword"
              ref={register()}
            />
            <InputErrorMessage errors={errors} name="confirmPassword" />
          </div>
        </div>

        <div className="formInput">
          <label htmlFor="acceptTerms">
            <input
              className={errors.acceptTerms && "inputError"}
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              value="accepted"
              ref={register()}
            />
            I have read and agree with the&nbsp;
            <a href="/terms">Terms of Service</a>
            &nbsp;and our&nbsp;
            <a href="/policy">Privacy Policy</a>
          </label>
          <InputErrorMessage errors={errors} name="acceptTerms" />
        </div>

        <button type="submit" className="submitBtn">
          Sign in
        </button>
      </form>
    </div>
  );
}
