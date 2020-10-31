import React from "react";
import SeekHelp from "../../components/SeekHelp";
import HelpNavbar from "../../components/HelpNavbar";
import Footer from "../../components/Footer";
import MainNavbar from "../../components/Navbar";
import ViolenceTest from "../../components/ViolenceTest";
import GenderViolenceMain from "../../components/GenderViolenceMain";

const Home = () => (
  <div>
    <HelpNavbar />
    <GenderViolenceMain />
    <ViolenceTest />
    <SeekHelp />
    <Footer />
  </div>
);

export default Home;
