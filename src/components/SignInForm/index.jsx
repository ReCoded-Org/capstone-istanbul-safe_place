import React from "react";
import { useForm } from "react-hook-form";
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import InputErrorMessage from "../InputErrorMessage";
import "./index.scss";

const schema = Joi.object({
  email: Joi.string()
    .required()
    .email({ tlds: { allow: ['com', 'net', 'edu'] } })
    .messages({
      'string.empty': `Email field cannot be empty`,
      'string.email': `You should type a valid email`
    })
  ,
  password: Joi.string()
    .required()
    .min(8)
    .max(64)
    .strict()
    .messages({
      'string.empty': `Password field cannot be empty`,
    })

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
            className={errors.email && "inputError"}
            type="email"
            placeholder="Your Email"
            name="email"
            aria-label="email"
            ref={register()}
          />
          {errors?.email && <InputErrorMessage message={errors.email.message} />}

        </div>

        <div className="formInput">
          <input
            className={errors.password && "inputError"}
            type="password"
            placeholder="Password"
            name="password"
            aria-label="password"
            ref={register()}
          />
          {errors?.password && <InputErrorMessage message={errors.password.message} />}
        </div>

        <div className="formInput">
          <label htmlFor="remembered">
            <input type="checkbox" id="remembered" name="remembered" value="toBeRemembered" />
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
