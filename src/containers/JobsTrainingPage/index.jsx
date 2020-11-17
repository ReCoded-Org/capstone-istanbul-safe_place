import React from "react";
import { Container } from "react-bootstrap";
import JobsTrainingHeader from "../../components/JobsTrainingHeader";
import JobsTrainingContent from "../../components/JobsTrainingContent";

const JobsTrainingPage = () => {
  return (
    <Container>
      <JobsTrainingHeader />
      <JobsTrainingContent />
    </Container>
  );
};

export default JobsTrainingPage;
