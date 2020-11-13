import React from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import gitHubIcon from "../../images/icons/githubLogo.svg";
import linkedInIcon from "../../images/icons/linkedInLogo.svg";
import defaultImg from "../../images/icons/defaultImg.svg";
import louisImg from "../../images/louisLiSmiling.jpeg";
import ammarImg from "../../images/ammarSammourSmiling.jpeg";
import jennetImg from "../../images/jennetHydyrovaSmiling.jpg";
import hibaImg from "../../images/hibaMachfejSmiling.png";
import jamilImg from "../../images/jamilBailonySmiling.png";
import mohammadImg from "../../images/mohammadJundiSmiling.jpg";
import "./index.scss";

const OurTeamCards = () => {
  const { t } = useTranslation();
  const membersInfoArr = [
    ...t("aboutUsPage.ourTeamInfo", { returnObjects: true }),
  ];
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
      <h4>{t("aboutUsPage.subHeader")}</h4>
      <Row className="justify-content-md-center">
        {membersInfoArr.map((member) => {
          return (
            <div className="singleMemberInfo" key={member.name}>
              <img
                src={memberImagesMap[member.portraitImg] || defaultImg}
                alt={member.name}
                className="portraitImg"
              />
              <div>
                {member.gitHubUrl && (
                  <a
                    href={member.gitHubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={gitHubIcon} alt="GitHub icon" />
                  </a>
                )}
                {member.linkedInUrl && (
                  <a
                    href={member.linkedInUrl}
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

export default OurTeamCards;
