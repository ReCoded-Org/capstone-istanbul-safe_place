import React from "react";
import SeekHelp from "../../components/SeekHelp";
import ViolenceTest from "../../components/ViolenceTest";
import GenderViolenceMain from "../../components/GenderViolenceMain";
import JobsTrainingHome from "../../components/JobsTrainingHome";

const Home = () => {
  return (
    <div>
      <GenderViolenceMain />
      <ViolenceTest />
      <SeekHelp />
      <JobsTrainingHome />
    </div>
  );
};
export default Home;
