import React from "react";
import Pic from "../Assets/Icons/Ellipse 13.png";
import { nanoid } from "nanoid";
function List() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className=" mt-7">
      {arr.map((item) => (
        <>
          <div key={nanoid()} className="sm:flex  flex  flex-col sm:flex-row   justify-center   my-3 items-center  ">
            <div className=" ">
              <img
                className="h-[45px] w-[45px] cursor-pointer"
                src={Pic}
                alt="pic"
              />
            </div>

            <div className="flex ml-2 cursor-pointer flex-col">
              <span className="    ">What are the key principles of coding?</span>
              <span className="text-[#0A090E9C] my-2 sm:my-0 flex justify-center sm:justify-normal text-[12px]">
                Posted by Jishnu Ambadir
              </span>
            </div>
            <div className="flex  sm:ml-auto items-center space-x-4">
              <div className="flex cursor-pointer bg-[#F2EFFF] px-6 py-2 rounded-2xl items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3333 6.66732H16.6667C17.1269 6.66732 17.5 7.04041 17.5 7.50065V16.6673L14.7225 14.3598C14.5729 14.2355 14.384 14.1673 14.1895 14.1673H7.5C7.03976 14.1673 6.66667 13.7942 6.66667 13.334V10.834M13.3333 6.66732V4.16732C13.3333 3.70708 12.9602 3.33398 12.5 3.33398H3.33333C2.8731 3.33398 2.5 3.70708 2.5 4.16732V13.3342L5.27751 11.0263C5.42712 10.902 5.61603 10.834 5.81055 10.834H6.66667M13.3333 6.66732V10.0007C13.3333 10.4609 12.9602 10.834 12.5 10.834H6.66667"
                    stroke="#B31942"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="uppercase  text-[10px] font-semibold ml-1">
                  12 Responses
                </span>
              </div>
              <button className="bg-[#0A090E]   hover:bg-[#36333f] text-white text=[14px] px-8 py-2 rounded-md">
                View Answer
              </button>
            </div>
          </div>
          <div className=" bg-[#17132740] h-[1px] my-3 w-full "></div>
        </>
      ))}
      <div>
        <button className=" border my-7  border-[#0A090E] px-7  py-2 inline rounded-3xl">
          Load More
        </button>
      </div>
    </div>
  );
}

export default List;
