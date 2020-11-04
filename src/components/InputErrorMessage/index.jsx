import React from "react";
import "./index.scss";
import patchExclamationFill from "../../images/icons/patchExclamationFill.svg";

export default function InputErrorMessage({ message }) {
  return (
    <div className="errorMessage" role="alert">
      <img src={patchExclamationFill} alt="Error Logo" width="32" height="32" />
      <p>{message}</p>
    </div>
  );
}
