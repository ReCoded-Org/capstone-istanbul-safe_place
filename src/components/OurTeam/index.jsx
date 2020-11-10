import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import githubLogo from "../../images/icons/githubLogo.svg";
import linkedInLogo from "../../images/icons/linkedInLogo.svg";
import defaultImg from "../../images/icons/defaultImg.svg";
import louisImg from "./images/louisLiSmiling.jpeg";
import ammarImg from "./images/ammarSammourSmiling.jpeg";
import jennetImg from "./images/jennetHydyrovaSmiling.jpg";
import hibaImg from "./images/hibaMachfejSmiling.jpg";
import jamilImg from "./images/jamilBailonySmiling.png";
import mohammadImg from "./images/mohammadJundiSmiling.jpg";
import "./index.scss";

const OurTeam = () => {
  const { t } = useTranslation();

  const memberImage = {
    louisImg: louisImg,
    ammarImg: ammarImg,
    jennetImg: jennetImg,
    hibaImg: hibaImg,
    jamilImg: jamilImg,
    mohammadImg: mohammadImg,
  };

  return (
    <Container className="ourTeam">
      <h4>Our team</h4>
      {t("aboutPage.ourTeamMemberInfo", { returnObjects: true }).map(
        (member) => {
          return (
            <>
              <img src={memberImage.image || defaultImg} alt={member.name} />
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
