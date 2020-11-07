import React from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
// import { joiResolver } from "@hookform/resolvers/joi";
import InputErrorMessage from "../InputErrorMessage";
import "./index.scss";

// const schema = Joi.object({
//   email: Joi.string()
//     .required()
//     .email({ tlds: { allow: ["com", "net", "edu"] } })
//     .messages({
//       "string.empty": `Email field cannot be empty`,
//       "string.email": `You should type a valid email`,
//     }),
//   password: Joi.string().required().min(8).max(64).strict().messages({
//     "string.empty": `Password field cannot be empty`,
//   }),
// });

export default function SignUpForm({ submit }) {
  const { register, handleSubmit, errors, reset } = useForm({
    // resolver: joiResolver(schema),
  });

  const onSubmit = (data) => {
    submit(data);
    reset();
  };

  return (
    <div className="signInForm">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="formInputGroup">
          <div className="formInput width-50">
            <input
              className={errors.email && "inputError"}
              type="text"
              placeholder="First name"
              name="firstName"
              aria-label="firstName"
              ref={register()}
            />
            {errors?.email && (
              <InputErrorMessage message={errors.email.message} />
            )}
          </div>

          <div className="formInput width-50">
            <input
              className={errors.email && "inputError"}
              type="text"
              placeholder="Last name"
              name="lastName"
              aria-label="lastName"
              ref={register()}
            />
            {errors?.email && (
              <InputErrorMessage message={errors.email.message} />
            )}
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
          {errors?.email && (
            <InputErrorMessage message={errors.email.message} />
          )}
        </div>

        <div className="formInputGroup">
          <div className="formInput width-50">
            <input
              className={errors.password && "inputError"}
              type="password"
              placeholder="Password"
              name="password"
              aria-label="password"
              ref={register()}
            />
            {errors?.password && (
              <InputErrorMessage message={errors.password.message} />
            )}
          </div>

          <div className="formInput width-50">
            <input
              className={errors.password && "inputError"}
              type="password"
              placeholder="Repeat password"
              name="passwordRepeat"
              aria-label="passwordRepeat"
              ref={register()}
            />
            {errors?.password && (
              <InputErrorMessage message={errors.password.message} />
            )}
          </div>
        </div>

        <div className="formInput">
          <label htmlFor="remembered">
            <input
              type="checkbox"
              id="remembered"
              name="remembered"
              value="toBeRemembered"
            />
            I have read and agree with
            <a href="/terms"> Terms of Service </a>
            and our
            <a href="/policy"> Privecy Policy </a>
          </label>
        </div>

        <button type="submit" className="submitBtn">
          Sign in
        </button>
      </form>
    </div>
  );
}
