import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Blogs from "../../components/Blogs";
import "./index.scss";

export default function BlogPage() {
  const { t } = useTranslation();

  return (
    <Container className="blogsMainContainer">
      <h2>{t("blogPage.title")}</h2>
      <h6>{t("blogPage.subtitle")}</h6>
      <Blogs />
    </Container>
  );
}
