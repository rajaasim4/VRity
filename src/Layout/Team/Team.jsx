import React from "react";
import img1 from "../../assets/Images/team_member1.png";
import img2 from "../../assets/Images/team_member2.png";
import img3 from "../../assets/Images/team_member3.png";
import img4 from "../../assets/Images/team_member4.png";
import OutlineHeading from "../../Components/OutlineHeading/OutlineHeading";
import "./Team.css";
const Team = () => {
  return (
    <div className="Team" id="Team">
      <div className="Team-main">
        <OutlineHeading title={"Our Team"} />
        <div className="Team-section">
          <TeamCard
            imgsrc={img1}
            name={"Olivia Butler"}
            designation={"General Manager"}
          />
          <TeamCard
            imgsrc={img2}
            name={"Jacob Nelson"}
            designation={"System Administator"}
          />
          <TeamCard
            imgsrc={img3}
            name={"Brenden Burns"}
            designation={"QA Engineer"}
          />
          <TeamCard
            imgsrc={img4}
            name={"Taura Higa"}
            designation={"Game Designer"}
          />
        </div>
      </div>
    </div>
  );
};

const TeamCard = (props) => {
  return (
    <>
      <div className="TeamCard">
        <div className="TeamCard-top">
          <img src={props.imgsrc} alt="" />
        </div>
        <div className="TeamCard-bottom">
          <h4>{props.name}</h4>
          <p>{props.designation}</p>
        </div>
      </div>
    </>
  );
};

export default Team;
