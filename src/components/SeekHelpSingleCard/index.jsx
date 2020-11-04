import React from "react";
import phoneSvg from "./images/phone.svg";
import locationSvg from "./images/map-marker.svg";
import doctorImg from "./images/doctorImage.svg";
import defaultImg from "./images/defaultImg.svg";
import { useTranslation } from "react-i18next";
import "./index.scss";

const SeekHelpSingleCard = ({
  title,
  name,
  portraitImg,
  phoneNumber,
  address,
  moreInfo,
}) => {
  const { t } = useTranslation();
  const translationImageMap = {
    doctorImg: doctorImg,
  };

  return (
    <>
      <div className="carouselItem" key={name}>
        <div className="carouselHeaderAndImage">
          <div>
            <h3>{t(title)}</h3>
            <h4>{t(name)}</h4>
          </div>
          <div>
            <img
              src={
                translationImageMap[portraitImg]
                  ? translationImageMap[portraitImg]
                  : defaultImg
              }
              alt="Specialist"
            />
          </div>
        </div>
        <div>
          <div className="contactDetails">
            <div>
              <img src={phoneSvg} alt="Phone Icon" />
            </div>
            <div>
              <p>{t(phoneNumber)}</p>
            </div>
          </div>
          <div className="contactDetails">
            <div>
              <img src={locationSvg} alt="Location Icon" />
            </div>
            <div>
              <p>{t(address)}</p>
            </div>
          </div>
          <p>{t(moreInfo)}</p>
        </div>
      </div>
    </>
  );
};

export default SeekHelpSingleCard;
