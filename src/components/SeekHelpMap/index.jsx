import React from "react";
import GoogleMapReact from "google-map-react";
import locationData from "./locationData.json";
import markerImage from "./images/marker.svg";
import "./index.scss";

const DEFAULT_CENTER = {
  lat: 41.015137,
  lng: 28.97953,
};
const MAP_ZOOM = 13;

// Example code for markers is here https://developers.google.com/maps/documentation/javascript/infowindows

const SeekHelpMap = ({ coordinates }) => {
  const modelsMap = (map, maps) => {
    const dataArray = [];
    locationData.map((markerJson) => dataArray.push(markerJson));

    const attachMapPopUp = (marker, mapPopUp) => {
      const infoWindow = new maps.InfoWindow({
        content: mapPopUp,
      });
      marker.addListener("click", () => {
        infoWindow.open(marker.get("map"), marker);
      });
    };

    for (let i = 0; i < dataArray.length; i++) {
      const marker = new maps.Marker({
        position: { lat: dataArray[i].lat, lng: dataArray[i].lng },
        map,
        clickable: true,
        icon: markerImage,
      });
      attachMapPopUp(marker, dataArray[i].id);
    }
    return dataArray;
  };

  return (
    <div className="mapStyle">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: atob("QUl6YVN5RGFVUXJXOW1qT09aYndiNXIxbEQ4MDlUeDlmQzBDbUE0"),
        }}
        defaultCenter={DEFAULT_CENTER}
        defaultZoom={MAP_ZOOM}
        center={coordinates}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => modelsMap(map, maps)}
      />
    </div>
  );
};

export default SeekHelpMap;
