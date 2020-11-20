import React from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

const JobsTrainingHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="jobsTrainingHeader">
      <h2>{t("jobsTrainingPage.header")}</h2>
      <h6>{t("jobsTrainingPage.subHeader")}</h6>
    </div>
  );
};

export default JobsTrainingHeader;
