"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  mode?: "scroll" | "link"; // default scroll
  scrollToSection?: (id: string) => void;
}

export default function Navbar({ mode = "scroll", scrollToSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Experiences", target: "features" },
    { label: "Project", target: "projects" },
    { label: "Tools", target: "tools" },
  ];

  const renderNavItem = (label: string, target: string) => {
    if (mode === "scroll") {
      return (
        <a
          onClick={() => scrollToSection && scrollToSection(target)}
          className="relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:bottom-0 
            after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-400 after:ease-out
            hover:after:left-0 hover:after:w-full"
        >
          {label}
        </a>
      );
    }

    // mode link
    return (
      <Link href={`/?scrollTo=${target}`}>
        <p
          className="relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:bottom-0 
            after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-400 after:ease-out
            hover:after:left-0 hover:after:w-full"
        >
          {label}
        </p>
      </Link>
    );
  };

  return (
    <div
      className={`bg-white w-full max-w-4xl py-6 px-6 md:px-14 relative transition-all duration-300
      ${isMenuOpen ? "rounded-3xl" : "rounded-full lg:rounded-full"}`}
    >
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo-porto.png" alt="Logo" width={90} height={90} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-slate-blue text-base">
          {navItems.map((item) => (
            <div key={item.target}>{renderNavItem(item.label, item.target)}</div>
          ))}
        </div>

        <Link href="/contact">
          <button className="hidden md:block bg-[#3C5867] hover:bg-slate-blue/80 duration-200 transition-all px-5 py-3 md:py-4 text-white rounded-full hover:cursor-pointer whitespace-nowrap">
            Get Started
          </button>
        </Link>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mt-6 rounded-lg flex flex-col items-center gap-4 md:hidden text-slate-blue text-base px-6">
          {navItems.map((item) => (
            <div key={item.target}>{renderNavItem(item.label, item.target)}</div>
          ))}
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
  );
}
