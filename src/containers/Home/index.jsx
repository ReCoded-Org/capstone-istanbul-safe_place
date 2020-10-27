import React from "react";
import SeekHelp from "../../components/SeekHelp";
import HelpNavbar from "../../components/HelpNavbar";
import ViolenceTest from "../../components/ViolenceTest";
import GenderViolenceMain from "../../components/GenderViolenceMain";

const Home = () => (
  <div>
    <HelpNavbar />
    <GenderViolenceMain />
    <ViolenceTest />
    <SeekHelp />
  </div>
);

export default Home;
