import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MusicCard from "./musicCard";
export const CommonsSlider = ({ props }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 810,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider className="p-5  flex  w-full " {...settings}>
      {props.map((state) => (
        <MusicCard
          musicName={state.musicName}
          authorPath={state.authorPath}
          image={state.imagePath}
        />
      ))}
    </Slider>
  );
};
