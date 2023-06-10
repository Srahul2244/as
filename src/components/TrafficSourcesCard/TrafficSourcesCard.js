import React from "react";

// images
import circle_green from "../../assest/circle_green (2).svg"
import circle from "../../assest/circle_green (1).svg"



const TrafficCardLeftSection = () => {
  return (
    <div className="bg-[#EDEDF6] rounded-[32px]">
      <h1 className="px-[33px] py-[30px] text-[#000000] text-[20px] tracking-[-0.02em]">
        Traffic Sources
      </h1>
      <div className="h-[0.8px] bg-[#C4C4C4] mx-[34px] "></div>

      <div className="flex gap-[24px]">
        <div>
          {/* middle section */}
          <div className="flex mx-[33px] my-[15px]  py-2 rounded-[12px]  bg-[#EFEFF8] ">
            <h5 className="text-[#A9A9A9] px-[35px]">sourse</h5>
            <h5 className="text-[#B2B2B3]">Traffic sourse,%</h5>
          </div>

          {/* bottom part */}
          <div className="flex px-[20px] ">
            <div className="flex items-center px-[60px]">
              <div className=" h-[12px] border-2 w-[18px] bg-[#4CD7F6] rounded-[4px] "></div>
            <h3 className="px-[20px] text-[12px]">Direct</h3>
            </div>
            <h3 className="py-[5px] text-[12px]">50</h3>
          </div>

          <div className="flex px-[20px]">
          <div className="flex items-center px-[60px]">
              <div className=" h-[12px] border-2 w-[18px] bg-[#E17CFD] rounded-[4px] "></div>
            <h3 className="px-[20px] text-[12px]">Search</h3>
            </div>
            <h3 className="py-[5px] text-[12px]">50</h3>
          </div>

        </div>
         <div className="my-[10px] mr-[65px]">
          <img className ="absolute box-border " src={circle_green} alt="circle_grren"/>
          <img className ="absolute box-border " src={circle} alt="circle_grren"/>
          <h6 className="relative top-[30px] left-[30px] text-[32px] text-[#000000]">50%</h6>
          <h6 className="relative top-[25px] left-[40px] text-[12px] text-[#9B9B9B]">Direct</h6>
          <div className="relative top-[36px] left-[55px] w-[4px] h-[4px] bg-white rounded-[100%]"></div>
          <div className="relative top-[-65px] left-[55px] w-[4px] h-[4px] bg-white rounded-[100%]"></div>
          
        </div>
      </div>
    </div>
  );
};

export default TrafficCardLeftSection;
