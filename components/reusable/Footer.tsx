import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="px-[20px] w-full border-t-[1px] border-t-zinc-500 grid grid-cols-4 py-[20px]   mt-[20px]">
      <div className=" w-full flex items-center justify-start">
        <Link
          href="/"
          className="text-white hidden text-2xl font-bold justify-center w-full sm:flex items-center"
        >
          <Image
            src="/assets/logo/brainup-logo-apple.png"
            alt="BrainUp"
            width={40}
            height={40}
          />
          <p className="font-serif font-thin">BrainUp</p>
        </Link>
      </div>
      <div className="w-full flex items-center justify-start">
        <Link href="/About" className="text-white text-lg font-semibold underline hover:text-activeColor underline-offset-4">
            About Us
        </Link>
      </div>
      <div className="w-full flex items-center justify-start">
        <Link href="/Contact" className="text-white text-lg font-semibold underline hover:text-activeColor underline-offset-4">
            Contact
        </Link>
      </div>
      <div className="w-full flex items-center justify-start">
        <Link href="/FAQ" className="text-white text-lg font-semibold underline hover:text-activeColor underline-offset-4">
            FAQ
        </Link>
      </div>
      <div className=" w-full col-span-4 mt-[20px]">
        <p className="text-white text-sm font-semibold text-center">
          © 2025 QuizMastery. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
