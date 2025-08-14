"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const notifySuccess = () => toast.success("Message sent successfully!");
  const notifyFailed = () => toast.error("Message sent failed!");
  const notifyRequired = (field: string) =>
    toast.error(`${field} is required!`);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      notifyRequired("Name");
      return;
    }
    if (!email.trim()) {
      notifyRequired("Email");
      return;
    }
    if (!message.trim()) {
      notifyRequired("Message");
      return;
    }

    if (!formRef.current) return;

    setIsSubmitting(true);
    document.body.style.cursor = "wait";

    emailjs
      .sendForm(
        "service_16ze5yc",
        "template_7xtsdex",
        formRef.current,
        "s8ZFPiPFxMs1X38W9"
      )
      .then(
        () => {
          notifySuccess();
          formRef.current?.reset();
          setName("");
          setEmail("");
          setMessage("");
        },
        () => {
          notifyFailed();
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        document.body.style.cursor = "default";
      });
  };

  return (
    <div
      data-aos="fade-up"
      className="flex my-8 mx-4 md:mx-8 font-poppins flex-col items-center min-h-screen md:min-h-0"
    >
      <div
        className="fixed top-0 left-0 w-full h-[30vh] md:h-[40vh] bg-cover bg-center z-[-1]"
        style={{ backgroundImage: "url('../bg-header.png')" }}
      />

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

      <div className="bg-[#F7FAFC] h-fit w-fit p-1 mt-16 md:mt-16 mb-8 rounded-full">
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
          Lets Work Together
        </h1>
      </div>

      <div className="relative w-full flex justify-center font-onest text-base md:text-lg mb-6">
        <p className="w-4/5 md:w-3/5 text-center text-text-paragraph font-medium">
          Need Any Help? Send us a message using the form below and we&apos;ll
          get back
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-5xl mx-auto flex flex-col gap-6 px-4 sm:px-8 md:px-16 lg:px-24 py-10 rounded-xl"
      >
        <div className="flex flex-col md:flex-row w-full gap-6">
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="name" className="mb-2 text-text-heading">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white/5 border border-gray-200 h-12 rounded-lg px-4 text-gray-800 placeholder:text-gray-400 
              focus:border-slate-blue focus:ring-1 outline-none text-sm sm:text-base transition"
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="email" className="mb-2 text-text-heading">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/5 border border-gray-200 h-12 rounded-lg px-4 text-gray-800 placeholder:text-gray-400 
              focus:border-slate-blue focus:ring-1  outline-none text-sm sm:text-base transition"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 text-text-heading">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-white/5 border rounded-lg mt-3 h-36 px-4 py-2 w-full text-gray-800 border-gray-200 placeholder:text-gray-400"
          />
        </div>

        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: "#1E293B",
              color: "#F1F5F9",
              fontSize: "14px",
              borderRadius: "12px",
              padding: "12px 16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            },
            success: {
              style: {
                background: "#10B981",
                color: "#fff",
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#10B981",
              },
            },
            error: {
              style: {
                background: "#EF4444",
                color: "#fff",
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#EF4444",
              },
            },
          }}
        />

        <button
          type="submit"
          disabled={
            isSubmitting || !name.trim() || !email.trim() || !message.trim()
          }
          className={`mt-2 px-6 py-3 text-white rounded-lg text-sm sm:text-base font-medium shadow-md transition-all duration-200 
    ${
      isSubmitting
        ? "bg-gray-400 cursor-wait"
        : !name.trim() || !email.trim() || !message.trim()
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-slate-blue hover:bg-slate-blue/90 hover:scale-[1.02]"
    }`}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
