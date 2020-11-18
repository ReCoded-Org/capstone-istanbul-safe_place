import React from "react";
import { useTranslation } from "react-i18next";

export default function SignInUpButtons() {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <button type="button" className="signInBtn">
          <a href="/signin">{t("navbar.buttons.signIn")}</a>
        </button>
        <button type="button" className="signUpBtn">
          <a href="/signup">{t("navbar.buttons.signUp")}</a>
        </button>
      </div>
    </div>
  );
}
