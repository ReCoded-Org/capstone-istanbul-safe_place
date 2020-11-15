import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

const JobsTrainingButtons = ({ cardsArr, setCardsArr }) => {
  const { t } = useTranslation();
  const [isDisabled, setIsDisabled] = useState(true);
  const buttonText = ["Job Opportunities", "Trainings / Workshops"];
  console.log(cardsArr);
  const selectOpportunityButton = () => {
    if (isDisabled === true) {
      setCardsArr([...t(`home.trainings`, { returnObjects: true })]);
      setIsDisabled(!isDisabled);
    } else {
      setCardsArr([...t(`home.jobOpportunities`, { returnObjects: true })]);
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
