import React from "react";
import SeekHelp from "../../components/SeekHelp";
import ViolenceTest from "../../components/ViolenceTest";
import GenderViolenceMain from "../../components/GenderViolenceMain";
import BlogsCarouselHome from "../../components/BlogsCarouselHome";

const Home = () => {
  return (
    <div>
      <GenderViolenceMain />
      <ViolenceTest />
      <SeekHelp />
      <BlogsCarouselHome />
    </div>
  );
};
export default Home;
