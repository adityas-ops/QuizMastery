"use client";
import Header from "@/components/reusable/Header";
import { FaRegCompass } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CategoryType } from "@/data/category";
import { IoCloseOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
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
          <div className="w-full grid grid-cols-1 sm:grid-cols-4 max-w-full sm:max-w-[85%] mx-auto gap-5  p-5">
            {data.map((item, index) => (
              <Card
                key={index}
                name={item.name}
                image={item.image}
                id={item.id}
                Router={Router}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface CardProps {
  name: string;
  image: string;
  id: number;
  Router: ReturnType<typeof useRouter>;
}

const Card = ({ name, image, id, Router }: CardProps) => {
  return (
    <div
      className=" w-full  h-[230px]"
      onClick={() => Router.push(`/quiz/${id}`)}
    >
      <CardContainer className="inter-var w-full h-full">
        <CardBody className="bg-gray-50  relative group/card h-full  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full  rounded-xl p-1 border  ">
          <CardItem
            translateZ="60"
            translateX="5"
            translateY="-5"
            className="w-full mt-0"
          >
            <Image
              src={image}
              height={180}
              width={1000}
              className=" h-[180px] min-w-[280px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            translateZ="20"
            translateX="0"
            translateY="2"
            className="text-black font-bold text-[20px] w-full text-center mt-1"
          >
            {name}
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default Main;
