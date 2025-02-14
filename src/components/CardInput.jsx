import React from "react";

const CardInput = ({ title, type, placeholder }) => {
  return (
    <>
      <div className="flex flex-col mb-4">
        <label htmlFor="address" className="capitalize text-[#2B3674]">
          {title}
        </label>
        <input
          type={type}
          name={title}
          placeholder={placeholder}
          className="md:w-[627.88px] w-[80vw] h-[36.81px] border border-[#E0E5F2] outline-none px-3 rounded-[10px] placeholder:text-[#A3AED0] mt-2"
        />
      </div>
    </>
  );
};

export default CardInput;
