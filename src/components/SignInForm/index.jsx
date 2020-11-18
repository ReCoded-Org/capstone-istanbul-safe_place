import React from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import InputErrorMessage from "../InputErrorMessage";
import { getErrorClass } from "../../utils/formErrorHelpers";
import "./index.scss";

const schema = Joi.object({
  email: Joi.string()
    .required()
    .email({ tlds: { allow: ["com", "net", "edu"] } })
    .messages({
      "string.empty": `Please provide your email`,
      "string.email": `Please provide a valid email`,
    }),
  password: Joi.string().required().min(8).max(64).strict().messages({
    "string.empty": `Please provide a password`,
  }),
});

export default function SignInForm({ submit }) {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = (data) => {
    submit(data);
    reset();
  };

  return (
    <div className="signInForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formInput">
          <input
            className={getErrorClass(errors.email)}
            type="email"
            placeholder="Your Email"
            name="email"
            aria-label="email"
            ref={register()}
          />
          <InputErrorMessage error={errors.email} />
        </div>

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
          <label htmlFor="remembered">
            <input
              type="checkbox"
              id="remembered"
              name="remembered"
              value="toBeRemembered"
            />
            Remember me next time
          </label>
        </div>

        <button type="submit" className="submitBtn">
          Sign in
        </button>
      </form>
    </div>
  );
}
