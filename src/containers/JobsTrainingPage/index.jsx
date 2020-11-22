import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import JobsTrainingHeader from "../../components/JobsTrainingHeader";
import OpportunitiesContent from "../../components/OpportunitiesContent";

const JobsTrainingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <JobsTrainingHeader />
      <OpportunitiesContent />
    </Container>
  );
};

export default JobsTrainingPage;
