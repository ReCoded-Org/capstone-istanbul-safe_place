import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import githubIcon from "../../images/icons/githubLogo.svg";
import linkedInIcon from "../../images/icons/linkedInLogo.svg";
import defaultImg from "../../images/icons/defaultImg.svg";
import louisImg from "../../images/louisLiSmiling.jpeg";
import ammarImg from "../../images/ammarSammourSmiling.jpeg";
import jennetImg from "../../images/jennetHydyrovaSmiling.jpg";
import hibaImg from "../../images/hibaMachfejSmiling.png";
import jamilImg from "../../images/jamilBailonySmiling.png";
import mohammadImg from "../../images/mohammadJundiSmiling.jpg";
import "./index.scss";

const OurTeam = () => {
  const { t } = useTranslation();
  const memberImagesMap = {
    louisImg: louisImg,
    ammarImg: ammarImg,
    jennetImg: jennetImg,
    hibaImg: hibaImg,
    jamilImg: jamilImg,
    mohammadImg: mohammadImg,
  };

  return (
    <Container className="ourTeamInfo">
      <h4>{t("aboutPage.subHeader")}</h4>
      <Row className="justify-content-md-center">
        {t("aboutPage.ourTeamInfo", { returnObjects: true }).map((member) => {
          return (
            <div className="singleMemberInfo" key={member.name}>
              <img
                src={memberImagesMap[member.portraitImg] || defaultImg}
                alt={member.name}
                className="portraitImg"
              />
              <div>
                {member.githubLink && (
                  <a
                    href={member.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={githubIcon} alt="Github icon" />
                  </a>
                )}
                {member.linkedInLink && (
                  <a
                    href={member.linkedInLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedInIcon"
                  >
                    <img src={linkedInIcon} alt="LinkedIn icon" />
                  </a>
                )}
              </div>

              <h5>{member.name}</h5>
              <h6>{member.title}</h6>
            </div>
          );
        })}
      </Row>
    </Container>
  );
};

export default OurTeam;
