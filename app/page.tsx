"use client";
// import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import FeatureCard from "@/components/landingPage/FeatureCard";
import Footer from "@/components/reusable/Footer";
import Header from "@/components/reusable/Header";
import { Boxes } from "@/components/ui/background-boxes";

const features = [
  {
    title: "Diverse Topics",
    desc: "Explore a wide range of topics from science to arts, each designed to expand your knowledge and keepyou engaged.",
    image: "/assets/landing-page/diversity.png",
  },
  {
    title: "Progress Tracking",
    desc: "Monitor your learning progress with detailed analytics and reports to help you stay on track with your goals",
    image: "/assets/landing-page/progress.png",
  },
  {
    title: "Leaderboard",
    desc: "Compete with others and climb the leaderboard by excelling in your learning journey and earning badges.",
    image: "/assets/landing-page/leaderboard.png",
  },
];

const benefits = [
  {
    title: "Fun Learning",
    desc: "Experience a new way of learning that's both enjoyable and effective. QuizMastery offers interactive sessions that make education fun and engaging.",
    image: "/assets/landing-page/fun.png",
  },
  {
    title: "Self Assessment",
    desc: "Track your progress and identify areas of improvement with our comprehensive self-assessment tools. Stay motivated and focused on your learning journey.",
    image: "/assets/landing-page/self.png",
  },
  {
    title: "Skill Sharpening",
    desc: "Enhance your skills with targeted exercises and challenges designed to push your limits and expand your knowledge.",
    image: "/assets/landing-page/skill.png",
  },
];

function Home() {
  const contentRef = useRef<HTMLDivElement>(null); // Ref for the scrollable container
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (contentRef.current) {
      const scrollTop = contentRef.current.scrollTop;
      setIsScrolled(scrollTop > 400);
    }
  };

  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const ref = contentRef.current;

    if (ref) {
      ref.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (ref) {
        ref.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <div
        ref={contentRef}
        className="w-full h-screen overflow-auto pb-[150px]  sm:pb-[50px]  bg-secondaryBackground"
      >
        {/* Hero Section */}
        <div className="w-full overflow-hidden bg-[#161616] text-white h-[400px] sm:h-full relative flex justify-center items-center">
        <Boxes />
          <div
            className="sm:p-[60px] p-[20px] w-fit h-fit  sm:top-[17%] z-20 absolute bg-blend-darken bg-black/85 border-[1px] border-gray-400 backdrop-filter drop-shadow-2xl rounded-lg flex flex-col justify-center items-center"
          >
            <h1 className="sm:text-[64px] text-[24px] leading-[1.2] text-center font-sans font-extrabold">
              Challenge yourself and
              <br />
              level up your knowledge
            </h1>
            <Link
              className="sm:h-[50px] w-[150px] h-[40px] mt-4 sm:mt-10 sm:w-[250px] flex items-center justify-center text-[20px] font-semibold duration-500 rounded-md text-sm text-white bg-activeColor"
              href="/Quizzes"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* feature Section */}
        <div className=" pt-[20px] sm:pt-[70px] px-[10%] h-fit w-full grid grid-cols-1 sm:grid-cols-3 gap-[40px]">
          <div className=" w-full col-span-1 sm:col-span-3 flex items-center justify-center sm:py-[10px]">
            <p className="text-[40px] font-bold text-center text-white font-carme">
              Features
            </p>
          </div>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              title={feature.title}
              desc={feature.desc}
              image={feature.image}
            />
          ))}
          <div className="sm:col-span-3 col-span-1 flex justify-center items-center">
            <FeatureCard
              index={0}
              title="Interactive Design"
              desc="Enjoy an immersive learning experience with interactive elements that keep you engaged and make learning fun."
              image="/assets/landing-page/design.png"
            />
          </div>
        </div>
        {/* benefits */}
        <div className=" pt-[20px] px-[10%] h-fit w-full grid grid-cols-1 sm:grid-cols-3 gap-[40px]">
          <div className=" w-full col-span-1 sm:col-span-3 flex items-center justify-center py-[10px]">
            <p className="text-[40px] font-bold text-center text-white font-carme">
              Benefits
            </p>
          </div>
          {benefits.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              title={feature.title}
              desc={feature.desc}
              image={feature.image}
            />
          ))}
        </div>
        <Footer />

        {/* Scroll to Top Button */}
        <div
          onClick={scrollToTop}
          className="fixed bottom-20 sm:bottom-6 animate-bounce right-6 w-[40px] h-[40px] flex items-center justify-center bg-activeColor text-white rounded-full cursor-pointer shadow-md transition-transform duration-300 hover:scale-110"
        >
          {isScrolled ? <FaArrowUp size={20} /> : <FaArrowDown size={20} />}
        </div>
      </div>
    </>
  );
}

export default Home;
