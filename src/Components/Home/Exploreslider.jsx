import React from "react";
import promotion from "../Home/images/promotion.png";
import everydayvalue from "../Home/images/everydayvalue.png";
import alacart from "../Home/images/alacart.png";
import signature from "../Home/images/signature.png";
import sharing from "../Home/images/sharing.png";
import snack from "../Home/images/snacks.png";
import midnight from "../Home/images/midnight.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Exploreslider = () => {
  const explore = [
    {
      image: promotion,
      name: "Promotion",
      border: "",
    },
    {
      image: everydayvalue,
      name: "Everyday Value",
      border: "",
    },
    {
      image: alacart,
      name: "Ala-Carte-&-Combos",
      border: "",
    },
    {
      image: signature,
      name: "Signature-Boxes",
      border: "",
    },
    {
      image: sharing,
      name: "Sharing",
      border: "",
    },
    {
      image: snack,
      name: "Snacks-&-Beverages",
      border: "",
    },
    {
      image: midnight,
      name: "Midnight (Start at 12am)",
      border: "",
    },
  ];

  //Slider
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-[80%] mx-auto mt-8 ">
        <div className="">
          <h2 className="uppercase text-2xl font-bold">Explore Menu</h2>
          <p className="w-[100px] h-[5px] bg-red-500 "></p>
        </div>
        <Slider {...settings} className="mt-8">
          {explore.map((box, idx) => {
            return (
              <div key={idx} className="px-2 py-8 max-lg:py-4 ">
                {" "}
                {/* gap maintain karne ke liye */}
                <div className="flex flex-col justify-center items-center w-[180px] h-[180px] bg-[#1c1816] rounded-t-[50%] rounded-bl-[50%] relative hover:cursor-pointer hover:translate-y-[-20px] duration-[1s] mx-auto ">
                  <img
                    src={box.image}
                    alt=""
                    className="w-40  absolute top-[-10px] "
                  />
                  <h2 className="text-[white] text-[14px] font-bold mb-1 relative top-[50px]">
                    {box.name}
                  </h2>
                  <p className="w-[50px] h-[5px] bg-[#ea002a] relative top-[50px]"></p>
                  <p className="h-[20px] w-[20px] rounded-full bg-black absolute right-[5px] bottom-[4px]"></p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Exploreslider;
