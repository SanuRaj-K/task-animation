import React from "react";
import AvatharPic from "../Assets/Images/image 7.png";
import AvatharPic2 from "../Assets/Images/image 9.png";
import AvatharPic3 from "../Assets/Images/image 42.png";
import AvatharPic4 from "../Assets/Images/image 108.png";
import AvatharPic5 from "../Assets/Images/11 (1) 1.png";
import AvatharPic6 from "../Assets/Images/image 6.png";
import AvatharPic7 from "../Assets/Images/image 69.png";
import AvatharPic8 from "../Assets/Images/14 (1) 1.png";

function Avathar() {
  return (
    <div className="  ">
      <div className=" flex h-[350px]         mx-5 items-end relative ">
        <div className=" bg-[#FFF3EC] h-[180px] hover:bg-custom-gradient  w-[180px] rounded-full">
          <img src={AvatharPic4} alt="avatar" className=" cursor-pointer " />
        </div>
        <div className=" bg-[#6FDDFC] h-[180px] hover:bg-custom-gradient flex justify-end  w-[180px] rounded-full absolute  bottom-10 left-24">
          <img src={AvatharPic2} alt="avatar" className=" cursor-pointer " />
          <span className=" absolute top-24  text-white bg-[#014751] rounded-2xl rounded-bl-sm px-4    text-[12px] py-1">
            How?
          </span>
        </div>
        <div className=" absolute left-80 ">
          <div className=" bg-[#B190B6] h-[180px] hover:bg-custom-gradient w-[180px] rounded-full">
            <img src={AvatharPic} alt="avatar" className=" cursor-pointer " />
          </div>
          <div className=" bg-[#FBEEAC] h-[180px] hover:bg-custom-gradient mt-1 ml-20 w-[180px] rounded-full">
            <img src={AvatharPic5} alt="avatar" className=" cursor-pointer " />
            <span className=" absolute bottom-8 left-1       text-white bg-[#0987FF] rounded-2xl rounded-br-sm px-4    text-[12px] py-1">
              That's it! Sir.
            </span>
          </div>
        </div>
        <div className=" absolute lg:flex hidden   bottom-36 left-[740px]">
          <div className=" bg-[#BBAEF0] h-[180px] hover:bg-custom-gradient w-[180px] rounded-full">
            <img src={AvatharPic6} alt="avatar" className=" cursor-pointer " />
          </div>
          <div className=" bg-[#FCCC60]    left-36 top-16 absolute   h-[180px] hover:bg-custom-gradient w-[180px] rounded-full">
            <span className="  text-white   bg-[#6B6097] rounded-2xl rounded-bl-sm px-4    text-[12px] py-1">
              Hey Thanks
            </span>

            <img src={AvatharPic3} alt="avatar" className=" cursor-pointer " />
          </div>
        </div>
        <div className="   justify-end hidden 2xl:flex  w-full">
          <div className=" bg-[#defb96] absolute  bottom-36 right-36 h-[180px] hover:bg-custom-gradient w-[180px] rounded-full">
            <img src={AvatharPic7} alt="avatar" className=" cursor-pointer " />
          </div>
          <div className=" bg-[#93CAFF]  h-[180px] hover:bg-custom-gradient w-[180px] rounded-full">
            <img src={AvatharPic8} alt="avatar" className=" cursor-pointer " />
            <span className=" absolute bottom-10  left-[1220px]  text-white   bg-[#FF6A14] rounded-2xl rounded-br-sm px-4    text-[12px] py-1">
              That's Awesome
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Avathar;
