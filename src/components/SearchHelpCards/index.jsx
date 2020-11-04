import React from "react";
import "./index.scss";
import phoneSvg from "../../images/icons/phone.svg";
import locationSvg from "../../images/icons/map-marker.svg";
import doctorImg from "../../images/doctorImage.svg";
import { useTranslation, I18nextProvider } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";

const SearchHelpCards = () => {
  const { t } = useTranslation();
  const imagesObj = {
    doctorImg: doctorImg,
  };

  return (
    <I18nextProvider>
      <Container>
        <Row>
          <Col md={{ span: 7, offset: 5 }}>
            {t("home.seekHelpSection", { returnObjects: true }).map((el) => {
              return (
                <div className="carouselItem" key={el.name}>
                  <div className="carouselHeaderAndImage">
                    <div>
                      <h3>{t(el.title)}</h3>
                      <h4>{t(el.name)}</h4>
                    </div>
                    <div>
                      <img src={imagesObj[el.portraitImg]} alt="Specialist" />
                    </div>
                  </div>
                  <div>
                    <div className="contactDetails">
                      <div>
                        <img src={phoneSvg} alt="Phone Icon" />
                      </div>
                      <div>
                        <p>{t(el.phoneNumber)}</p>
                      </div>
                    </div>
                    <div className="contactDetails">
                      <div>
                        <img src={locationSvg} alt="Location Icon" />
                      </div>
                      <div>
                        <p>{t(el.address)}</p>
                      </div>
                    </div>
                    <p>{t(el.moreInfo)}</p>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </I18nextProvider>
  );
};

export default SearchHelpCards;
