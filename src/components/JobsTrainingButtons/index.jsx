import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "./index.scss";

const JobsTrainingButtons = ({ setCardsArr, setSearchCards }) => {
  const { t } = useTranslation();
  //The selected button is disabled to let the user know which data he is viewing (jobs or training).
  const [isDisabled, setIsDisabled] = useState(true);

  // If a button is disabled it means it's data is already fetched. So, on the click of the other button this function detects the disabled button and fetches the opposite data.
  const fetchOpportunityData = () => {
    if (isDisabled) {
      setSearchCards([...t(`home.trainings`, { returnObjects: true })]);
      setCardsArr([...t(`home.trainings`, { returnObjects: true })]);
    } else {
      setSearchCards([...t(`home.jobOpportunities`, { returnObjects: true })]);
      setCardsArr([...t(`home.jobOpportunities`, { returnObjects: true })]);
    }
    setIsDisabled(!isDisabled);
  };

  const BUTTON_NAMES = ["Job Opportunities", "Trainings / Workshops"];
  // This variables maps the two button Names and returns a button for each. One for Jobs and one for training to fetch data accordingly.
  const opportunityListBtns = BUTTON_NAMES.map((name, index) => {
    return (
      <button
        key={name}
        type="button"
        className="opportunityListBtn"
        onClick={() => {
          fetchOpportunityData();
        }}
        disabled={index === 0 ? isDisabled : !isDisabled}
      >
        {name}
      </button>
    );
  });

  return <div>{opportunityListBtns}</div>;
};

export default JobsTrainingButtons;
