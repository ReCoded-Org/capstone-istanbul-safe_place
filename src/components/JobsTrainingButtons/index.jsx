import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

const BUTTON_SPECS = [
  {
    contentTranslationKey: "home.jobOpportunities",
    buttonTranslationKey: "jobsTrainingPage.buttons.jobOpportunities",
  },
  {
    contentTranslationKey: "home.trainings",
    buttonTranslationKey: "jobsTrainingPage.buttons.trainings",
  },
];

const JobsTrainingButtons = ({ setCardsArr }) => {
  const { t } = useTranslation();
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  // This variables maps the button returns a button for each.
  const opportunityListBtns = BUTTON_SPECS.map((button, index) => {
    const opportunityData = [
      ...t(`${button.contentTranslationKey}`, { returnObjects: true }),
    ];

    const getOpportunityData = () => {
      setCardsArr(opportunityData);
      setSelectedButtonIndex(index);
    };

    return (
      <button
        key={t(button.contentTranslationKey)}
        type="button"
        className="opportunityListBtn"
        onClick={() => {
          getOpportunityData(index);
        }}
        disabled={index === selectedButtonIndex}
      >
        {t(button.buttonTranslationKey)}
      </button>
    );
  });

  return <div>{opportunityListBtns}</div>;
};

export default JobsTrainingButtons;
