import React from "react";
import { useForm } from "react-hook-form";
// import InputErrorMessage from "../InputErrorMessage";
import "./index.scss";

export default function SignInForm({ submit }) {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = (data) => {
    submit(data);
    reset();
  };

  return (
    <div className="signInForm">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="formInput">
          <input
            className={errors.email && "inputError"}
            type="email"
            placeholder="Your Email"
            name="email"
            ref={register({
              required: {
                value: true,
                message: "Your email address is required.",
              },
              pattern: {
                // TODO: intall joi and use it for email validation
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address.",
              },
            })}
          />
          {errors?.email && (
            {/* <InputErrorMessage message={errors.email.message} /> */ }
          )}
        </div>

        <div className="formInput">
          <input
            className={errors.fullName && "inputError"}
            type="password"
            placeholder="Password"
            name="fullName"
            id="fullName"
            ref={register()}
          />
        </div>

        <div className="formInput">
          <label htmlFor="remembered">
            <input type="checkbox" id="remembered" name="remembered" value="toBeRemembered" />
            Remember me next time
          </label>

          {errors?.messageContent && (
            {/* <InputErrorMessage message={errors.messageContent.message} /> */ }
          )}
        </div>

        <button type="submit" className="submitBtn">
          Sign in
        </button>
      </form>
    </div>
  );
}
