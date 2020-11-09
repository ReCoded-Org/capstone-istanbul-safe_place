import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import githubLogo from "../../images/icons/githubLogo.svg";
import linkedInLogo from "../../images/icons/linkedInLogo.svg";
import "./index.scss";

const OurTeam = () => {
  const { t } = useTranslation();
  return (
    <Container className="ourTeam">
      <h4>Our team</h4>
      {t("aboutPage.ourTeamMemberInfo", { returnObjects: true }).map(
        (member) => {
          return (
            <>
              <img src={member.memberImg} alt={member.name} />
              <a href={member.githubLink} target="_blank">
                <img src={githubLogo} alt="Github icon" />
              </a>
              <a href={member.linkedInLink} target="_blank">
                <img src={linkedInLogo} alt="LinkedIn icon" />
              </a>
              <h5>{member.name}</h5>
              <h6>{member.title}</h6>
            </>
          );
        }
      )}
    </Container>
  );
};

export default OurTeam;
