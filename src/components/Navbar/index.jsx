import React from "react";
import {
  Navbar,
  Nav,
  Container,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./index.scss";
import logo from "../../images/Logo.svg";
import { useTranslation } from "react-i18next";
import languageIcon from "../../images/icons/language.svg";

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
            <Nav.Link href="/about">{t("navbar.about")}</Nav.Link>
            <Nav.Link href="/blog">{t("navbar.blog")}</Nav.Link>
            <Nav.Link href="/opportunities">
              {t("navbar.opportunities")}
            </Nav.Link>
            <Nav.Link href="/contact">{t("navbar.contact")}</Nav.Link>
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

            <button type="button" className="signInBtn">
              <Link to="/signin">
                {t("navbar.buttons.signIn")}
              </Link>
            </button>
            <button type="button" className="signUpBtn">
              <Link to="/signup">
                {t("navbar.buttons.signUp")}
              </Link>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
