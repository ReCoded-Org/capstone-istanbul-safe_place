import React from "react";
import { Container } from "react-bootstrap";
import JobsTrainingHeader from "../../components/JobsTrainingHeader";
import OpportunitiesContent from "../../components/OpportunitiesContent";

const JobsTrainingPage = () => {
  return (
    <Container>
      <JobsTrainingHeader />
      <OpportunitiesContent />
    </Container>
  );
};

export default JobsTrainingPage;
