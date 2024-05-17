import React from "react";
function Home() {
  return (
    <div>
      <div className=" mt-3">
        <span className=" text-gray-400">Home/Forum</span>
      </div>
      <div className="  ">
        <div className=" flex flex-col justify-center  items-center content-center">
          <span>FORUM</span>
          <h3 className=" text-[36px] font-medium py-4">Discuss & Evolve</h3>
          <p className=" text-gray-300 font-semibold">
            Engage with fellow professionals: join the program forum discussion!
          </p>
          <div className=" border  w-[450px] px-4 py-2 rounded-3xl my-4 flex justify-between">
            <input
              className=" "
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
            <ul className=" uppercase flex  text-[14px] justify-center items-center">
              <li className=" bg-[#FFF2F6] px-3 py-1 rounded-xl mx-2">
                <img
                  className="  "
                  width="24"
                  height="24"
                  src="https://img.icons8.com/plumpy/24/chat-message.png"
                  alt="chat-message"
                />
              </li>
              <li className=" mr-6 ">Start Discussing</li>
              <li className=" h-3 w-3 bg-[#6B6097] rounded-full"></li>
              <li className=" bg-[#BEDFFF] px-3 py-1 rounded-xl mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="17"
                  viewBox="0 0 48 48"
                >
                  <path d="M 24 4.015625 C 16.289774 4.0178592 10 10.286931 10 18 C 10 21.999465 11.691407 25.619495 14.388672 28.167969 C 14.705917 28.467557 14.938931 28.889561 15.046875 29.373047 L 17.513672 40.476562 C 17.969216 42.527257 19.805576 44 21.90625 44 L 26.09375 44 C 28.194629 44 30.030487 42.527102 30.486328 40.476562 L 32.955078 29.373047 L 32.955078 29.371094 C 33.062069 28.888989 33.293691 28.469343 33.611328 28.169922 L 33.611328 28.167969 L 33.613281 28.167969 C 36.309356 25.619613 38 21.999465 38 18 C 38 10.286931 31.710226 4.0178592 24 4.015625 z M 24 7.015625 C 30.093774 7.0173908 35 11.909069 35 18 C 35 21.156535 33.67466 23.980731 31.550781 25.988281 C 30.753594 26.740588 30.250209 27.709621 30.025391 28.722656 L 28.853516 34 L 19.146484 34 L 17.974609 28.720703 C 17.748553 27.708189 17.245974 26.740693 16.449219 25.988281 C 14.324484 23.980755 13 21.156535 13 18 C 13 11.909069 17.906226 7.0173908 24 7.015625 z M 19.814453 37 L 28.185547 37 L 27.558594 39.826172 C 27.404435 40.519634 26.804871 41 26.09375 41 L 21.90625 41 C 21.192924 41 20.595862 40.521478 20.441406 39.826172 L 19.814453 37 z"></path>
                </svg>
              </li>
              <li>View Topics</li>
            </ul>
            <div className=" flex justify-center ">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/long-arrow-down.png"
                alt="long-arrow-down"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
