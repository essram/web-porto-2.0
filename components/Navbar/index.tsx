"use client"
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex my-8 mx-4 md:mx-8 font-poppins flex-col items-center min-h-screen md:min-h-0">
      <div
        className={`bg-white w-full max-w-4xl py-6 px-6 md:px-14  relative transition-all duration-300
  ${isMenuOpen ? "rounded-3xl" : "rounded-full lg:rounded-full"}`}
      >
        <div className="flex justify-between items-center">
          <Image src="/logo-porto.png" alt="Logo" width={90} height={90} />

          <div className="hidden md:flex gap-8 items-center text-slate-blue text-base">
            <p>Experiences</p>
            <p>Project</p>
            <p>Tools</p>
          </div>

          <button className="hover hidden md:block bg-[#3C5867] hover:bg-slate-blue/80 duration-200 transition-all px-5 py-3 md:py-4 text-white rounded-full">
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
          <div className="mt-6 rounded-lg flex flex-col items-center gap-4 md:hidden text-slate-blue text-base">
            <div className="mt-6 rounded-lg flex flex-col items-center gap-4 md:hidden text-slate-blue text-base">
              <p>Experiences</p>
              <p>Project</p>
              <p>Tools</p>
              <button
                className={`bg-[#3C5867] text-white hover:bg-slate-blue/80 duration-200 transition-all ${
                  isMenuOpen ? "w-full rounded-3xl" : "w-full rounded-full"
                } mx-6 py-3  mt-2`}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
