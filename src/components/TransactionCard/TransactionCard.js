import React from "react";

// images
import ques_mark from "../../assest/ques-mark.svg";

// css
import './transactionCard.css';

const TransactionCard = ({
  activeCard,
  visitors,
  totalvisitors,
  cardLabel,
  icon,
  id,
  handleCardClick,
}) => {
  const selectedCard =
    activeCard === id ? "active bg-[#4CD7F6] text-[#F6F6FB]" : "bg-[#F6F6FB] text-[#2B2F42]";

    console.log({ selectedCard})
  return (
    <div
      className={`card-container rounded-[32px] relative ${selectedCard}`}
      onClick={() => handleCardClick(id)}
    >
      {activeCard === id && <div className="circle_1 absolute"></div>}
      {activeCard === id && <div className="circle_2 absolute"></div>}

      <div className="flex px-[49px] py-[30px] justify-between ">
        <div className="text-[#7166F9]">
          <i className={icon}></i>
        </div>
        <h6 className=" text-xs;">{visitors}</h6>
      </div>

      {/* middle */}
      <h1 className="px-[16px] text-[32px] ">{totalvisitors}</h1>

      {/* bottom  */}
      <div className="flex px-[16px] justify-between">
        <h6 className="text-sm">{cardLabel}</h6>
        <img className="color-[#7166F9]" src={ques_mark} alt="ques_mark" />
      </div>
    </div>
  );
};

export default TransactionCard;
