import React, { useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      img: "https://i.ibb.co/d43ZSqP/Demo-1-Slider-Anim-Img-1.jpg",
      title: "Affordable Price For Car Servicing",
      des: "There are many variations of passages of  available, but the majority have suffered alteration in some form.",
    },
    {
      img: "https://i.ibb.co/yVpRbq3/images-q-tbn-ANd9-Gc-TXy-Roo-ZQRc-ZPUdz-Il-MMa-ZMwdob-Il-Z9dshyh-FRSAyuh-Ug-s.jpg",
      title: "Escape 2",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
    },
    {
      img: "https://i.ibb.co/xg3mR6b/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpg",
      title: "Escape 3",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
    },
    {
      img: "https://i.ibb.co/rvtLYSV/image.jpg",
      title: "Escape 4",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
    },
    {
      img: "https://i.ibb.co/x8820n1/article-7866255-foods-you-should-eat-every-week-to-lose-weight-04-d58e9c481bce4a29b47295baade4072d.jpg",
      title: "Escape 5",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
    },
  ];
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliders.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );
  const isSmallScreen = window.innerWidth <= 768;
  return (
    <div
      className="w-full h-60 sm:h-96 md:h-[540px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear z-50 overflow-hidden rounded-lg"
      style={{
        backgroundImage: `url(${
          currentSlider === 0
            ? sliders[sliders.length - 1].img
            : sliders[currentSlider - 1].img
        })`,
      }}
    >
      {/* arrow */}
      <div className="absolute bottom-1/4 flex gap-3 z-50 px-5">
        {/* arrow left */}
        <button
          onClick={prevSlider}
          className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="w-4 h-4 md:w-6 md:h-6 icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
        {/* arrow right */}
        <button
          onClick={nextSlider}
          className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="w-4 h-4 md:w-6 md:h-6 icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            transform="rotate(180)"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
      </div>
      {/* text container here */}
      <div className="w-1/3 flex flex-col justify-center pl-16 left-0 absolute drop-shadow-lg text-white rounded-lg h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <h1 className="lg:text-5xl lg:font-semibold font-barlow mb-3 lg:mb-6">
          Explore our delicious food
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg lg:font-semibold">
          At Ruchi Bangla, we offer a wide range of mouth-watering dishes
          prepared with the freshest ingredients and seasoned with love. From
          traditional Bengali delicacies to modern fusion cuisine, there's
          something for everyone to enjoy. Come and discover the culinary
          delights that await you!
        </p>
        <div className="flex gap-6 mt-3 lg:mt-8">
          <Link to='/allFoods'><button className="btn bg-[#AD1A19] border-[#AD1A19] hover:bg-[#AD1A19CC] text-white font-semibold">
           See All Foods
          </button></Link>
        </div>
      </div>
      {/* slider container */}
      <div className="w-1/2 ml-auto overflow-hidden  absolute -right-5 lg:-right-16 z-50 px-4 py-10">
        <div
          className="ease-linear duration-300 flex gap-4 items-center"
          style={{
            transform: `translateX(-${
              currentSlider * (isSmallScreen ? 98 : 200)
            }px)`,
          }}
        >
          {/* sliders */}
          {sliders.map((slide, inx) => (
            <img
              key={inx}
              src={slide.img}
              className={`h-[180px] sm:h-[200px] lg:h-[320px] min-w-[90px] lg:min-w-[184px] w-full ${
                currentSlider - 1 === inx ? "scale-0" : "scale-100 delay-500"
              } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50 w-full`}
              alt={slide.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
