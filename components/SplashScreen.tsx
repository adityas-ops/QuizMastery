"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`w-full h-screen bg-background overflow-hidden flex items-center justify-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full h-full flex-col justify-center items-center sm:flex hidden">
        <div className="transition-transform duration-1000 transform scale-100">
          <Image
            src="/assets/logo/brainup-logo.png"
            alt="BrainUp"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <h1 className="w-full text-center mt-4 font-extrabold text-4xl text-white">
          QuizMastery
        </h1>
        <h1 className="w-full text-center mt-2 font-extrabold text-2xl text-gray-300">
          Master Your Knowledge with Engaging Quizzes
        </h1>
      </div>

      <div className="sm:hidden flex w-full h-full flex-col justify-center items-center">
        <div className="transition-transform duration-1000 transform scale-100">
          <Image
            src="/assets/logo/brainup-logo.png"
            alt="BrainUp"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>
        <h1 className="w-full text-center mt-3 font-extrabold text-2xl text-white">
          QuizMastery
        </h1>
        <h1 className="w-full text-center mt-1 font-extrabold text-sm text-gray-300">
          Master Your Knowledge with Engaging Quizzes
        </h1>
      </div>
    </div>
  );
}

export default SplashScreen;