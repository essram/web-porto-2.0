"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Features() {
  useEffect(() => {
    AOS.init({
      // disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      id="features"
      className="relative bg-[#F4F8FA] flex justify-center flex-col items-center min-h-screen font-onest px-4 py-10"
    >
      <div className="bg-white mb-8 px-4 py-2 relative text-slate-blue rounded-full flex flex-row justify-between gap-2 items-center">
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#263C48"
              d="M6 20q-.425 0-.712-.288T5 19t.288-.712T6 18h12q.425 0 .713.288T19 19t-.288.713T18 20zm.7-3.5q-.725 0-1.287-.475t-.688-1.2l-1-6.35q-.05 0-.112.013T3.5 8.5q-.625 0-1.062-.437T2 7t.438-1.062T3.5 5.5t1.063.438T5 7q0 .175-.038.325t-.087.275L8 9l3.125-4.275q-.275-.2-.45-.525t-.175-.7q0-.625.438-1.063T12 2t1.063.438T13.5 3.5q0 .375-.175.7t-.45.525L16 9l3.125-1.4q-.05-.125-.088-.275T19 7q0-.625.438-1.063T20.5 5.5t1.063.438T22 7t-.437 1.063T20.5 8.5q-.05 0-.112-.012t-.113-.013l-1 6.35q-.125.725-.687 1.2T17.3 16.5z"
            />
          </svg>
        </div>
        <p>Experiences</p>
      </div>

      <div className="text-text-heading relative w-full flex flex-col justify-center items-center font-onest gap-2 sm:gap-3 text-4xl sm:text-4xl md:text-5xl mb-3">
        <h1 className="w-full sm:w-4/5 md:w-3/4 text-center leading-10 sm:leading-[3rem] md:leading-[3.5rem]">
          My Skills that Shine, Expertise You Can Trust
        </h1>
      </div>

      <div className="relative w-full flex justify-center font-onest text-sm sm:text-base md:text-lg mb-6">
        <p className="w-full sm:w-4/5 md:w-2/3 text-center text-text-paragraph font-medium px-2">
          Explore my expertise and see how I can leverage my skills to drive
          your projects forward.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center w-full gap-6 md:w-3/4 my-6 px-2">
        <div className="bg-white/35 w-full sm:w-[45%] lg:basis-1/4 flex flex-col justify-center items-start gap-4 p-8 border-white cursor-pointer hover:border-1 hover:border-text-heading rounded-lg transition-all duration-500">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#263C48"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12c0 6 4 10 4 10s4-4 4-10s-4-10-4-10s-4 4-4 10m13 3H3m18-6H3" />
              </g>
            </svg>
          </div>
          <div className="text-xl font-semibold text-text-heading">
            Web Design
          </div>
          <div className="font-medium text-text-paragraph">
            with more than 2 years of experience in this field, more than many
            people like our services
          </div>
        </div>

        <div className="bg-white/35 w-full sm:w-[45%] lg:basis-1/4 flex flex-col justify-center items-start gap-4 p-8 border-white cursor-pointer hover:border-1 hover:border-text-heading rounded-lg transition-all duration-500">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_4418_9595)">
                <path
                  d="M21.47 19V5C21.47 3 20.47 2 18.47 2H14.47C12.47 2 11.47 3 11.47 5V19C11.47 21 12.47 22 14.47 22H18.47C20.47 22 21.47 21 21.47 19Z"
                  stroke="#263C48"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M11.47 6H16.47"
                  stroke="#263C48"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M11.47 18H15.47"
                  stroke="#263C48"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M11.47 13.9492L16.47 13.9992"
                  stroke="#263C48"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M11.47 10H14.47"
                  stroke="#263C48"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M5.49003 2C3.86003 2 2.53003 3.33 2.53003 4.95V17.91C2.53003 18.36 2.72003 19.04 2.95003 19.43L3.77003 20.79C4.71003 22.36 6.26003 22.36 7.20003 20.79L8.02003 19.43C8.25003 19.04 8.44003 18.36 8.44003 17.91V4.95C8.44003 3.33 7.11003 2 5.49003 2Z"
                  stroke="#263C48"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M8.44003 7H2.53003"
                  stroke="#263C48"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_4418_9595">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text-xl font-semibold text-text-heading">
            UI Design
          </div>
          <div className="font-medium text-text-paragraph">
            with more than 2 years of experience in this field, more than many
            people like our services
          </div>
        </div>

        <div className="bg-white/35 w-full sm:w-[90%] md:w-[45%] lg:basis-1/4 flex flex-col justify-center items-start gap-4 p-8 border-white cursor-pointer hover:border-1 hover:border-text-heading rounded-lg transition-all duration-500">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_4418_7299)">
                <path
                  d="M12 22.7808C11.31 22.7808 10.66 22.4307 10.2 21.8207L8.70001 19.8207C8.67001 19.7807 8.55 19.7307 8.5 19.7207H8C3.83 19.7207 1.25 18.5907 1.25 12.9707V7.9707C1.25 3.5507 3.58 1.2207 8 1.2207H16C20.42 1.2207 22.75 3.5507 22.75 7.9707V12.9707C22.75 17.3907 20.42 19.7207 16 19.7207H15.5C15.42 19.7207 15.35 19.7607 15.3 19.8207L13.8 21.8207C13.34 22.4307 12.69 22.7808 12 22.7808Z"
                  fill="none"
                />
                <path
                  d="M8 2.7207C4.42 2.7207 2.75 4.3907 2.75 7.9707V12.9707C2.75 17.4907 4.3 18.2207 8 18.2207H8.5C9.01 18.2207 9.58999 18.5107 9.89999 18.9207L11.4 20.9207C11.75 21.3807 12.25 21.3807 12.6 20.9207L14.1 18.9207C14.43 18.4807 14.95 18.2207 15.5 18.2207H16C19.58 18.2207 21.25 16.5507 21.25 12.9707V7.9707C21.25 4.3907 19.58 2.7207 16 2.7207H8Z"
                  stroke="#263C48"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M7.99994 13.4507C7.80994 13.4507 7.61994 13.3806 7.46994 13.2306L5.46994 11.2306C5.17994 10.9406 5.17994 10.4606 5.46994 10.1706L7.46994 8.17063C7.75994 7.88063 8.23994 7.88063 8.52994 8.17063C8.81994 8.46062 8.81994 8.94062 8.52994 9.23062L7.05994 10.7007L8.52994 12.1706C8.81994 12.4606 8.81994 12.9406 8.52994 13.2306C8.37994 13.3806 8.18994 13.4507 7.99994 13.4507Z"
                  fill="#263C48"
                />
                <path
                  d="M15.9999 13.4507C15.8099 13.4507 15.6199 13.3806 15.4699 13.2306C15.1799 12.9406 15.1799 12.4606 15.4699 12.1706L16.9399 10.7007L15.4699 9.23062C15.1799 8.94062 15.1799 8.46062 15.4699 8.17063C15.7599 7.88063 16.2399 7.88063 16.5299 8.17063L18.5299 10.1706C18.8199 10.4606 18.8199 10.9406 18.5299 11.2306L16.5299 13.2306C16.3799 13.3806 16.1899 13.4507 15.9999 13.4507Z"
                  fill="#263C48"
                />
                <path
                  d="M10.9999 13.7798C10.8999 13.7798 10.7999 13.7597 10.6999 13.7197C10.3199 13.5597 10.1399 13.1197 10.3099 12.7297L12.3099 8.05975C12.4699 7.67975 12.9099 7.49973 13.2999 7.66973C13.6799 7.82973 13.8599 8.26972 13.6899 8.65972L11.6899 13.3298C11.5699 13.6098 11.2899 13.7798 10.9999 13.7798Z"
                  fill="#263C48"
                />
              </g>
              <defs>
                <clipPath id="clip0_4418_7299">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text-xl font-semibold text-text-heading">
            Web Developer
          </div>
          <div className="font-medium text-text-paragraph">
            with more than 2 years of experience in this field, more than many
            people like our services
          </div>
        </div>
      </div>
    </div>
  );
}
