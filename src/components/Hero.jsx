import React from 'react';
import heroPng from '../assets/hero-left-img.bmp';
import { SliderData } from '../assets/SliderData';
import Slider from './Slider';
function Hero() {
  return (
    <div className="hero-top-container h-2/5  px-4 flex gap-4 w-full">
      <div className="hero-top-left bg-[#C9FACDff] w-4/6  rounded-xl text-left p-6 flex items-center">
        <div className="hero-left-text ">
          <h2 className="welcome text-2xl font-bold">Welcome back,</h2>
          <h2 className="welcome-admin font-bold text-2xl">{`Sir!`}</h2>
          <p className="para  my-2 p-1 ">
            Hi it's me Gaurav ! I tried to make as perfect as possible with in
            given time. I have enjoyed building this project it was a good
            experience🙏
          </p>
          <button
            className="p-1 rounded-md bg-green-400 px-2
           text-white"
          >
            Go Now
          </button>
        </div>
        <img
          className="h-2/3 w-1/3 object-contain items-center"
          src={heroPng}
          alt="img"
        />
        <div className="hero-left-img"></div>
      </div>
      <div className="hero-top-right shadow-2xl  rounded-xl  flex flex-col justify-between w-1/3">
        <div className="hero-right-img ">
          <Slider slides={SliderData} />
        </div>
        <div className="hero-left-text z-10 p-2">
          <ul>
            <li className="text-xs ">FEATURED APP</li>
            <h5 className=" text-base font-bold">Disney Zombies 2</h5>
            <li className="text-xs ">
              FEATUREDBelieving These 7 Myths About Event Keeps...
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
