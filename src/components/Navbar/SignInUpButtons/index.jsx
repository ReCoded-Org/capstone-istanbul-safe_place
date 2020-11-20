import React from "react";
import { useTranslation } from "react-i18next";

export default function SignInUpButtons() {
  const { t } = useTranslation();

  return (
    <div>
      <a href="/signin">
        <button type="button" className="signInBtn">
          {t("navbar.buttons.signIn")}
        </button>
      </a>
      <a href="/signup">
        <button type="button" className="signUpBtn">
          {t("navbar.buttons.signUp")}
        </button>
      </a>
    </div>
  );
}
