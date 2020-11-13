import React from "react";
import { Container } from "react-bootstrap";
import JobsTrainingHeader from "../../components/JobsTrainingHeader";
import JobsTrainingContent from "../../components/JobsTrainingContent";
import SearchBar from "../../components/SearchBar";

const JobsTrainingPage = () => {
  // ToDo(hibaMachfej): Add search functionality to jobs/training page.
  return (
    <Container>
      <JobsTrainingHeader />
      <SearchBar />
      <JobsTrainingContent />
    </Container>
  );
};

export default JobsTrainingPage;
