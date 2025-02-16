"use client";
import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

interface InputComponentProps {
  value: string;
  setValue: (value: string) => void;
  isPassword?: boolean;
  label: string;
}

function InputComponent({
  value,
  setValue,
  isPassword,
  label,
}: InputComponentProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      {isPassword ? (
        <>
          <div className="border relative border-gray-300 rounded-lg w-full h-[45px]  mt-2 focus:outline-none focus:ring-2 focus:ring-activeColor focus:border-transparent">
            <input
              placeholder={label}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type={showPassword ? "text" : "password"}
              className="w-full px-3 h-full rounded-lg focus:outline-none"
            />
            <div className=" absolute placeholder:capitalize top-0 bottom-0 flex items-center right-0">
              <button
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className=" text-gray-400 mr-2"
              >
                {showPassword ? (
                  <p>
                    <IoEye className="text-[20px]" />
                  </p>
                ) : (
                  <p>
                    <IoMdEyeOff className="text-[20px]" />
                  </p>
                )}
              </button>
            </div>
          </div>
        </>
      ) : (
        <input
          placeholder={label}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type={"text"}
          className="border border-gray-300 rounded-lg w-full h-[45px] px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-activeColor focus:border-transparent"
        />
      )}
    </>
  );
}

export default InputComponent;
