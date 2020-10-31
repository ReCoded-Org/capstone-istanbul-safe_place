import React from "react";
import SeekHelp from "../../components/SeekHelp";
import Footer from "../../components/Footer";
import MainNavbar from "../../components/Navbar";
import ViolenceTest from "../../components/ViolenceTest";
import GenderViolenceMain from "../../components/GenderViolenceMain";
import Contact from "../../components/Contact";

const Home = () => {
  return (
    <div>
      <MainNavbar />
      <GenderViolenceMain />
      <ViolenceTest />
      <SeekHelp />
      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
