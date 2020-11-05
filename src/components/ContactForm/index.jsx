import React from "react";
import { Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import InputErrorMessage from "../InputErrorMessage";
import "./index.scss";

export default function ContactForm({ submit }) {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = (data) => {
    submit(data);
    reset();
  };

  return (
    <Col md={6} xs={12} className="contactForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formInput">
          <label htmlFor="fullName">
            Full Name
            <input
              className={errors.fullName && "inputError"}
              type="text"
              placeholder="Louis Li (optional)"
              name="fullName"
              id="fullName"
              ref={register()}
            />
          </label>
        </div>

        <div className="formInput">
          <label htmlFor="email">
            Email address
            <input
              className={errors.email && "inputError"}
              type="email"
              placeholder="louis@example.com"
              name="email"
              id="email"
              ref={register({
                required: {
                  value: true,
                  message: "Your email address is required.",
                },
                // TODO: intall joi and use it for email validation
              })}
            />
            {errors?.email && (
              <InputErrorMessage message={errors.email.message} />
            )}
          </label>
        </div>

        <div className="formInput">
          <label htmlFor="messageContent">
            Message
            <textarea
              className={errors.message && "inputError"}
              name="messageContent"
              id="messageContent"
              placeholder="type your message here ..."
              aria-label="message"
              ref={register({
                required: {
                  value: true,
                  message: "You should write your message.",
                },
                minLength: {
                  value: 10,
                  message: "Your message is too short. Write us more!",
                },
                maxLength: {
                  value: 2000,
                  message: "Your message is too long. Be specific please!",
                },
              })}
            />
            {errors?.messageContent && (
              <InputErrorMessage message={errors.messageContent.message} />
            )}
          </label>
        </div>

        <button type="submit" className="submitBtn">
          Send
        </button>
      </form>
    </Col>
  );
}
