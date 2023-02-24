import React from "react";
import Logo from "../../assets/Images/Logo.png";
import OutlineHeading from "../OutlineHeading/OutlineHeading";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer id="Footer">
        <div className="Footer-main">
          <div className="Footer-section1 Footer-section">
            <img src={Logo} alt="" />
            <address>
              Phone: +48 429 94 21 209
              <br />
              <br />
              E-mail: contact@vrity.com
              <br />
              <br />
              E-mail: contact@vrity.com
            </address>
          </div>
          <div className="Footer-section2 Footer-section">
            <OutlineHeading title={"Contact"} />
            <address>
              Address: Marszałka Focha 63, 85-090 Bydgoszcz, Poland
            </address>
            <span>Schedule: 10:00 - 20:00, everyday</span>
          </div>
          <div className="Footer-section3 Footer-section">
            <span>
              Cooperation: cooperation@vrity.com
              <br />
              <br />
              Privacy policy: vrity privacy policy 2022
            </span>
          </div>
        </div>
        <div className="Footer-top-gradient"></div>
        <div className="Footer-bottom-gradient"></div>
        <div className="gradient-circle footer-gradient-circle"></div>
      </footer>
    </>
  );
};

export default Footer;
