"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { arrayPorto } from "../../data/portofolio";

export default function Projects() {
  const searchParams = useSearchParams(); 
  const category = searchParams.get("category");
  
  const filteredPorto = category
    ? arrayPorto.filter(
        (porto) => porto.category.toLowerCase() === category.toLowerCase()
      )
    : arrayPorto;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" flex my-10 mx-4 md:mx-8 font-poppins flex-col items-center min-h-screen md:min-h-0">
      <div  
        className={`bg-white w-full max-w-4xl py-6 px-6 md:px-14  relative transition-all duration-300
  ${isMenuOpen ? "rounded-3xl" : "rounded-full lg:rounded-full"}`}
      >
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo-porto.png" alt="Logo" width={90} height={90} />
          </Link>

          <div className="hidden md:flex gap-8 items-center text-slate-blue text-base">
            <Link href="/?scrollTo=features">
              <p
                className="relative cursor-pointer 
              after:content-[''] after:absolute after:left-1/2 after:bottom-0 
              after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-400 after:ease-out
              hover:after:left-0 hover:after:w-full"
              >
                Experiences
              </p>
            </Link>

            <Link href="/?scrollTo=projects">
              <p
                onClick={() => scrollToSection("projects")}
                className="relative cursor-pointer 
              after:content-[''] after:absolute after:left-1/2 after:bottom-0 
              after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-400 after:ease-out
              hover:after:left-0 hover:after:w-full"
              >
                Project
              </p>
            </Link>
            <Link href="/?scrollTo=tools">
              <p
                onClick={() => scrollToSection("tools")}
                className="relative cursor-pointer 
              after:content-[''] after:absolute after:left-1/2 after:bottom-0 
              after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-400 after:ease-out
              hover:after:left-0 hover:after:w-full"
              >
                Tools
              </p>
            </Link>
          </div>

          <Link href="/contact">
            <button className="hover hidden md:block bg-[#3C5867] hover:bg-slate-blue/80 duration-200 transition-all px-5 py-3 md:py-4 text-white rounded-full hover:cursor-pointer">
              Get Started
            </button>
          </Link>

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
          <div className="mt-6 rounded-lg flex flex-col items-center gap-4 md:hidden text-slate-blue text-base px-6">
            <Link href="/?scrollTo=projects">
              <p
                onClick={() => scrollToSection("features")}
                className="relative cursor-pointer 
        after:content-[''] after:absolute after:left-1/2 after:bottom-0 
        after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-400 after:ease-out
        hover:after:left-0 hover:after:w-full"
              >
                Experiences
              </p>
            </Link>
            <Link href="/?scrollTo=projects">
              <p
                onClick={() => scrollToSection("projects")}
                className="relative cursor-pointer 
        after:content-[''] after:absolute after:left-1/2 after:bottom-0 
        after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-400 after:ease-out
        hover:after:left-0 hover:after:w-full"
              >
                Project
              </p>
            </Link>
            <Link href="/?scrollTo=projects">
              <p
                onClick={() => scrollToSection("tools")}
                className="relative cursor-pointer 
        after:content-[''] after:absolute after:left-1/2 after:bottom-0 
        after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-400 after:ease-out
        hover:after:left-0 hover:after:w-full"
              >
                Tools
              </p>
            </Link>

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

      <h2 className="text-4xl my-16 font-bold tracking-tight text-center text-text-heading">
        My Portofolio&apos;s
      </h2>
      <div className="mt-8 p-2 w-xl text-text-heading text-xl font-semibold flex space-x-10 justify-center">
        <Link
          href="/projects"
          className={` hover:text-text-heading hover:transition-all ${
            !category
              ? "font-bold text-text-heading underline underline-offset-8 "
              : "text-gray-300"
          }`}
        >
          All
        </Link>
        <Link
          href="/projects?category=website"
          className={` hover:text-text-heading  hover:transition-all duration-300 ${
            category === "website"
              ? "font-bold text-text-heading underline underline-offset-8 "
              : "text-gray-300"
          }`}
        >
          Development
        </Link>
        <Link
          href="/projects?category=uiux"
          className={` hover:text-text-heading  hover:transition-all duration-300 ${
            category === "uiux"
              ? "font-bold text-text-heading underline underline-offset-8 "
              : "text-gray-300"
          }`}
        >
          UI/UX
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {filteredPorto.map((porto, index) => (
          <div key={index} className="group relative bg-white rounded-lg">
            <Link href={`/projects/${porto.id}`} className="bg-white h-full">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  lg:aspect-none hover:transition-all group-hover:opacity-75 lg:h-80">
                <Image
                  alt={porto.name}
                  src={porto.image}
                  width={100}
                  height={100}
                  unoptimized
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div className="p-3">
                  <h3 className="text-md text-text-heading font-bold">
                    {porto.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-paragraph">
                    {porto.description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
