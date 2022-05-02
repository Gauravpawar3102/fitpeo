import React, { useState } from 'react';
import { SliderData } from '../assets/SliderData';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides ? slides.length : slides;
  console.log(length);

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
    <div className="slider-container  w-full h-20  ">
      <div className="arrow-container flex justify-end">
        <MdArrowLeft className="left-arrow text-2xl" onClick={prevSlide} />
        <MdArrowRight className="right-arrow text-2xl " onClick={nextSlide} />
      </div>

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="img"
                className="image object-contain"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
