import React from "react";
import SeekHelp from "../../components/SeekHelp";
import ViolenceTest from "../../components/ViolenceTest";
import GenderViolenceMain from "../../components/GenderViolenceMain";
import LeaveMessage from "../../components/LeaveMessage";

const Home = () => {
  return (
    <div>
      <GenderViolenceMain />
      <ViolenceTest />
      <SeekHelp />
      <LeaveMessage />
    </div>
  );
};
export default Home;
