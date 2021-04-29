import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

function Map() {
  const [viewport, setViewport] = useState({
    width: 450,
    height: 450,
    latitude: 36.739344,
    longitude: 24.4558338,
    zoom: 10,
  });

  const [click, setClick] = useState(false);
  const handleViewport = (nextViewport) => {
    setViewport(nextViewport);
    setClick(false);
  };
  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN }
        mapStyle="mapbox://styles/gstam77/cko1547mt0jbf18lezb7g1d0b"
        onViewportChange={handleViewport}
      >
        <Marker
          latitude={36.73965625127617}
          longitude={24.435973933273597}
          offsetTop={(-viewport.zoom * 6) / 2}
          offsetLeft={(-viewport.zoom * 5) / 2}
        >
          <div>
            <button className="marker-btn" onClick={() => setClick(!click)}>
              <img src="./images/map-sign.png" width={viewport.zoom * 4} />
              <img
                src="./images/πινακιδα.jpg"
                width={viewport.zoom * 5}
                style={{ borderRadius: "5px" }}
              />
            </button>
          </div>
        </Marker>
        {click ? (
          <div className="marker-pop">
            <p>οπτικό κατάστημα </p>
            <h2>Ocellus</h2>
            <img src="./images/Ocellus1.jpg" width="200" />
          </div>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

export default Map;
