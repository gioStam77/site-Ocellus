import React, { useState } from "react";

import { SlideData1 } from "./SlideData1";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    // <section className="slider">
    //   <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
    //   <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
    //   {SlideData.map((slide, index) => {
    //     return (
    //       <ul
    //         className={index === current ? "slide active" : "slide"}
    //         key={index}
    //       >
    //         {index === current && <li className="image">{slide.img}</li>}
    //       </ul>
    //     );
    //   })}
    // </section>
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${SlideData1[current].img})` }}
      >
        <div className="left">
          <FaArrowAltCircleLeft onClick={prevSlide} />
        </div>
        <div className="center"></div>
        <div className="right">
          <FaArrowAltCircleRight onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
