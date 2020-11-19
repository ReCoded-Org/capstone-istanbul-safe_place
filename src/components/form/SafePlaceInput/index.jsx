import React from "react";
import { getErrorClass } from "../../../utils/formHelpers";
import InputErrorMessage from "../../InputErrorMessage";
import './index.scss';

/**
 * custom version of the input tag
 * @param {string} name - input name and id
 * @param {string} type - input type (text, email, ...etc)
 * @param {string} placeholder - input placeholder
 * @param {string} ref - React ref to use with register() form function or any ref
 * @param {string} label - (optional) if exist, label tag will be added with the name givien
 */
const SafePlaceInput = React.forwardRef((props, ref) => {
  const { label, errors, name, ...rest } = props;

  return (
    <div className="formInput">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        name={name}
        id={name}
        className={getErrorClass(errors?.[name])}
        ref={ref}
        {...rest}
      />
      {errors && <InputErrorMessage error={errors[name]} />}
    </div>
  );
});

export default SafePlaceInput;