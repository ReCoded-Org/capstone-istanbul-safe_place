import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import InputErrorMessage from "../../../InputErrorMessage";
import { getErrorClass } from "../../../../utils/formErrorHelpers";

const schema = Joi.object({
  email: Joi.string().required().email({ tlds: {} }).messages({
    "string.empty": `Please provide your email`,
    "string.email": `Please provide a valid email`,
  }),
});

export default function EmailAdd({ addNewEmail }) {
  const { register, getValues, errors, reset, trigger } = useForm({
    mode: "onBlur",
    resolver: joiResolver(schema),
  });

  const handleClick = async () => {
    console.log(errors);
    const isValid = await trigger("email");
    if (isValid) {
      const email = getValues("email");
      addNewEmail(email);
      reset();
    }
  };

  return (
    <Container fluid className="emailBlock">
      <div className="emailAddress">
        <form>
          <div className="formInput">
            <input
              className={getErrorClass(errors?.email)}
              type="email"
              placeholder="Add an email address"
              name="email"
              aria-label="email"
              ref={register()}
            />
            <InputErrorMessage error={errors?.email} />
          </div>
        </form>
      </div>

      <div className="emailControl">
        <button
          type="button"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Add a new email"
          onClick={handleClick}
        >
          +
        </button>
      </div>
    </Container>
  );
}
