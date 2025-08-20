import React from "react";
import krunch from "../Home/images/krunch.png";

const BestSeller = () => {
  const seller = [
    {
      span: "",
      name: "Kruch Burger",
      price: "310",
      image: krunch,
    },
  ];

  return (
    <>
      <div className="w-[80%] mx-auto mt-8 ">
        <div className="">
          <h2 className="uppercase text-2xl font-bold">Best Seller</h2>
          <p className="w-[100px] h-[5px] bg-red-500 "></p>
        </div>
        {/* <Slider {...settings} className="mt-8"> */}
        <div className="">
          {seller.map((box, idx) => {
            return (
              <div key={idx} className="px-2 py-8 max-lg:py-4 ">
                <div className="  bg-[grey] w-[290px] h-[360px]">
                  <div className="flex justify-center gap-2">
                    <span className="w-[20px] h-[30px] bg-[red] ">
                      {box.span}{" "}
                    </span>
                    <span className="w-[20px] h-[30px] bg-[red] ">
                      {box.span}{" "}
                    </span>
                    <span className="w-[20px] h-[30px] bg-[red] ">
                      {box.span}{" "}
                    </span>
                  </div>
                  <div className="">
                    <h2 className="my-2 ml-2 text-[white] font-bold text-2xl">{box.name}</h2>
                  </div>
                  <div className="flex justify-end ">
                    <p className="bg-[red] text-[white] px-2 font-bold text-xl"><span className=" text-[14px]">Rs</span>{box.price} </p>
                  </div>
                  <div className="flex justify-center">
                    <img src={box.image} alt="" className="w-[100%] h-[200px] my-4" />
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
