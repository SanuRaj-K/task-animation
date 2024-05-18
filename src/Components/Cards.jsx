import React from "react";

function Cards({ content, color }) {
  return (
    <div>
      <div  className=" h-[150px] cursor-pointer hover:text-[26px] hover:animate-pulse hover:bg-fuchsia-500 w-[300px] bg-[#161226] flex justify-center text-[24px] font-serif rounded-md  items-center content-center text-white   ">
        <span>{content}</span>
      </div>
    </div>
  );      
}

export default Cards;
