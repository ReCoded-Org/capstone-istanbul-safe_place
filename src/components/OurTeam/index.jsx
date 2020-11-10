import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import githubLogo from "../../images/icons/githubLogo.svg";
import linkedInLogo from "../../images/icons/linkedInLogo.svg";
import defaultImg from "../../images/icons/defaultImg.svg";
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
              <img src={member.image || defaultImg} alt={member.name} />
              {member.githubLink && (
                <a
                  href={member.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubLogo} alt="Github icon" />
                </a>
              )}
              {member.linkedInLink && (
                <a
                  href={member.linkedInLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedInLogo} alt="LinkedIn icon" />
                </a>
              )}

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
