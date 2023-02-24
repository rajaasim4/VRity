import React from "react";
import OutlineHeading from "../../Components/OutlineHeading/OutlineHeading";
import "./Form.css";
const Form = () => {
  return (
    <>
      <div className="Form" id="Form">
        <div className="Form-main">
          <OutlineHeading title={"Interested In VR"} />
          <p>Fill out a short form and we will call you back</p>
          <div className="Form-section">
            <input type="text" placeholder="Jessica Belton" />
            <input type="text" placeholder="+43 535 353" />
            <input type="text" placeholder="jessica123@example.com" />

            <button>Click me back</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
