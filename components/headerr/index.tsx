"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SkillBadgeList from "@/components/list-badge";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
// import arigatou gozaimas

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({
      // disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div
      data-aos="fade-down"
      className=" flex my-8 mx-4 md:mx-8 font-poppins flex-col items-center min-h-screen md:min-h-0"
    >
      <div
        className="fixed top-0 left-0 w-full h-[30vh] md:h-[40vh] bg-cover bg-center z-[-1] "
        style={{ backgroundImage: "url('../bg-header.png')" }}
      />

      <div
        className={`bg-white w-full max-w-4xl py-6 px-6 md:px-14 relative transition-all duration-300
  ${isMenuOpen ? "rounded-3xl" : "rounded-full lg:rounded-full"}`}
      >
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo-porto.png" alt="Logo" width={90} height={90} />
          </Link>

          <div className="hidden md:flex gap-8 items-center text-slate-blue text-base">
            <a
              onClick={() => scrollToSection("features")}
              className="relative cursor-pointer 
        after:content-[''] after:absolute after:left-1/2 after:bottom-0 
        after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-400 after:ease-out
        hover:after:left-0 hover:after:w-full"
            >
              Experiences
            </a>
            <a
              onClick={() => scrollToSection("projects")}
              className="relative cursor-pointer 
        after:content-[''] after:absolute after:left-1/2 after:bottom-0 
        after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-400 after:ease-out
        hover:after:left-0 hover:after:w-full"
            >
              Project
            </a>
            <a
              onClick={() => scrollToSection("tools")}
              className="relative cursor-pointer 
        after:content-[''] after:absolute after:left-1/2 after:bottom-0 
        after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-400 after:ease-out
        hover:after:left-0 hover:after:w-full"
            >
              Tools
            </a>
          </div>

          <Link href="/contact">
            <button className="hidden md:block bg-[#3C5867] hover:bg-slate-blue/80 duration-200 transition-all px-5 py-3 md:py-4 text-white rounded-full hover:cursor-pointer whitespace-nowrap">
              Get Started
            </button>
          </Link>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
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
          <div className="mt-6 rounded-lg flex flex-col items-center gap-4 md:hidden text-slate-blue text-base px-6">
            <a
              onClick={() => scrollToSection("features")}
              className="relative cursor-pointer 
        after:content-[''] after:absolute after:left-1/2 after:bottom-0 
        after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-400 after:ease-out
        hover:after:left-0 hover:after:w-full"
            >
              Experiences
            </a>
            <a
              onClick={() => scrollToSection("projects")}
              className="relative cursor-pointer 
        after:content-[''] after:absolute after:left-1/2 after:bottom-0 
        after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-400 after:ease-out
        hover:after:left-0 hover:after:w-full"
            >
              Project
            </a>
            <a
              onClick={() => scrollToSection("tools")}
              className="relative cursor-pointer 
        after:content-[''] after:absolute after:left-1/2 after:bottom-0 
        after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-400 after:ease-out
        hover:after:left-0 hover:after:w-full"
            >
              Tools
            </a>

            <Link href="/contact" className="w-full">
              <button
                className="bg-[#3C5867] text-white hover:bg-slate-blue/80 duration-200 transition-all hover:cursor-pointer w-full rounded-3xl py-3 mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </button>
            </Link>
          </div>
        )}
      </div>

      <div className="bg-[#F7FAFC] h-fit w-fit p-1 mt-16 md:mt-20 mb-8 rounded-full">
        <div className="bg-white   px-4 py-2 text-slate-blue rounded-full flex flex-row justify-between gap-2 items-center border-2 border-[#FAFCFE]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <g
              fill="#3C5867"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="M18.99 19H19m-.01 0c-.622.617-1.75.464-2.542.464c-.972 0-1.44.19-2.133.883C13.725 20.937 12.934 22 12 22s-1.725-1.063-2.315-1.653c-.694-.693-1.162-.883-2.133-.883c-.791 0-1.92.154-2.543-.464c-.627-.622-.473-1.756-.473-2.552c0-1.007-.22-1.47-.937-2.186C2.533 13.196 2 12.662 2 12s.533-1.196 1.6-2.262c.64-.64.936-1.274.936-2.186c0-.791-.154-1.92.464-2.543c.622-.627 1.756-.473 2.552-.473c.912 0 1.546-.297 2.186-.937C10.804 2.533 11.338 2 12 2s1.196.533 2.262 1.6c.64.64 1.274.936 2.186.936c.791 0 1.92-.154 2.543.464c.627.622.473 1.756.473 2.552c0 1.007.22 1.47.937 2.186C21.467 10.804 22 11.338 22 12s-.533 1.196-1.6 2.262c-.716.717-.936 1.18-.936 2.186c0 .796.154 1.93-.473 2.552" />
              <path d="M9 12.893s1.2.652 1.8 1.607c0 0 1.8-3.75 4.2-5" />
            </g>
          </svg>
          <h1 className="md:text-lg">Available for hire</h1>
        </div>
      </div>

      <div className="text-text-heading relative w-full flex flex-col justify-center items-center font-onest md:gap-3 text-4xl md:text-6xl sm:text-5xl mb-3">
        <h1 className="w-4/5 md:w-3/4 xs:w-1/2 text-center">
          Hey, I&apos;m Rama. I&apos;m a
        </h1>
        <h1 className="w-auto md:w-3/4 md:leading-18 text-center">
          UI/UX Designer & Web Developer
        </h1>
      </div>

      <div className="relative w-full flex justify-center font-onest text-base md:text-lg mb-6">
        <p className="w-4/5 md:w-3/5 text-center text-text-paragraph font-medium">
          I&apos;m a versatile designer & developer based in the Indonesia,
          dedicated to crafting innovative and visually appealing digital
          experiences.
        </p>
      </div>

      <div className="relative">
        <button className="bg-slate-blue px-5 py-3 rounded-full text-white text-base md:text-lg mb-8 hover:bg-slate-blue/80 duration-200 transition-all">
          Let&apos;s Work Together
        </button>
      </div>

      <SkillBadgeList />
    </div>
  );
}
