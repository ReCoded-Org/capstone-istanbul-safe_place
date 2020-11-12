import React from "react";
import Blogs from "../../components/Blogs";
import SearchBar from "../../components/SearchBar";
import "./index.scss";
import { useTranslation } from "react-i18next";

export default function BlogPage() {
  const { t } = useTranslation();

  return (
    <div className="blogsMainContainer">
      <h2 className="ourBlogTitle">Our Blog</h2>
      <p className="ourBlogSubtitle">
        {t(`Information about violence, women and health. Read different topics
          that contribute positively to the mental health of women.`)}
      </p>
      <SearchBar />
      <Blogs />
    </div>
  );
}
