import React from "react";
import "./index.scss";
import patchExclamationFill from "../../images/icons/patchExclamationFill.svg";

export default function InputErrorMessage({ errors, name }) {
  if (errors && errors[name]) {
    return (
      <div className="errorMessage" role="alert">
        <img
          src={patchExclamationFill}
          alt="Error Logo"
          width="32"
          height="32"
        />
        <p>{errors[name].message}</p>
      </div>
    );
  }

  return null;
}
