import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import main1 from "../Home/images/main1.jpg";
import main2 from "../Home/images/main2.jpg";
import main3 from "../Home/images/main3.jpg";

const Mainslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <>
     <div className="slider-container w-full overflow-hidden  ">
      <Slider {...settings}>
        <div className='w-full'>
          <img src={main1} alt="" className='w-full object-cover'/>
        </div>
        <div className='w-full'>
          <img src={main2} alt="" className='w-full object-cover'/>
        </div>
        <div className='w-full'>
          <img src={main3} alt="" className='w-full object-cover'/>
        </div>
      </Slider>
    </div>
    <div className="flex justify-center">
      <button className='uppercase text-md font-bold py-1 bg-[#ea002a] text-[white] w-[600px] rounded-lg max-lg:w-[80%] '>Reorder</button>
    </div>
    </>
  )
}

export default Mainslider