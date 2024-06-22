import React from "react";
import CarPng from "../../assets/image2.png";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300 mb-24"
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div className="mb-[16px]">
            <img
              src={CarPng}
              alt=""
              className="p-6 sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1 className="text-3xl sm:text-4xl font-bold font-serif">
                About us
              </h1>
              <p className="leading-8 tracking-wide">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, magnam! Tenetur odio quo et maxime?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                tempora.
              </p>
              <button className="button-outline">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
