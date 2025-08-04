"use client";
import React, { useState } from "react";
import Image from "next/image";
import SkillBadgeList from "../list-badge-skill";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex my-8 mx-4 md:mx-8 font-poppins flex-col items-center min-h-screen md:min-h-0">
      <div
        className="fixed top-0 left-0 w-full h-[30vh] md:h-[40vh] bg-cover bg-center z-[-1]"
        style={{ backgroundImage: "url('../bg-header.png')" }}
      />

      <div className="bg-white w-full max-w-4xl py-6 px-6 md:px-14 lg:rounded-full xs:rounded-full shadow-2xl relative">
        <div className="flex justify-between items-center">
          <Image src="/logo-porto.png" alt="Logo" width={80} height={80} />

          <div className="hidden md:flex gap-8 items-center text-slate-blue text-base">
            <p>Experiences</p>
            <p>Project</p>
            <p>Tools</p>
          </div>

          <button className="hidden md:block bg-[#3C5867] px-5 py-3 md:py-4 text-white rounded-full">
            Get Started
          </button>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#3C5867]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-6 bg-white flex flex-col items-center text-slate-blue text-base gap-4 md:hidden">
            <p>Experiences</p>
            <p>Project</p>
            <p>Tools</p>
            <button className="bg-[#3C5867] text-white w-full mx-6 py-3 rounded-full mt-2">
              Get Started
            </button>
          </div>
        )}
      </div>

      <div className="bg-white mt-16 md:mt-20 mb-8 px-4 py-2 text-slate-blue rounded-full flex flex-row justify-between gap-2 items-center border-2 border-[#FAFCFE]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="28"
          viewBox="0 -960 960 960"
          width="28"
          fill="#3C5867"
        >
          <path d="M360-320h240q17 0 28.5-11.5T640-360v-160q0-17-11.5-28.5T600-560h-40v-40q0-17-11.5-28.5T520-640h-80q-17 0-28.5 11.5T400-600v40h-40q-17 0-28.5 11.5T320-520v160q0 17 11.5 28.5T360-320Zm80-240v-40h80v40h-80ZM320-200q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760h320q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200H320Zm0-80h320q83 0 141.5-58.5T840-480q0-83-58.5-141.5T640-680H320q-83 0-141.5 58.5T120-480q0 83 58.5 141.5T320-280Zm160-200Z" />
        </svg>
        <h1 className="text-sm md:text-xl">Available for hire</h1>
      </div>

      <div className="text-text-heading relative w-full flex flex-col justify-center items-center font-onest md:gap-3 text-4xl md:text-6xl mb-3">
        <h1 className="w-4/5 md:w-3/4 text-center">Hey, I’m Rama. I'm a</h1>
        <h1 className="w-auto md:w-3/4 md:leading-18 text-center">
          UI/UX Designer & Web Developer
        </h1>
      </div>

      <div className="relative w-full flex justify-center font-onest text-base md:text-lg mb-6">
        <p className="w-4/5 md:w-3/5 text-center text-[#5A6D75] font-medium">
          I'm a versatile designer & developer based in the Indonesia, dedicated
          to crafting innovative and visually appealing digital experiences.
        </p>
      </div>

      <div className="relative">
        <button className="bg-slate-blue px-5 py-3 rounded-full text-white text-base md:text-lg mb-8">
          Let's Work Together
        </button>
      </div>

      <SkillBadgeList />
    </div>
  );
}
