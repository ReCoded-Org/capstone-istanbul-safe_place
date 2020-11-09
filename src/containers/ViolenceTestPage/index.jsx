import React from "react";
import { Container } from "react-bootstrap";
import ViolenceTestHeader from "../../components/ViolenceTestHeader";
import ViolenceTestModal from "../../components/ViolenceTestModal";

const ViolenceTestPage = () => {
  return (
    <Container>
      <ViolenceTestHeader />
      <ViolenceTestModal />
    </Container>
  );
};

export default ViolenceTestPage;
