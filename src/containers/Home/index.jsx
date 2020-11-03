import React from "react";
import GenderViolenceMain from "../../components/GenderViolenceMain";
import ViolenceTest from "../../components/ViolenceTest";
import SeekHelp from "../../components/SeekHelp";
import BlogsCarouselHome from "../../components/BlogsCarouselHome";
import Contact from "../../components/Contact";
import JobsTrainingHome from '../../components/JobsTrainingHome'

const Home = () => {
  return (
    <div>
      <GenderViolenceMain />
      <ViolenceTest />
      <SeekHelp />
      <JobsTrainingHome />
      <BlogsCarouselHome />
      <Contact />
    </div>
  );
};

export default Home;
