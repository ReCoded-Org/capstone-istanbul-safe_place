import React from 'react'
import {
  useAccordionToggle,
  AccordionContext,
} from "react-bootstrap";

function getArrowClass(isCurrentElementSelected) {
  return isCurrentElementSelected ? "arrow down" : "arrow right";
}

export default function ToggleButton({ children, eventKey, callback }) {
  const currentEventKey = React.useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button type="button" onClick={decoratedOnClick} className="sectionTitle">
      <i className={getArrowClass(isCurrentEventKey)} />
      {children}
    </button>
  );
}
