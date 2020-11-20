import React from "react";
import Blogs from "../../components/Blogs";
import "./index.scss";
import { useTranslation } from "react-i18next";

export default function BlogPage() {
  const { t } = useTranslation();

  return (
    <div className="blogsMainContainer">
      <h2>{t("blogPage.title")}</h2>
      <h6>{t("blogPage.subtitle")}</h6>
      <Blogs />
    </div>
  );
}
