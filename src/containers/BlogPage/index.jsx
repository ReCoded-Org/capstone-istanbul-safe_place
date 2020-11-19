import React from "react";
import Blogs from "../../components/Blogs";
import "./index.scss";
import { useTranslation } from "react-i18next";

export default function BlogPage() {
  const { t } = useTranslation();

  return (
    <div className="blogsMainContainer">
      <h2 className="ourBlogTitle">{t("blogPage.title")}</h2>
      <p className="ourBlogSubtitle">{t("blogPage.subtitle")}</p>
      <Blogs />
    </div>
  );
}
