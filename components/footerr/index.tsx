"use client"
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {

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
    <div data-aos="fade-up" className="relative bg-[#F4F8FA] flex justify-center flex-col items-center min-h-screen font-onest px-6 sm:px-12 md:px-24 lg:px-32 py-10 text-text-heading">
      <div className="bg-white py-10 px-6 sm:px-12 md:px-16 flex flex-col lg:px-24 rounded-xl">
        <div className=" w-full flex flex-col lg:flex-row justify-between gap-10">
          {/* basis logo & description */}
          <div className="basis-full lg:basis-1/2 flex flex-col gap-y-4">
            <div>
              <Image
                src="/logo-porto.png"
                alt="Logo"
                width={150}
                height={150}
              />
            </div>
            <p className="w-full sm:w-4/5 text-justify/loose text-text-paragraph text-base sm:text-lg">
              I&apos;m a versatile designer & developer based in the Indonesia,
              dedicated to crafting innovative and visually appealing digital
              experiences.
            </p>
          </div>

          {/* basis etc */}
          <div className="basis-full lg:basis-1/2 flex flex-col sm:flex-row justify-between gap-y-10 sm:gap-y-0 sm:gap-x-12 lg:gap-x-20">
            <div className="flex flex-col gap-y-5 text-base sm:text-md">
              <h1 className="text-lg sm:text-xl font-semibold">Pages</h1>
              <div className="mt-4 sm:mt-8 flex flex-col gap-y-3 text-text-paragraph">
                <p>Home</p>
                <p>Experiences</p>
                <p>Project</p>
                <p>Tools</p>
              </div>
            </div>

            <div className="flex flex-col gap-y-5 text-base sm:text-md">
              <h1 className="text-lg sm:text-xl font-semibold">Pages</h1>
              <div className="mt-4 sm:mt-8 flex flex-col gap-y-3 text-text-paragraph">
                <p>Home</p>
                <p>Experiences</p>
                <p>Project</p>
                <p>Tools</p>
              </div>
            </div>

            <div className="flex flex-col gap-y-5 text-base sm:text-md">
              <h1 className="text-lg sm:text-xl font-semibold">Pages</h1>
              <div className="mt-4 sm:mt-8 flex flex-col gap-y-3 text-text-paragraph">
                <p>Home</p>
                <p>Experiences</p>
                <p>Project</p>
                <p>Tools</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-text-paragraph text-center sm:text-left mt-6 sm:mt-16 lg:mt-20 text-xs sm:text-sm md:text-base">
          All right reserved. ©2025
        </p>
      </div>
    </div>
  );
}
