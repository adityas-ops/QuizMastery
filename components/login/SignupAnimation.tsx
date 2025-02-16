"use client";
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

function SignupAnimation() {
  return (
     <Player
         src="/assets/login/singup.json"
         autoplay
         speed={1.5}
         loop
         className=" w-screen object-contain h-screen  sm:h-full scale-[3] sm:scale-[1]"
       />
  )
}

export default SignupAnimation