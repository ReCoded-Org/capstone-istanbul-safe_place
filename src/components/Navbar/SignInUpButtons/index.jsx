import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function SignInUpButtons() {
  const { t } = useTranslation();

  return (
    <div className="signButtons">
      <NavLink to="/signin">
        <button type="button" className="signInBtn">
          {t("navbar.buttons.signIn")}
        </button>
      </NavLink>
      <NavLink to="/signup">
        <button type="button" className="signUpBtn">
          {t("navbar.buttons.signUp")}
        </button>
      </NavLink>
    </div>
  );
}
