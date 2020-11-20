import React from "react";
import leftArrowSvg from "../../images/chevron.svg";
import rightArrowSvg from "../../images/chevronRight.svg";
import "./index.scss";

const SliderArrow = ({ leftOrRight, onClick }) => {
  return (
    <div className="arrow">
      <img
        src={leftOrRight === "left" ? rightArrowSvg : leftArrowSvg}
        onClick={onClick}
        style={
          leftOrRight === "left"
            ? { marginLeft: "1rem" }
            : { marginRight: "1rem" }
        }
        alt="Carousel Arrow"
      />
    </div>
  );
};

export default SliderArrow;
