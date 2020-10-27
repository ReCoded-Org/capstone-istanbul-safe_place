import React from "react";
import LeaveMessageInfo from "../LeaveMessageInfo";
import LeaveMessageForm from "../LeaveMessageForm";
import './index.scss'

export default function LeaveMessage() {
  return (
    <div>
      <LeaveMessageInfo />
      <LeaveMessageForm />
    </div>
  );
}
