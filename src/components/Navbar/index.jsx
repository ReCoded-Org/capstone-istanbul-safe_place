import React from "react";
import {
  Navbar,
  Nav,
  Container,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import "./index.scss";
import logo from "../../images/Logo.svg";
import { useTranslation } from "react-i18next";
import languageIcon from "../../images/icons/language.svg";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/Authentication";
import SignInUpButtons from "./SignInUpButtons";
import UserSetting from "./UserSetting";

const LANG_SPECS = [
  {
    code: "ar",
    name: "العربية",
  },
  {
    code: "en",
    name: "English",
  },
];

const MainNavbar = () => {
  const currentUser = React.useContext(AuthContext);

  const [t, i18n] = useTranslation();

  return (
    <Navbar expand="lg" collapseOnSelect className="mainNavbar">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavLink className="navLink" to="/about">
              {t("navbar.about")}
            </NavLink>
            <NavLink className="navLink" to="/blog">
              {t("navbar.blog")}
            </NavLink>
            <NavLink className="navLink" to="/opportunities">
              {t("navbar.opportunities")}
            </NavLink>
            <NavLink className="navLink" to="/contact">
              {t("navbar.contact")}
            </NavLink>
            <DropdownButton
              alignRight
              variant="none"
              id="dropdown-button"
              className="dropdown"
              title={<img src={languageIcon} alt="Language icon" />}
            >
              {LANG_SPECS.map((lang) => {
                return (
                  <Dropdown.Item
                    className="dropdownButton"
                    as="button"
                    key={lang.code}
                    onClick={() => {
                      i18n.changeLanguage(lang.code);
                    }}
                  >
                    {lang.name}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
            {currentUser ? (
              <UserSetting currentUser={currentUser} />
            ) : (
              <SignInUpButtons />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
