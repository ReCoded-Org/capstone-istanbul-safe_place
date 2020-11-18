import React from "react";
import { Row, Accordion } from "react-bootstrap";
import ToggleButton from "./ToggleButton";

export default function ProfileSection({ children, eventKey, label }) {
  return (
    <Row className="section">
      <ToggleButton eventKey={eventKey}>{label}</ToggleButton>
      <div className="sectionContent">
        <Accordion.Collapse eventKey={eventKey}>{children}</Accordion.Collapse>
      </div>
    </Row>
  );
}
