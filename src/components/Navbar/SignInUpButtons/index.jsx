import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SignInUpButtons() {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <button type="button" className="signInBtn">
          <Link to="/signin">{t("navbar.buttons.signIn")}</Link>
        </button>
        <button type="button" className="signUpBtn">
          <Link to="/signup">{t("navbar.buttons.signUp")}</Link>
        </button>
      </div>
    </div>
  );
}
