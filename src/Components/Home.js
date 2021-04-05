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
      <UnderConstraction title="προσεχώς προσφορές" />
    </>
  );
}

export default Home;
