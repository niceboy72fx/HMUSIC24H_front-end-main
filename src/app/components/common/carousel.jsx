import React from "react";
import Slider from "react-slick";
import "../../assets/css/components/carousel/carousel.css";

const contentStyle = {
  height: "200px",
  color: "#fff",
  lineHeight: "160px",
  padding: "37px",
};
export const Carousels = () => {
  const settings = {
    infinite: true,
    fade: true,
    cssEase: "linear",
    arrows: false,
    autoplaySpeed: 5700,
  };
  return (
    <Slider autoplay className="w-100" {...settings}>
      <div>
        <div style={contentStyle} className="rounded-2xl carousel backImage-1">
          <div className="carousel-title h-full flex flex-col w-fit ">
            <i className="title-banner text-5xl font-bold  pb-0">
              Nghe đa chiều , sống đa sắc
            </i>
            <p>cùng HMUSIC24H tận hưởng mọi giai điệu về cuộc sống </p>
          </div>
        </div>
      </div>
      <div>
        <div style={contentStyle} className="rounded-2xl  carousel backImage-2">
          <div className=" carousel-title h-full float float-right flex flex-col w-fit">
            <i className="title-banner text-4xl font-bold ">
              Music is what feelings sound like
            </i>
            <p>Tận hưởng âm nhạc không quảng cáo với HMUSIC24H</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};
