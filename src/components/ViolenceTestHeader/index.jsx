import React from "react";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";

const ViolenceTestHeader = () => {
  const { t } = useTranslation();

  return (
    <Row className="testHeader justify-content-md-center">
      <h1>{t("violenceTestPage.header")}</h1>
      <p
        dangerouslySetInnerHTML={{
          __html: t("violenceTestPage.subHeader", {
            link:
              '<a href="https://dvs-snoco.org/what-is-domestic-violence-self-test/"> Domestic Violence Services Snohomish County</a>',
          }),
        }}
      />
    </Row>
  );
};

export default ViolenceTestHeader;
