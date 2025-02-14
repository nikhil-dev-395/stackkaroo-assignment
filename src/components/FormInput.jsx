import React from "react";

const FormInput = ({ title, type, placeholder }) => {
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="address" className="capitalize text-[#2B3674]">
          {title}
        </label>
        <input
          type={type}
          name={title}
          placeholder={placeholder}
          className="w-[306.88px] h-[36.81px] border border-[#E0E5F2] outline-none px-3 rounded-[10px] placeholder:text-[#A3AED0] mt-2"
        />
      </div>
    </>
  );
};

export default FormInput;
