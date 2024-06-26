import React, { useEffect, useState } from "react";
import menu from "../Assets/Icons/icons8-menu.svg";
function Header() {
  const [menuIcon, setMenuIcon] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" z-50 fixed top-0 bg-custom-gradient md:bg-none  sm:static w-full ">
      <div
        className={`flex-between   ${
          scrollPosition >= 50 ? "" : " "
        } cursor-pointer px-8 text-[14px]  `}
      >
        <div className=" p-4">
          <svg
            width="43"
            height="52"
            viewBox="0 0 43 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.6037 5.9339V26.1999L16.9849 23.5606C8.78423 18.8476 3.69415 10.0813 3.69415 0.561035H0.300781V23.7491C0.300781 31.29 4.63676 38.2653 11.5178 41.5644L21.6979 46.4659V26.1999L26.3167 28.8392C34.5173 33.5522 39.6074 42.3184 39.6074 51.8388H43.0008V28.6507C43.0008 21.1098 38.6648 14.1345 31.7838 10.8354L21.6037 5.9339Z"
              fill="black"
            />
          </svg>
        </div>
        <div className=" hidden  md:flex">
          <ul className=" flex-between    font-medium cursor-pointer    ">
            <li className="  hover:italic hover:font-extrabold   mr-3 my-1  ">
              Learn
            </li>
            <li className="  hover:italic hover:font-extrabold   mr-3 my-1">
              How do I participate?
            </li>
            <li className="  hover:italic  hover:font-extrabold  mr-3 my-1">
              Universities
            </li>
            <li className="  hover:italic hover:font-extrabold  mr-3 my-2">
              Corporate
            </li>
          </ul>
        </div>
        <div className="  sm:hidden" onClick={() => setMenuIcon(!menuIcon)}>
          {menuIcon ? (
            <div>
              <svg
                className=" "
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
              >
                <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
              </svg>
            </div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
            </svg>
          )}
        </div>

        <div className=" hidden sm:flex">
          <ul className=" flex-between  cursor-pointer">
            <li className=" relative">
              <div className=" ml-3">
                <div className=" bg-black h-10  w-10 rounded-full flex justify-center items-center">
                  <div className=" bg-white  h-7 w-7 rounded-full flex justify-center items-center">
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
            </li>
            <li className=" ">
              <div className=" bg-black hover:bg-gray-500 text-white px-4 py-2  rounded-3xl">
                Join Program
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {!menuIcon ? (
          <div>
            <div className=" px-4 z-50 bg-white  ">
              <ul className="   font-medium cursor-pointer    ">
                <li className=" hover:italic  mr-3  ">Learn</li>
                <li className="hover:italic mr-3">How do I participate?</li>
                <li className="hover:italic mr-3">Universities</li>
                <li className="hover:italic mr-3">Corporate</li>
              </ul>
            </div>{" "}
          </div>
        ) : null}
      </div>

      <div
        className={`w-full sm:w-full    fixed z-50 top-2 ${
          scrollPosition >= 50 ? " block md:block" : "hidden"
        }  `}
      >
        <div className={`lg:flex  hidden sm:block    justify-center `}>
          <div
            className={`flex-between backdrop-blur lg:w-1/2 px-4 py-2           rounded-2xl `}
          >
            <div>
              {" "}
              <svg
                width="40"
                className=" cursor-pointer "
                height="32"
                viewBox="0 0 43 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.6037 5.9339V26.1999L16.9849 23.5606C8.78423 18.8476 3.69415 10.0813 3.69415 0.561035H0.300781V23.7491C0.300781 31.29 4.63676 38.2653 11.5178 41.5644L21.6979 46.4659V26.1999L26.3167 28.8392C34.5173 33.5522 39.6074 42.3184 39.6074 51.8388H43.0008V28.6507C43.0008 21.1098 38.6648 14.1345 31.7838 10.8354L21.6037 5.9339Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className=" cursor-pointer flex items-center">
              <div className=" bg-black hover:bg-white hover:text-black  px-4 py-1 rounded-3xl text-white flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className=" mr-1"
                  width="16"
                  height="16"
                  viewBox="0 0 256 256"
                  style={{ fill: "#000000" }}
                >
                  <g
                    fill="#150606"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
                  </g>
                  <g
                    fill="#ffffff"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(9.84615,9.84615)">
                      <path d="M0,4v2h26v-2zM0,12v2h26v-2zM0,20v2h26v-2z"></path>
                    </g>
                  </g>
                </svg>
                <span className="  ">Menu</span>
              </div>
              <div className="gradient-border      p-[2px] ml-3">
                <div className="content px-3 hover:bg-custom-gradient  hover:text-white py-1">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/plumpy/24/chat-message.png"
                    alt="chat-message"
                  />
                  <span className="">Discuss CPT</span>
                </div>
              </div>
            </div>
            <div>
              <ul className=" flex  cursor-pointer">
                <li className=" relative">
                  <div className=" ml-3">
                    <div className=" bg-black h-10  w-10 rounded-full flex justify-center items-center">
                      <div className=" bg-white h-7 w-7 rounded-full flex justify-center items-center">
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
                </li>
                <li className=" ">
                  <div className="hover:bg-gray-500 bg-black text-white px-4 py-2  rounded-3xl">
                    Join Program
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default Header;
