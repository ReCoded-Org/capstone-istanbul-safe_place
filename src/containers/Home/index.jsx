import React from "react";
import SeekHelp from "../../components/SeekHelp";
import Footer from "../../components/Footer";
import MainNavbar from "../../components/Navbar";
import ViolenceTest from "../../components/ViolenceTest";
import GenderViolenceMain from "../../components/GenderViolenceMain";
import LeaveMessage from "../../components/LeaveMessage";

const Home = () => {
  return (
    <div>
      <MainNavbar />
      <GenderViolenceMain />
      <ViolenceTest />
      <SeekHelp />
      <LeaveMessage />
      <Footer />
    </div>
  );
};
export default Home;
