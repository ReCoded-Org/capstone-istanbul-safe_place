import React from "react";
import SeekHelp from "../../components/SeekHelp";
import MainNavbar from "../../components/Navbar";
import ViolenceTest from "../../components/ViolenceTest";
import GenderViolenceMain from "../../components/GenderViolenceMain";
import BlogsCarouselHome from "../../components/BlogsCarouselHome";

const Home = () => (
  <div>
    <MainNavbar />
    <GenderViolenceMain />
    <ViolenceTest />
    <SeekHelp />
    <BlogsCarouselHome />
  </div>
);

export default Home;
