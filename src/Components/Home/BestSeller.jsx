import React from "react";
import krunch from "../Home/images/krunch.png";
import combo from "../Home/images/combo.png";
import chicken from "../Home/images/chicken.png";
import bucket from "../Home/images/bucket.png";
import zinger from "../Home/images/zinger.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestSeller = () => {
  const seller = [
    {
      span: "",
      name: "Kruch Burger",
      price: "310",
      image: krunch,
    },
    {
      span: "",
      name: "Kruch Combo",
      price: "590",
      image: combo,
    },
    {
      span: "",
      name: "Chicken & Chipsr",
      price: "620",
      image: chicken,
    },
    {
      span: "",
      name: "Hot Wings Bucket",
      price: "670",
      image: bucket,
    },
    {
      span: "",
      name: "Mighty Zinger",
      price: "770",
      image: zinger,
    },
  ];

  return (
    <>
      <div className="w-[80%] mx-auto mt-3 pb-2">
        <div className="">
          <h2 className="uppercase text-2xl font-bold max-md:text-lg">Best Seller</h2>
          <p className="w-[100px] h-[5px] bg-red-500 max-md:w-[80px] max-md:h-[3px]"></p>
        </div>

        {/* <Slider {...settings} className="mt-8"> */}
        <div className="my-scroll flex justify-between  overflow-x-auto gap-8 max-md:gap-2 max-md:justify-around ">
          {seller.map((box, idx) => {
            return (
              <div key={idx} className=" pt-8 pb-1 ">
                <div className="  bg-[#1c1816] w-[290px] h-[360px] rounded max-md-w-[100%] max-md:h-[270px] max-md:rounded-2xl">
                  <div className="flex justify-center gap-2">
                    <span className="w-[15px] h-[27px] bg-[#ea002a] ">
                      {box.span}{" "}
                    </span>
                    <span className="w-[15px] h-[27px] bg-[#ea002a] ">
                      {box.span}{" "}
                    </span>
                    <span className="w-[15px] h-[27px] bg-[#ea002a] ">
                      {box.span}{" "}
                    </span>
                  </div>
                  <div className="">
                    <h2 className="my-2 ml-2 text-[white] font-bold text-2xl max-md:text-lg">
                      {box.name}
                    </h2>
                  </div>
                  <div className="flex justify-end ">
                    <p className="bg-[#ea002a] text-[white] px-2 font-bold text-xl max-md:text-lg">
                      <span className=" text-[14px]">Rs</span>
                      {box.price}{" "}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src={box.image}
                      alt=""
                      className="w-[100%] h-[200px] my-4 max-md:h-[150px]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* </Slider> */}
      </div>
    </>
  );
};

export default BestSeller;
