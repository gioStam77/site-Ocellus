import React from "react";
import ImageSlider from "./ImageSlider";
import { SlideData1 } from "./SlideData1";
import UnderConstraction from "./UnderConstraction";

function Home() {
  return (
    <>
      <ImageSlider slides={SlideData1} />

      <UnderConstraction title="προσεχώς προσφορές" />
    </>
  );
}

export default Home;
