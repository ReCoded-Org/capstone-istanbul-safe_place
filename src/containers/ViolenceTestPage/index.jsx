import React from "react";
import { Container } from "react-bootstrap";
import ViolenceTestHeader from "../../components/ViolenceTestHeader";
import ViolenceTestCards from "../../components/ViolenceTestCards";

const ViolenceTestPage = () => {
  return (
    <Container>
      <ViolenceTestHeader />
      <ViolenceTestCards />
    </Container>
  );
};

export default ViolenceTestPage;
