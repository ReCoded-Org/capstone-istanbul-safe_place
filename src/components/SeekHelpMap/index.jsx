import React from "react";
import GoogleMapReact from "google-map-react";
import locationData from "./locationData.json";
import markerImage from "./images/marker.svg";
import "./index.scss";

const SeekHelpMap = () => {
  const DEFAULT_CENTER = {
    lat: 41.015137,
    lng: 28.97953,
  };
  const MAP_ZOOM = 13;

  const ModelsMap = (map, maps) => {
    const dataArray = [];
    locationData.map((markerJson) => dataArray.push(markerJson));

    const attachSecretMessage = (marker, secretMessage) => {
      const infowindow = new maps.InfoWindow({
        content: secretMessage,
      });
      marker.addListener("click", () => {
        infowindow.open(marker.get("map"), marker);
      });
      console.log(marker);
    };

    for (let i = 0; i < dataArray.length; i++) {
      const marker = new maps.Marker({
        position: { lat: dataArray[i].lat, lng: dataArray[i].lng },
        map,
        clickable: true,
        icon: markerImage,
      });
      attachSecretMessage(marker, dataArray[i].id);
    }
    return dataArray;
  };

  return (
    <div className="mapStyle">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDaUQrW9mjOOZbwb5r1lD809Tx9fC0CmA4" }}
        defaultCenter={DEFAULT_CENTER}
        defaultZoom={MAP_ZOOM}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => ModelsMap(map, maps)}
      />
    </div>
  );
};

export default SeekHelpMap;
