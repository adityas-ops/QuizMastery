import SignupAnimation from "@/components/login/SignupAnimation";
import SignupForm from "@/components/login/SignupForm";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className=" bg-no-repeat relative overflow-hidden bg-center w-full h-full flex justify-center items-center">
      <SignupAnimation />
      <div className=" absolute overflow-y-scroll w-full h-full top-0 left-0 right-0 flex items-center justify-center bottom-0 bg-black/45">
        <div className=" w-full h-full sm:w-[40%] py-[30px] px-[15px] sm:px-[30px] sm:h-[95%]   rounded-lg">
          <p className=" text-4xl mt-[20%] sm:mt-0 font-semibold text-white text-center leading-[0.5]">
            Join QuizMastery Today!
          </p>
          <div className=" mt-[30px] w-full h-fit py-[25px] relative px-[20px] sm:px-[50px] bg-white/5 backdrop-blur-lg rounded-lg">
            <p className=" text-white text-center sm:text-base text-sm pb-1 ">
              Create an account to track your quiz journey.
            </p>
            <SignupForm />
            <Image
              src="/assets/login/signup.png"
              width={200}
              height={200}
              alt="signup"
              className=" sm:block hidden absolute top-[40px] -left-[140px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
