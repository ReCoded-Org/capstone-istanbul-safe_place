import React from "react";

const SliderArrow = ({ leftOrRight, onClick }) => {
  return (
    <div>
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
