"use client";

import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const handleAnimationEnd = () => {
    onFinish();
  };

  const variants = {
    initial: { opacity: 0, scale: 0.1 },
    animate: { opacity: 1, scale: 1.5 },
    exit: { opacity: 0, scale: 0.1 },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="w-full h-screen bg-background overflow-hidden flex items-center justify-center"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 2 }}
        onAnimationComplete={() => handleAnimationEnd()}
      >
        <div className=" w-full h-full  flex-col justify-center items-center sm:flex hidden">
        <Image
          src="/assets/logo/brainup-logo.png"
          alt="BrainUp"
          width={300}
          height={300}
          className="object-contain "
        />
        <h1 className=" w-full text-center mt-4 font-extrabold text-4xl text-white">   
        QuizMastery
        </h1>
        <h1 className=" w-full text-center mt-2 font-extrabold text-2xl text-gray-300">
        Master Your Knowledge with Engaging Quizzes
        </h1>
        </div>
        <div className="sm:hidden flex w-full h-full flex-col justify-center items-center">
        <Image
          src="/assets/logo/brainup-logo.png"
          alt="BrainUp"
          width={250}
          height={250}
          className="object-contain"
        />
         <h1 className=" w-full text-center mt-3 font-extrabold text-2xl text-white">
        QuizMastery
         </h1>
         <h1 className=" w-full text-center mt-1 font-extrabold text-sm text-gray-300">
        Master Your Knowledge with Engaging Quizzes
        </h1>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SplashScreen;
