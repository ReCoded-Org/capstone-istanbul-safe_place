import React from "react";
import { Container } from "react-bootstrap";
import ViolenceTestHeader from "../../components/SelfViolenceTestHeader";
import ViolenceTestCards from "../../components/SelfViolenceTestCards";

const ViolenceTestPage = () => {
  return (
    <Container>
      <ViolenceTestHeader />
      <ViolenceTestCards />
    </Container>
  );
};

export default ViolenceTestPage;
