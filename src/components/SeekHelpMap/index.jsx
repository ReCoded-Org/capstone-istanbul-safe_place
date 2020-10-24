import React from "react";
import GoogleMapReact from "google-map-react";
import "./index.scss";

const SeekHelpMap = () => {
  const DEFAULT_CENTER = {
    lat: 41.015137,
    lng: 28.97953,
  };
  const MAP_ZOOM = 13;

  return (
    <div className="mapStyle">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDaUQrW9mjOOZbwb5r1lD809Tx9fC0CmA4" }}
        defaultCenter={DEFAULT_CENTER}
        defaultZoom={MAP_ZOOM}
        yesIWantToUseGoogleMapApiInternals
      >
        {/* <AnyReactComponent lat={41.0256728} lng={28.97194} text="My Marker" /> */}
      </GoogleMapReact>
    </div>
  );
};

export default SeekHelpMap;
