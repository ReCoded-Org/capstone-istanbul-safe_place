import React from "react";
import { Col } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import ErrorMessage from '../../components/ErrorMessage';
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
            {errors.fullName && <ErrorMessage message='Your name is too short.' />}
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
              (<ErrorMessage message='Your email address is required.' />)}
            {errors.email && errors.email.type === 'pattern' &&
              (<ErrorMessage message={errors.email.message} />)}
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
              ref={register({ 
                required: true, 
                minLength: 10, 
                maxLength: 2000 
              })}
            />
            {errors.message && errors.message.type === 'required' &&
              (<ErrorMessage message='You should write your message.' />)}
            {errors.message && errors.message.type === 'minLength' &&
              (<ErrorMessage message='Your message is too short. Write us more!' />)}
            {errors.message && errors.message.type === 'maxLength' &&
              (<ErrorMessage message='Your message is too long. Be spesific please!' />)}
          </label>
        </div>

        <input type="submit" className="submitBtn" value="Send" />
      </form>
    </Col>
  );
}
