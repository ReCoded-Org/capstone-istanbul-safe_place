import React from "react";
import "./Footer.scss";
import logo from "../../images/Logo-footer.png";
import twitter from "../../images/icons/twitter.svg";
import linkedin from "../../images/icons/linkedin.svg";
import instagram from "../../images/icons/instagram.svg";
import facebook from "../../images/icons/facebook.svg";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo" width="200" />
      <div className="footer-info">
        <p>Privacy and Cookies</p>
        <p>Terms and Conditions</p>
        <p>Follow us on social media:</p>
        <div className="social-media">
          <img src={twitter} alt="twitter" width="25" />
          <img src={linkedin} alt="twitter" width="25" />
          <img src={instagram} alt="instagram" width="25" />
          <img src={facebook} alt="facebook" width="25" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
