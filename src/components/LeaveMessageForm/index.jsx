import React from "react";
import { Col } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';
import "./index.scss";

export default function LeaveMessageForm({submit}) {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = data => {
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
              className={errors.fullName && 'inputError'}
              type="text"
              placeholder="Louis Li (Optional)"
              name="fullName"
              id="fullName"
              ref={register({
                minLength: {
                  value: 3,
                  message: 'Your name is too short.'
                }
              })}
            />
            {errors?.fullName && <ErrorMessage message={errors.fullName.message} />}
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
                required: {
                  value: true,
                  message: 'Your email address is required.'
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address."
                }
              })}
            />
            {(errors?.email?.type === 'required') &&
              (<ErrorMessage message={errors.email.message} />)}
            {errors?.email?.type === 'pattern' &&
              (<ErrorMessage message={errors.email.message} />)}
          </label>
        </div>

        <div className="formInput">
          <label htmlFor="messageContent">
            Message
            <textarea
              className={errors.message && 'inputError'}
              name="messageContent"
              id="messageContent"
              placeholder="type your message here ..."
              ref={register({ 
                required: {
                  value: true,
                  message: 'You should write your message.'
                }, 
                minLength: {
                  value: 10,
                  message: 'Your message is too short. Write us more!'
                }, 
                maxLength: {
                  value: 2000,
                  message: 'Your message is too long. Be spesific please!'
                } 
              })}
            />
            {errors?.messageContent?.type === 'required' &&
              (<ErrorMessage message={errors.messageContent.message} />)}
            {errors?.messageContent?.type === 'minLength' &&
              (<ErrorMessage message={errors.messageContent.message} />)}
            {errors?.messageContent?.type === 'maxLength' &&
              (<ErrorMessage message={errors.messageContent.message} />)}
          </label>
        </div>

        <button type="submit" className="submitBtn">Send</button>
      </form>
    </Col>
  );
}
