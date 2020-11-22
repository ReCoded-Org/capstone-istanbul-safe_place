import React from "react";
import { Container } from "react-bootstrap";
import ViolenceTestHeader from "../../components/ViolenceTestHeader";
import ViolenceTestCards from "../../components/ViolenceTestCards";
import ViolenceTestModal from "../../components/ViolenceTestModal";

const ViolenceTestPage = () => {
  return (
    <Container>
      <ViolenceTestHeader />
      <ViolenceTestCards />
      <ViolenceTestModal />
    </Container>
  );
};

export default ViolenceTestPage;
