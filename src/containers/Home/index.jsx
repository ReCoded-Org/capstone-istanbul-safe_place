import React from "react";
import SeekHelp from "../../components/SeekHelp";
import Footer from "../../components/Footer";
import ViolenceTest from "../../components/ViolenceTest";
import GenderViolenceMain from "../../components/GenderViolenceMain";
import BlogsCarouselHome from "../../components/BlogsCarouselHome";

const Home = () => (
  <div>
    <GenderViolenceMain />
    <ViolenceTest />
    <SeekHelp />
    <BlogsCarouselHome />
    <Footer />
  </div>
);

export default Home;
