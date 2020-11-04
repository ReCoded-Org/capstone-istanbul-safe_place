import React from "react";
import phoneSvg from "./images/phone.svg";
import locationSvg from "./images/map-marker.svg";
import doctorImg from "./images/doctorImage.svg";
import { useTranslation } from "react-i18next";
import "./index.scss";

const SeekHelpSingleCard = ({ cardDetails }) => {
  const { t } = useTranslation();
  const imagesObj = {
    doctorImg: doctorImg,
  };

  return (
    <>
      <div className="carouselItem" key={cardDetails.name}>
        <div className="carouselHeaderAndImage">
          <div>
            <h3>{t(cardDetails.title)}</h3>
            <h4>{t(cardDetails.name)}</h4>
          </div>
          <div>
            <img src={imagesObj[cardDetails.portraitImg]} alt="Specialist" />
          </div>
        </div>
        <div>
          <div className="contactDetails">
            <div>
              <img src={phoneSvg} alt="Phone Icon" />
            </div>
            <div>
              <p>{t(cardDetails.phoneNumber)}</p>
            </div>
          </div>
          <div className="contactDetails">
            <div>
              <img src={locationSvg} alt="Location Icon" />
            </div>
            <div>
              <p>{t(cardDetails.address)}</p>
            </div>
          </div>
          <p>{t(cardDetails.moreInfo)}</p>
        </div>
      </div>
    </>
  );
};

export default SeekHelpSingleCard;
