import React from "react";
import img from "../../assets/Images/Vr_img.png";
import OutlineHeading from "../../Components/OutlineHeading/OutlineHeading";
import "./VR.css";
const VR = () => {
  return (
    <section className="VR" id="VR">
      <div className="VR-main">
        <div className="VR-left">
          <img src={img} alt="" />
        </div>
        <div className="VR-right">
          <OutlineHeading title={"What is VR?"} />
          <p>
            Virtual Reality (VR) is the use of computer technology to create a
            simulated environment. Unlike traditional user interfaces, VR places
            the user inside an experience. Instead of viewing a screen in front
            of them, users are immersed and able to interact with 3D worlds.
          </p>
          <button>Try VR Now</button>
        </div>
      </div>
      <div className="gradient-circle VR-circle1"></div>
      <div className="gradient-circle VR-circle2"></div>
    </section>
  );
};

export default VR;
