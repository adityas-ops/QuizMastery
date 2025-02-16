"use client";
import Image from "next/image";
import Link from "next/link";
import React, {  useState } from "react";
import { usePathname } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";
import { CiPlay1 } from "react-icons/ci";
import { MdOutlineLeaderboard } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { useUser } from "../../context/UserContext";
import { MdOutlineLogout } from "react-icons/md";
import InitialsAvatar from "react-initials-avatar";

import "react-initials-avatar/lib/ReactInitialsAvatar.css";



function Header() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Explore Quizes",
      link: "/Quizzes",
    },
    {
      name: "Leaderboard",
      link: "/Leaderboard",
    },
    {
      name: "Dashboard",
      link: "/Dashboard",
    },
  ];

  const mobileNavItems = [
    {
      name: "Home",
      link: "/",
      icon: <IoHomeOutline className="text-[20px]" />,
    },
    {
      name: "Explore Quizes",
      link: "/Quizzes",
      icon: <CiPlay1 className="text-[20px]" />,
    },
    {
      name: "Leaderboard",
      link: "/Leaderboard",
      icon: <MdOutlineLeaderboard className="text-[20px]" />,
    },
    {
      name: "Dashboard",
      link: "/Dashboard",
      icon: <RxDashboard className="text-[20px]" />,
    },
  ];
  const [showProfile, setShowProfile] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  const { user,clearUser } = useUser();

  
  

  return (
    <>
      <div className="w-full h-[60px] border-b-[0.2px] border-gray-500 bg-transparent fixed top-0 backdrop-blur-xl left-0 right-0 z-50 backdrop-filter drop-shadow-2xl py-[10px] px-[20px] flex justify-between items-center">
        {/* logo */}
        <Link
          href="/"
          className="text-white text-2xl font-bold flex items-center"
        >
          <Image
            src="/assets/logo/brainup-logo-apple.png"
            alt="BrainUp"
            width={40}
            height={40}
          />
          <p className="font-serif font-thin">QuizMastery</p>
        </Link>
        {/* nav */}
        <div className="sm:flex hidden items-center space-x-3 justify-center">
          {navItems.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link}
                className={`
                px-4 py-2 rounded-md text-sm font-semibold hover:bg-activeColor hover:text-white
                ${
                  pathName === item.link
                    ? "text-white bg-activeColor"
                    : "text-zinc-200 bg-transparent"
                }
              `}
              >
                <p>{item.name}</p>
              </Link>
            );
          })}
        </div>
        <div className="">
          {user ? (
            <div className="flex items-center space-x-3">
              <div
                onClick={() => {
                  setShowProfile(!showProfile);
                }}
                className="h-[50px] cursor-pointer w-[50px] relative border-[1px] border-white rounded-full"
              >
                <InitialsAvatar className="" name={user.name} />
                {showProfile && (
                  <div className="absolute z-50 bottom-[-145px] border-[0.5px] border-zinc-200 right-0 h-[140px] pt-2 w-[200px] px-[15px] bg-black rounded-md flex justify-center">
                    <div className="">
                      <p className="text-white font-bold py-2 border-b-[1px] border-gray-400">
                        {user.name}
                      </p>
                      <p className="text-white font-light py-2 border-b-[1px] border-gray-400">
                        {user.email.slice(0, 4)}**{user.email.slice(15)}
                      </p>
                      <button
                        onClick={() => {
                          clearUser();
                          localStorage.removeItem("token");
                        }}
                        className="flex flex-row items-center text-red-600 py-2 text-center justify-center w-full text-[18px]"
                      >
                        Logout
                        <MdOutlineLogout className="ml-1" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <button
              onClick={() => {
                router.push("/login");
              }}
              className="px-4 py-2 rounded-md text-sm font-semibold text-white bg-[#4053FF]"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
      <div className="sm:hidden border-t-[1px] border-gray-400 flex items-center z-50 rounded-t-md fixed bottom-[-10px] left-0 right-0 h-[80px] bg-background">
        <div className="w-full h-full grid grid-cols-4">
          {mobileNavItems.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link}
                className="flex justify-center items-center"
              >
                <div
                  className={`flex flex-col gap-y-[5px] items-center justify-center
                  ${
                    pathName === item.link
                      ? "text-activeColor"
                      : "text-gray-400"
                  }`}
                >
                  {item.icon}
                  <p className="text-xs">{item.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Header;