import React from "react";
import ImageSlider from "./ImageSlider";
import { SlideData1 } from "./SlideData1";
import UnderConstraction from "./UnderConstraction";
import SomeWords from "./SomeWords";
import Logos from "./Logos";

function Home() {
  return (
    <>
      <ImageSlider slides={SlideData1} />
      <SomeWords />
      <Logos />
    </>
  );
}

export default Home;
