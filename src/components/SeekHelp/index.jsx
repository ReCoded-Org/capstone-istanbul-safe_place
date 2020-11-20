import React from "react";
import { useTranslation } from "react-i18next";
import SeekHelpMap from "../SeekHelpMap";
import SeekHelpCarousel from "../SeekHelpCarousel";
import "./index.scss";

const SeekHelp = () => {
  const { t } = useTranslation();

  return (
    <div className="seekHelpSection">
      <h2>{t("searchHelpPage.header")}</h2>
      <h6>{t("searchHelpPage.subHeader")}</h6>
      <SeekHelpMap />
      <SeekHelpCarousel />
    </div>
  );
};

export default SeekHelp;
