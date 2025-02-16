import Animation from "@/components/login/Animation";
import Form from "@/components/login/Form";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
function Page() {
  return (
    <div className=" bg-no-repeat relative overflow-hidden bg-center w-full h-full flex justify-center items-center">
      <Animation />
      <div className=" absolute overflow-y-scroll w-full h-full top-0 left-0 right-0 flex items-center justify-center bottom-0 bg-black/45">
        <div className=" w-full  sm:w-[60%] py-[30px] px-[30px] h-full sm:h-fit min-h-[70vh] backdrop-blur-sm   rounded-lg flex">
          <div className=" hidden sm:block sm:h-[450px]  w-[50%] h-full   pr-[40px]">
            <div className=" w-full relative h-full  flex flex-col px-[20px] items-center overflow-hidden  bg-gradient-to-b from-stone-800 to-stone-600  rounded-xl">
              <div className="h-[100px] w-full flex justify-start items-center">
                <Link
                  className=" w-[90px] hover:scale-[1.05] duration-300 font-bold bg-white rounded-md text-black text-center flex items-center justify-center h-[35px]"
                  href="/"
                >
                  <FaArrowLeftLong />
                  <p className="ml-1">Back</p>
                </Link>
              </div>
              <div className="w-full flex h-full  justify-end">
                <p className=" text-white font-extrabold  text-2xl  font-carme text-end">
                  Log in to access
                  <br />
                  and track your
                  <br />
                  progress
                </p>
              </div>

              <Image
                src="/assets/login/young.png"
                className=" object-contain absolute bottom-5 left-2 "
                width={200}
                height={300}
                alt="logo"
              />
              <Image
                src="/assets/logo/brainup-logo.png"
                className=" object-contain absolute bottom-5 right-8 rotate-45  "
                width={200}
                height={300}
                alt="logo"
              />
            </div>
          </div>
          <div className=" w-full  sm:w-[50%] h-full flex flex-col mt-[20%] sm:mt-0 justify-start  sm:justify-center">
            <Link
              className=" w-[90px] sm:hidden absolute top-5 left-5 hover:scale-[1.05] duration-300 font-bold bg-white rounded-md text-black text-center flex items-center justify-center h-[35px]"
              href="/"
            >
              <FaArrowLeftLong />
              <p className="ml-1">Back</p>
            </Link>
            <div>
              <h1 className=" text-4xl text-white font-bold font-carme text-center mt-5">
                Welcome Back
              </h1>
              <p className=" text-center text-gray-300 font-carme mt-1">
                Please login to your account
              </p>
            </div>
            <div className=" mt-[20px]">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
