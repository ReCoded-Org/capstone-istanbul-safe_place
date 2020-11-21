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

const JobsTrainingButtons = ({ setCardsList, setFilteredCards }) => {
  const { t } = useTranslation();
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const opportunityListBtns = BUTTON_SPECS.map((button, index) => {
    const opportunityData = [
      ...t(`${button.contentTranslationKey}`, { returnObjects: true }),
    ];

    const getOpportunityData = () => {
      setCardsList(opportunityData);
      setFilteredCards(opportunityData);
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

  return <div className="opportunityBtns">{opportunityListBtns}</div>;
};

export default JobsTrainingButtons;
