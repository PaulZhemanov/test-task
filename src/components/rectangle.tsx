import React from "react";

const Rectangle = () => {
  const rectangleStyles = {
    width: "841px",
    height: "500px",
    flexShrink: 0,
    border: "1px solid #000",
    opacity: 0.5,
    background: "var(--purple, #574EF1);",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  };
  return <div style={rectangleStyles}></div>;
};

export default Rectangle;
