import React from "react";
import { Row } from "react-bootstrap";
import "./index.scss";

const ViolenceTestHeader = () => {
  return (
    <Row className="testHeader justify-content-md-center">
      <h1>Self Test</h1>
      <p>
        This test is developed by <br />
        <a href="https://dvs-snoco.org/what-is-domestic-violence-self-test/">
          Domestic Violence Services Snohomish County
        </a>
      </p>
    </Row>
  );
};

export default ViolenceTestHeader;
