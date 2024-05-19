import React from "react";
import List from "./List";
import Star from "../Assets/Images/Star 1.png";
import Star2 from "../Assets/Images/star2.png";
function Bottom() {
  return (
    <div className=" mx-6  mt-4">
      <div className=" lg:flex justify-between  ">
        <div className=" lg:w-2/3 md:w-full">
          <div className=" flex justify-between">
            <div className=" flex text-[12px]  items-center">
              <span>LATEST DISCUSSTIONS AS OF</span>
              <div className=" bg-[#B31942] mx-1 h-[12px] w-[17px]"></div>
              <span className=" font-semibold">MARCH 12 2024</span>
            </div>

            <div className=" bg-[#BEDFFF] px-3 py-1 rounded-lg inline-flex items-center">
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
              <span className=" mx-1 text-[12px] font-semibold ">
                ALL TOPICS
              </span>
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="#0A090E"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="border border-[#0A090E] px-4 py-2 rounded-3xl my-4 flex justify-between items-center">
            <input
              className="flex-grow bg-transparent outline-none"
              placeholder="Search topics"
              type="text"
              name=""
              id=""
            />
            <div className="h-8 cursor-pointer w-8 rounded-full flex justify-center items-center ml-2">
              <div className="bg-white h-5 w-5 rounded-full flex justify-center items-center">
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

          <div className=" ">
            <List />
          </div>
        </div>
        <div className="   sm:flex  lg:flex-col justify-around">
          <div className=" relative rounded-lg bg-[#FFEADE8C] w-[300px] h-[400px]">
            <div className=" text-[24px]   pb-2 italic font-semibold  text-center">
              <span>Top Contributor this week</span>
            </div>
            <div className=" flex justify-center relative">
              <div>
                <div>
                  <div className=" bg-[#B31942] absolute top-5 left-4 inline-flex  items-center rounded-2xl text-white px-3 py-2 ">
                    <svg
                      width="12"
                      height="12"
                      className=" mr-1"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_240)">
                        <path
                          d="M3.75488 9.90088C4.41563 10.282 5.18226 10.5 5.99982 10.5C8.4851 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 6.81756 1.71802 7.58419 2.0991 8.24494L2.10057 8.2475C2.13724 8.31107 2.15573 8.34313 2.1641 8.37343C2.172 8.402 2.17421 8.4277 2.17219 8.45728C2.17001 8.48906 2.1593 8.52201 2.13734 8.58789L1.75293 9.74113L1.75245 9.74264C1.67134 9.98596 1.63079 10.1076 1.65969 10.1887C1.6849 10.2594 1.74084 10.3152 1.81152 10.3404C1.89241 10.3692 2.01352 10.3288 2.25577 10.2481L2.25879 10.247L3.41202 9.86255C3.47769 9.84066 3.51107 9.82956 3.5428 9.82739C3.57238 9.82537 3.59789 9.82804 3.62646 9.83594C3.65684 9.84433 3.68892 9.86283 3.75282 9.89969L3.75488 9.90088Z"
                          stroke="white"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_240">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className=" uppercase  font-semibold  text-[10px]">
                      100+ Responses
                    </span>
                  </div>
                </div>
                <img src={Star} alt="star" />
                <div>
                  <div className=" bg-[#014751] absolute  bottom-9 right-7 inline-flex items-center rounded-2xl text-white px-3 py-2 ">
                    <svg
                      width="8"
                      height="7"
                      className=" mr-1"
                      viewBox="0 0 8 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.27373 2.13228C3.50836 1.44297 4.49072 1.44298 4.72536 2.13228C4.82782 2.43329 5.11141 2.6383 5.42939 2.6383H5.48882C6.19847 2.6383 6.48466 3.55313 5.90151 3.95755C5.63582 4.14181 5.525 4.48144 5.62919 4.78753C5.85773 5.45896 5.09912 6.03918 4.5163 5.63499L4.43672 5.57979C4.17379 5.39744 3.82529 5.39744 3.56235 5.57979L3.48277 5.63499C2.89996 6.03918 2.14135 5.45895 2.3699 4.78753C2.47409 4.48144 2.36327 4.14181 2.09757 3.95755C1.51443 3.55313 1.80061 2.6383 2.51027 2.6383H2.5697C2.88767 2.6383 3.17126 2.43329 3.27373 2.13228Z"
                        fill="#FFC919"
                      />
                    </svg>

                    <span className=" uppercase  font-semibold  text-[10px]">
                      4.2 possitive rating
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" text-center text-[20px] font-semibold my-3">
              Jishnu Ambadi
            </div>
            <div className=" h-[1px]  bg-[#E4C9BB]"></div>
            <div className=" flex flex-col justify-center w-[90%] mx-auto items-center text-center font-semibold">
              <p className="">
                You can be next one! Be a part of USA’s 1st CPT Program
                Directory!
              </p>
              <div className=" flex text-white  bg-custom-gradient  hover:bg-custom-gradient-rev cursor-pointer rounded-3xl mt-3 px-7  py-3">
                <button>Join Community & Ask </button>
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0C10 0 10.1065 6.16931 7.85745 8.6432C5.60849 11.1171 0 11 0 11C0 11 5.60849 10.8829 7.85745 13.3568C10.1065 15.8307 10 22 10 22C10 22 9.89351 15.8307 12.1425 13.3568C14.3915 10.8829 20 11 20 11C20 11 14.3915 11.1171 12.1425 8.6432C9.89351 6.16931 10 0 10 0Z"
                    fill="#EDFF6C"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className=" lg:mt-8 relative bg-custom-gradient  rounded-lg   w-[300px] h-[400px]">
            <div className=" flex justify-center">
              <div className="     ">
                <div className=" flex  flex-col justify-center items-center">
                  <div className=" h-[220px] bgim absolute w-[120px] rounded-[50%]   rotate-45 bg-[#E4E8EF]"></div>
                  <div
                    className=" h-[220px]   w-[120px] rounded-[50%]   -rotate-45     bg-gradient-to-b from-pink-400 to-red-500
"
                  ></div>

                  <div className=" absolute   top-8">
                    <div className=" flex justify-center">
                      <img src={Star2} className="  " alt="star2" />
                    </div>
                    <div className=" text-center text-white">
                      <span>E-BOOK</span>
                      <p>Charting Paths:Program Through a Student's Eyes</p>
                      <div className=" inline-flex px-3 py-1 rounded-2xl border-[#FFF9E3]  mt-3  cursor-pointer text-[#FFF9E3] justify-center items-center border">
                        <span>Get the guide</span>
                        <svg
                          width="22"
                          className=" pl-2"
                          height="12"
                          viewBox="0 0 22 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.7073 12V6.52282H0V5.47718H15.7073V0L22 6L15.7073 12Z"
                            fill="#FFF9E3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
