import React, { useEffect, useRef, useState } from "react";

import { SlideData1 } from "./SlideData1";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => nextSlide(), 2500);
    return () => {};
  }, [current]);
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
      <div className="carousel-dots">
        {SlideData1.map((_, idx) => {
          return (
            <div
              key={idx}
              className="carousel-dot"
              onClick={() => setCurrent(idx)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default ImageSlider;
