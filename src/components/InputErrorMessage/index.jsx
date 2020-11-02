import React from "react";
import "./index.scss";
import PatchExclamationFll from "../../images/icons/patchExclamationFll.svg";

export default function InputErrorMessage({ message }) {
  return (
    <div className="errorMessage" role="alert">
      <img src={PatchExclamationFll} alt="Error Logo" width="32" height="32" />
      <p>{message}</p>
    </div>
  );
}
