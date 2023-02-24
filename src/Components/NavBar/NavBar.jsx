import React, { useEffect, useState } from "react";
import {
  CiFacebook,
  CiInstagram,
  CiLinkedin,
  IoMdClose,
  RiMenu3Fill,
} from "react-icons/all";
import Logo from "../../assets/Images/Logo.png";
import "./NavBar.css";
const NavBar = () => {
  const [show, setShow] = useState(false);
  const [sticky, setsticky] = useState("static");
  const NavShow = () => {
    setShow(!show);
  };
  const StickyNavBar = () => {
    let height = window.scrollY;
    console.log(height);
    height > 300 ? setsticky("stickynavbar") : setsticky("");
  };
  useEffect(() => {
    window.addEventListener("scroll", StickyNavBar);
    return () => {
      window.removeEventListener("scroll", StickyNavBar);
    };
  }, []);
  return (
    <>
      <nav className={`${sticky}`}>
        <div className={`Navbar `}>
          <div className="Nav-logo">
            <img src={Logo} alt="" />
          </div>
          <div className={show ? "Main-nav Main-nav-show" : "Main-nav"}>
            <IoMdClose className="Nav-close" onClick={NavShow} />
            <div className="Nav-links">
              <ul>
                <li>
                  <a href="#VR" onClick={NavShow}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#Form" onClick={NavShow}>
                    Try VR
                  </a>
                </li>
                <li>
                  <a href="#Team" onClick={NavShow}>
                    Team
                  </a>
                </li>
                <li>
                  <a href="#Footer" onClick={NavShow}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="Nav-Social">
              <CiFacebook />
              <CiInstagram />
              <CiLinkedin />
            </div>
          </div>
          <div className="Hamburger">
            <RiMenu3Fill onClick={NavShow} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
