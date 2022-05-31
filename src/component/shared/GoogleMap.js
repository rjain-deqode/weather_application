import React, { useEffect, useState } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

function GoogleMap(props) {
  const [isBoolean, setIsBoolean] = useState(false);
  useEffect(() => {
    setIsBoolean(!isBoolean);
  }, [props.aLet, props.aLon, props]);
  console.log("props===", props.aLet);
  console.log("props===", props.aLon);
  return (
    <div>
      {" "}
      {isBoolean ? (
        <Map
          google={props.google}
          zoom={8}
          initialCenter={{
            lat: props.aLet,
            lng: props.aLon,
          }}
          onReady={props.fetchPlaces}
        >
          <Marker onClick={props.onMarkerClick} name={props.data.name} />
          <InfoWindow onClose={props.onInfoWindowClose}>
            <div>
              <h1>{props.data.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      ) : null}
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCSn-oTVSgL5rC3C3w5XvGTpx4c8YtKMb4",
})(GoogleMap);
