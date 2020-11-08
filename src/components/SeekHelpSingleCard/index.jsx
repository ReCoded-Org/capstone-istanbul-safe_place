import React from "react";
import phoneSvg from "../../images/icons/phone.svg";
import locationSvg from "../../images/icons/mapMarker.svg";
import doctorImg from "../../images/icons/doctorImage.svg";
import defaultImg from "../../images/icons/defaultImg.svg";
import "./index.scss";

const SeekHelpSingleCard = ({
  title,
  name,
  portraitImg,
  phoneNumber,
  address,
  moreInfo,
}) => {
  const imageMap = {
    doctorImg: doctorImg,
  };

  return (
    <>
      <div className="singleCard" key={name}>
        <div className="carouselHeaderAndImage">
          <div>
            <h3>{title}</h3>
            <h4>{name}</h4>
          </div>
          <div>
            <img src={imageMap[portraitImg] || defaultImg} alt="Specialist" />
          </div>
        </div>
        <div>
          <div className="contactDetails">
            <div>
              <img src={phoneSvg} alt="Phone icon" />
            </div>
            <div>
              <p>{phoneNumber}</p>
            </div>
          </div>
          <div className="contactDetails">
            <div>
              <img src={locationSvg} alt="Location icon" />
            </div>
            <div>
              <p>{address}</p>
            </div>
          </div>
          <p>{moreInfo}</p>
        </div>
      </div>
    </>
  );
};

export default SeekHelpSingleCard;
