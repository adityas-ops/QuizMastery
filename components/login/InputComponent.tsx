"use client";
import React, { useState, useCallback } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

interface InputComponentProps {
  value: string;
  setValue: (value: string) => void;
  isPassword?: boolean;
  label: string;
}

function InputComponent({ value, setValue, isPassword, label }: InputComponentProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, [setValue]);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  return (
    <div className="relative border border-gray-300 rounded-lg w-full h-[45px] mt-2">
      <input
        placeholder={label}
        value={value}
        onChange={handleChange}
        type={isPassword && !showPassword ? "password" : "text"}
        className="w-full px-3 h-full rounded-lg focus:outline-none"
      />
      {isPassword && (
        <div className="absolute top-0 bottom-0 flex items-center right-2">
          <button
            onClick={togglePasswordVisibility}
            className="text-gray-400"
            type="button"
          >
            {showPassword ? <IoEye className="text-[20px]" /> : <IoMdEyeOff className="text-[20px]" />}
          </button>
        </div>
      )}
    </div>
  );
}

export default React.memo(InputComponent);