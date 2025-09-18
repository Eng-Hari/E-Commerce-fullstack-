

import React from "react";
import Slider from "react-slick";
import { assets } from "../assets/assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css"; // Tailwind & custom styles

const heroData = [
  {
    title: "Latest Arrivals",
    subtitle: "OUR BESTSELLERS",
    img: assets.hero_img1,
  },
  {
    title: "Summer Collection",
    subtitle: "HOT PICKS",
    img: assets.hero_img2,
  },
  {
    title: "Winter Essentials",
    subtitle: "TRENDING NOW",
    img: assets.hero_img3,
  },
  {
    title: "The Bridal Edit",
    subtitle: "GRACEFUL & ELEGANT",
    img: assets.hero_img4,
  },
  {
    title: "Night Glam",
    subtitle: "DRESS TO IMPRESS",
    img: assets.hero_img5,
  },
  {
    title: "Celebration Mode",
    subtitle: "TRADITIONAL FLAIR",
    img: assets.hero_img6,
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {heroData.map((item, index) => (
          <div key={index} className="h-[600px] sm:h-[700px] lg:h-[800px]">
            <div className="flex flex-col sm:flex-row border border-gray-300 shadow-sm rounded-lg overflow-hidden h-full">
              
              {/* Left Side */}
              <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
                <div className="text-[#414141] px-4 sm:px-8 fade-in">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                    <div className="w-10 h-[1px] bg-gray-400" />
                  </div>

                  <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl leading-tight mb-3">
                    {item.title}
                  </h1>

                  <div className="flex items-center gap-2">
                    <div className="w-10 h-[1px] bg-gray-400" />
                    <p className="text-sm font-medium text-gray-600">
                      Shop the trend now
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="w-full sm:w-1/2 h-full">
                <img
                  src={item.img}
                  alt="Hero Slide"
                  className="w-full h-full object-cover object-top rounded-none sm:rounded-r-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
