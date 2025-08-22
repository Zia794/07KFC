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
    },
    {
      image: everydayvalue,
      name: "Everyday Value",
    },
    {
      image: alacart,
      name: "Ala-Carte-&-Combos",
    },
    {
      image: signature,
      name: "Signature-Boxes",
    },
    {
      image: sharing,
      name: "Sharing",
    },
    {
      image: snack,
      name: "Snacks-&-Beverages",
    },
    {
      image: midnight,
      name: "Midnight (Start at 12am)",
    },
  ];
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
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};
  return (
    <>
      <div className="w-[80%] mx-auto mt-2">
        <div>
          <h2 className="uppercase text-2xl font-bold max-md:text-lg">Explore Menu</h2>
          <p className="w-[100px] h-[5px] bg-red-500 max-md:w-[80px] max-md:h-[3px]"></p>
        </div>
        <Slider {...settings} className="">
          {explore.map((box, idx) => (
            <div key={idx} className="px-2 py-8 max-md:py-4">
              <div
                className="flex flex-col justify-center items-center 
                  w-[180px] h-[180px]
                  bg-[#1c1816] 
                  rounded-t-[50%] rounded-bl-[50%] 
                  relative hover:cursor-pointer 
                  hover:-translate-y-[10px] 
                  duration-1000 mx-auto max-md:w-[100%] max-md:h-[60px]"
              >
                <img
                  src={box.image}
                  alt={box.name}
                  className="w-40 max-md:w-12 absolute top-[-10px] max-md:top-[-3px]"
                />
                <h2 className="text-white text-[14px] max-md:text-[6px] max-md:font-[200] font-bold mb-1 relative top-[50px] text-center max-md:top-[15px]">
                  {box.name}
                </h2>
                <p className="w-[50px] h-[5px] bg-[#ea002a] relative top-[50px] max-md:w-[20px] max-md:h-[3px] max-md:top-[15px]"></p>
                <p className="h-[20px] w-[20px] rounded-full bg-black absolute right-[5px] bottom-[4px] max-md:w-[10px] max-md:h-[10px] max-md:right-[1px] max-md:bottom-[0px]"></p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Exploreslider;
















// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import logo from "../images/logo.png";

// const Arena = () => {
//     const boxes = [
//     { image: logo, title: "Logo 1" },
//     { image: logo, title: "Logo 2" },
//     { image: logo, title: "Logo 3" },
//     { image: logo, title: "Logo 4" },
//     { image: logo, title: "Logo 1" },
//     { image: logo, title: "Logo 2" },
//     { image: logo, title: "Logo 3" },
//     { image: logo, title: "Logo 4" }
//   ];
  

//   return (
//     <div className="slider-container bg-black py-8">
//       <Slider {...settings} className="w-[80%] mx-auto" >
//          {boxes.map((box, idx) => (
//           <div key={idx} className="p-2 ">
//             <div className="flex flex-col justify-center items-center gap-2 w-[200px] h-[200px] bg-[gray] rounded mx-auto max-md:w-[100%] max-md:h-[100px]">
//               <img src={box.image} alt={box.title} className="w-32 max-md:w-12" />
//               <h1 className="text-2xl max-md:text-xs">{box.title}</h1>
//             </div>
//           </div>
//         ))}
        
//       </Slider>
//     </div>
//   );
// }

// export default Arena;





