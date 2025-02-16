"use client";
import Header from "@/components/reusable/Header";
import { FaRegCompass } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CategoryType } from "@/data/category";
import { IoCloseOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

interface MainProps {
  category: {
    id: number;
    name: string;
    image: string;
  }[];
}

function Main({ category }: MainProps) {
    const Router = useRouter();
  const [data, setData] = useState<CategoryType[]>(category);
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };


  useEffect(() => {
    if (search === "") {
      setData(category);
    } else {
      const result = category.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setData(result);
    }
  }, [search, category]);

  return (
    <div className="w-full h-screen overflow-hidden bg-secondaryBackground">
      <Header />
      <div className="pt-[60px] h-full">
        <div className="w-full h-[60px] bg-background">
          <div className="max-w-[95%] flex items-center justify-between sm:max-w-[85%] mx-auto w-full h-full">
            <div className="flex h-full items-center gap-x-2">
              <FaRegCompass className="sm:text-2xl text-[18px] text-white animate-spin" />
              <p className="sm:text-2xl text-[18px] font-extrabold text-white">
                Quizzes
              </p>
            </div>
            <div className="sm:w-[400px] w-[200px] relative">
              <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search for quizzes"
                className="bg-secondaryBackground border-[0.3px] border-gray-400 active:outline-none focus:outline-none focus:border-none w-full text-white px-4 py-2 rounded-md"
              />
              {search.length > 0 && (
                <button
                  onClick={() => {
                    setSearch("");
                  }}
                  className=" absolute top-[9px] right-4  text-white rounded-md"
                >
                  <IoCloseOutline className="text-[24px]" />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="bg-secondaryBackground w-full h-full overflow-y-scroll pb-[150px] sm:pb-[80px]">
          <div className="w-full grid grid-cols-1 sm:grid-cols-4 max-w-[95%] sm:max-w-[85%] mx-auto gap-5 p-5">
            {data.map((item, index) => (
              <div
                key={index}
                className="w-full h-[250px] bg-cardBackground rounded-md cursor-pointer"
                onClick={()=>{
                    Router.push(`/quiz/${item.id}`)
                }}
              >
                <div className="h-[180px] w-full  overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    layout="responsive"
                    width={100}
                    height={180}
                    loading="lazy"
                    className="rounded-t-md w-full h-full object-center object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="h-[70px] w-full flex justify-center items-center">
                  <p className="text-white font-bold text-[20px]">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
