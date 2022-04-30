import React from 'react';
import heroPng from '../assets/hero-left-img.bmp';
function Hero() {
  return (
    <div className="hero-top-container h-1/3 m-2 flex gap-4 ">
      <div className="hero-top-left bg-[#C9FACDff] w-4/6 bg-primarygreen rounded-xl text-left p-6 flex">
        <div className="hero-left-text ">
          <h2 className="welcome ">Welcome back</h2>
          <h2 className="welcome-admin ">{`Minimal UI`}</h2>
          <p className="para ">
            I am sure of ! using lorem ipsum passage so i decided not to use
            lorem ipsum
          </p>
          <button
            className="p-1 rounded-md bg-green-400 px-2
           text-white"
          >
            Go Now
          </button>
        </div>
        <img className="h-24 w-34" src={heroPng} alt="img" />
        <div className="hero-left-img"></div>
      </div>
      <div className="hero-top-right bg-red-100 rounded-xl p-4 flex flex-col justify-between">
        <div className="hero-left-cta">icons</div>
        <div className="hero-left-text">
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
