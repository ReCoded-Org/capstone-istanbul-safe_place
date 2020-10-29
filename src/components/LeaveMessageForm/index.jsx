import React from "react";
import { Col } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import PatchExclamationFll from '../../images/Patch-exclamation-fll.svg'
import "./index.scss";

export default function LeaveMessageForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <Col md={6} xs={12} className="contactForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formInput">
          <label htmlFor="fullName">
            Full Name
            <input
              className={errors.fullName && 'inputError'}
              type="text"
              placeholder="Louis Li (Optional)"
              name="fullName"
              id="fullName"
              ref={register({
                minLength: 3
              })}
            />
            {errors.fullName &&
              (
                <p className="errorMessage">
                  <img src={PatchExclamationFll} alt="" width="32" height="32" title="Bootstrap" />
                  Your name is too short.
                </p>
              )}
          </label>
        </div>

        <div className="formInput">
          <label htmlFor="email">
            E-mail Address
            <input
              className={errors.email && 'inputError'}
              type="email"
              placeholder="louis@example.com"
              name="email"
              id="email"
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address"
                }
              })}
            />
            {(errors.email && errors.email.type === 'required') &&
              (
                <p className="errorMessage">
                  <img src={PatchExclamationFll} alt="" width="32" height="32" title="Bootstrap" />
                  Your email address is required.
                </p>
              )}
            {errors.email && errors.email.type === 'pattern' &&
              (
                <p className="errorMessage">
                  <img src={PatchExclamationFll} alt="" width="32" height="32" title="Bootstrap" />
                  {errors.email.message}
                </p>
              )}
          </label>
        </div>

        <div className="formInput">
          <label htmlFor="message">
            Message
            <textarea
              className={errors.message && 'inputError'}
              name="message"
              id="message"
              placeholder="type your message here ..."
              ref={register({ required: true, minLength: 10, maxLength: 2000 })}
            />
            {errors.message && errors.message.type === 'required' &&
              (
                <p className="errorMessage">
                  <img src={PatchExclamationFll} alt="" width="32" height="32" title="Bootstrap" />
                  You should write your message.
                </p>
              )}
            {errors.message && errors.message.type === 'minLength' &&
              (
                <p className="errorMessage">
                  <img src={PatchExclamationFll} alt="" width="32" height="32" title="Bootstrap" />
                  Your message is too short. Write us more!
                </p>
              )}
            {errors.message && errors.message.type === 'maxLength' &&
              (
                <p className="errorMessage">
                  <img src={PatchExclamationFll} alt="" width="32" height="32" title="Bootstrap" />
                  Your message is too long. Be spesific please!
                </p>
              )}
          </label>
        </div>

        <input type="submit" className="submitBtn" value="Send" />
      </form>
    </Col>
  );
}
