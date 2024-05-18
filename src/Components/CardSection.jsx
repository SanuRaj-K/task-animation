import React from "react";
import Cards from "./Cards";
import { nanoid } from "nanoid";

function CardSection() {
  const content = [
    "Eligibility",
    "F1 visa students",
    "Universities",
    "Addmission",
    "Companies",
    "Jobs",
  ];
  return (
    <div className=" bg-[#FFF9E3] py-28 ">
      <div className=" flex flex-col py-4 justify-center items-center">
        <span> TOPICS</span>
        <span className=" text-[36px] font-semibold italic font-serif">
          Most Searched Ones
        </span>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  place-items-center  gap-y-4  ">
        {content.map((item) => (
          <Cards content={item} key={nanoid()} />
        ))}
      </div>
      <div>
        <div className=" flex    justify-center items-center   mt-10">
          <span className=" text-[16px] font-semibold">
            Didn't find your topic?
          </span>{" "}
          <svg
            width="16"
            className=" mx-2"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 7.33268H10M4.74905 12.4668L3.73307 13.2796C3.17829 13.7234 2.90077 13.9454 2.66732 13.9457C2.46429 13.9459 2.2723 13.8536 2.14564 13.6949C2 13.5124 2 13.1573 2 12.4468V4.79948C2 4.05274 2 3.6791 2.14532 3.39388C2.27316 3.143 2.47698 2.93917 2.72786 2.81134C3.01308 2.66602 3.38673 2.66602 4.13346 2.66602H11.8668C12.6135 2.66602 12.9864 2.66602 13.2716 2.81134C13.5225 2.93917 13.727 3.143 13.8548 3.39388C14 3.67882 14 4.05201 14 4.79729V9.8684C14 10.6137 14 10.9863 13.8548 11.2713C13.727 11.5222 13.5229 11.7263 13.272 11.8542C12.9871 11.9993 12.614 11.9993 11.8687 11.9993H6.08138C5.80402 11.9993 5.66585 11.9993 5.5332 12.0266C5.41552 12.0507 5.30144 12.0905 5.19445 12.1452C5.07521 12.2061 4.96833 12.2916 4.75652 12.4611L4.74905 12.4668Z"
              stroke="#B31942"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className=" cursor-pointer italic">Start discussing</span>
        </div>
      </div>
    </div>
  );
}

export default CardSection;
