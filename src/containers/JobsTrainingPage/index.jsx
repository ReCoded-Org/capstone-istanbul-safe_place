import React from "react";
import { Container } from "react-bootstrap";
import JobsTrainingHeader from "../../components/JobsTrainingHeader";
import JobsTrainingContent from "../../components/JobsTrainingContent";

const JobsTrainingPage = () => {
  // ToDo(hibaMachfej): Add search functionality to jobs/training page.
  return (
    <Container>
      <JobsTrainingHeader />
      <JobsTrainingContent />
    </Container>
  );
};

export default JobsTrainingPage;
