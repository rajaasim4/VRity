import React from "react";

const OutlineHeading = (props) => {
  const style = {
    WebkitTextFillColor: "transparent",
    WebkitTextStroke: "2px white",
    fontFamily: "sans-serif",
    fontWeight: "600",
    fontSize: "42px",
    lineHeight: "51px",
  };
  return <h3 style={style}>{props.title}</h3>;
};

export default OutlineHeading;
