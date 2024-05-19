import React from "react";
import Avathar from "./Avathar";
function Home() {
  return (
    <div>
      <div className=" mt-3">
        <span className=" text-gray-400">Home/Forum</span>
      </div>
      <div className="  ">
        <div className=" flex flex-col px-1 justify-center  items-center content-center">
          <span className=" ">FORUM</span>
          <h3 className=" text-[36px] font-medium py-4">Discuss & Evolve</h3>
          <p className=" text-gray-300 font-semibold text-center">
            Engage with fellow professionals: join the program forum discussion!
          </p>
          <div className=" border w-full    sm:w-[450px] px-4 py-2 rounded-3xl my-4 flex justify-between">
            <input
              className=" flex-grow outline-none "
              placeholder=" Search topics"
              type="text"
              name=""
              id=""
            />

            <div className=" bg-black h-8  cursor-pointer w-8 rounded-full flex justify-center items-center">
              <div className=" bg-white h-5 w-5  rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="15"
                  height="15"
                  viewBox="0 0 30 30"
                >
                  <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className=" flex flex-col  relative">
            <ul className=" uppercase flex    text-[14px] justify-center items-center">
              <li className=" bg-[#FFF2F6] px-3 py-1 rounded-xl mx-2">
                <svg
                  width="16"
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
              </li>
              <li className=" mr-6  cursor-pointer">Start Discussing</li>
              <li className=" h-3 w-3 bg-[#6B6097] rounded-full"></li>
              <li className=" bg-[#BEDFFF] px-3 py-1 rounded-xl mx-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.125 16.625H11.875M9.5 2.375C6.87665 2.375 4.75 4.50165 4.75 7.125C4.75 8.08648 5.03567 8.98124 5.52676 9.72903C6.28193 10.8789 6.65919 11.4535 6.7082 11.5394C7.14422 12.3033 7.06394 12.0339 7.11882 12.9117C7.12498 13.0104 7.125 13.1598 7.125 13.4583C7.125 13.8956 7.47944 14.25 7.91667 14.25L11.0833 14.25C11.5206 14.25 11.875 13.8956 11.875 13.4583C11.875 13.1598 11.875 13.0104 11.8812 12.9117C11.936 12.0339 11.8553 12.3033 12.2913 11.5394C12.3403 11.4535 12.7182 10.8789 13.4734 9.72902C13.9645 8.98123 14.2502 8.08648 14.2502 7.125C14.2502 4.50165 12.1234 2.375 9.5 2.375Z"
                    stroke="#0183FF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </li>
              <li className=" cursor-pointer">View Topics</li>
            </ul>
            
          </div>
        </div>
      </div>
      <div className=" my-36 hidden lg:block">
        <Avathar />
      </div>
    </div>
  );
}

export default Home;
