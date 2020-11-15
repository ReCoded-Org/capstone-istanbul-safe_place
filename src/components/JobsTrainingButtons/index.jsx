import React, { useState } from "react";
import "./index.scss";

const JobsTrainingButtons = ({ translationKey, setTranslationKey }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const buttonText = ["Job Opportunities", "Trainings / Workshops"];

  const selectOpportunityButton = () => {
    if (translationKey === "jobOpportunities") {
      setTranslationKey("trainings");
      setIsDisabled(!isDisabled);
    } else {
      setTranslationKey("jobOpportunities");
      setIsDisabled(!isDisabled);
    }
  };

  const opportunityListBtn = buttonText.map((text, index) => {
    return (
      <button
        key={text}
        type="button"
        className="opportunityListBtn"
        onClick={() => {
          selectOpportunityButton();
        }}
        disabled={index === 0 ? isDisabled : !isDisabled}
      >
        {text}
      </button>
    );
  });

  return <div>{opportunityListBtn}</div>;
};

export default JobsTrainingButtons;
