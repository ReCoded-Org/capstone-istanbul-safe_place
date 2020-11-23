import React from "react";
import { useAccordionToggle, AccordionContext } from "react-bootstrap";
import i18n from "i18next";

function getArrowClass(isCurrentElementSelected) {
  if (i18n.language === "ar") {
    // if Arabic, make the margin from left
    return isCurrentElementSelected ? "arrow down-rtl" : "arrow left";
  }

  return isCurrentElementSelected ? "arrow down" : "arrow right";
}

export default function ToggleButton({ children, eventKey, callback }) {
  const currentEventKey = React.useContext(AccordionContext);
  const isCurrentEventKey = currentEventKey === eventKey;
  const [arrowClass, setArrowClass] = React.useState(
    getArrowClass(isCurrentEventKey)
  );

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  // if language changed, update the arrow direction
  i18n.on("languageChanged", () => {
    setArrowClass(getArrowClass(isCurrentEventKey));
  });

  // track the arrow direction
  React.useEffect(() => {
    setArrowClass(getArrowClass(isCurrentEventKey));
  }, [isCurrentEventKey]);

  return (
    <button type="button" onClick={decoratedOnClick} className="sectionTitle">
      <i className={arrowClass} />
      {children}
    </button>
  );
}
