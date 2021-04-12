import React from "react";
import ImageSlider from "./ImageSlider";
import { SlideData1 } from "./SlideData1";
import UnderConstraction from "./UnderConstraction";
import SomeWords from "./SomeWords";

function Home() {
  return (
    <>
      <ImageSlider slides={SlideData1} />
      <SomeWords />
      <div className="logo-container">
        {" "}
        <img
          src="./images/funkyBudda.png"
          height="70"
          style={{ margin: "1vw" }}
        />
        <img
          src="./images/gfFerre.png"
          height="50"
          style={{ margin: "1vw 1vw" }}
        />
        <img
          src="./images/hofman.png"
          height="120"
          style={{ margin: "1vw 1vw" }}
        />
        <img
          src="./images/invu.png"
          height="40"
          style={{ margin: "1vw 1vw" }}
        />
        <img
          src="./images/paulFrank 1.jpg"
          height="100"
          style={{ margin: "1vw 1vw" }}
        />
        <img
          src="./images/reebok.png"
          height="50"
          style={{ margin: "1vw 1vw" }}
        />
        <img
          src="./images/elGreco.png"
          height="50"
          style={{ margin: "1vw 1vw" }}
        />
        <img
          src="./images/annaRiska.png"
          height="50"
          style={{ margin: "1vw 1vw" }}
        />
        <img
          src="./images/3guys.png"
          height="60"
          style={{ margin: "1vw 1vw" }}
        />
        <img
          src="./images/pepe-jeans-logo.jpg"
          height="100"
          style={{ margin: "1vw 1vw" }}
        />
        <img
          src="./images/superDry.png"
          height="60"
          style={{ margin: "1vw 2vw" }}
        />
      </div>
    </>
  );
}

export default Home;
