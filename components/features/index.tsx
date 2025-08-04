"use client";
import React from "react";

export default function Features() {
  return (
    <div className="relative bg-[#F4F8FA] flex justify-center flex-col items-center min-h-screen font-onest">
      <div className="bg-white mb-8 px-4 py-2 relative text-slate-blue rounded-full flex flex-row justify-between gap-2 items-center">
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6 20q-.425 0-.712-.288T5 19t.288-.712T6 18h12q.425 0 .713.288T19 19t-.288.713T18 20zm.7-3.5q-.725 0-1.287-.475t-.688-1.2l-1-6.35q-.05 0-.112.013T3.5 8.5q-.625 0-1.062-.437T2 7t.438-1.062T3.5 5.5t1.063.438T5 7q0 .175-.038.325t-.087.275L8 9l3.125-4.275q-.275-.2-.45-.525t-.175-.7q0-.625.438-1.063T12 2t1.063.438T13.5 3.5q0 .375-.175.7t-.45.525L16 9l3.125-1.4q-.05-.125-.088-.275T19 7q0-.625.438-1.063T20.5 5.5t1.063.438T22 7t-.437 1.063T20.5 8.5q-.05 0-.112-.012t-.113-.013l-1 6.35q-.125.725-.687 1.2T17.3 16.5z"
            />
          </svg>
        </div>
        <p>Experiences</p>
      </div>

      <div className="text-text-heading relative w-full flex flex-col justify-center items-center font-onest md:gap-3 text-4xl/tight md:text-5xl sm:text-5xl mb-3">
        <h1 className="w-3/5 md:w-3/4 text-center leading-18 ">
          My Skills that Shine, Expertise You Can Trust
        </h1>
      </div>

      <div className="relative w-full flex justify-center font-onest text-base md:text-lg mb-6">
        <p className="w-1/3 md:w-1/2  text-center text-text-paragraph font-medium">
          Explore my expertise and see how I can leverage my skills to drive
          your projects forward.
        </p>
      </div>

      {/* card */}
      <div className="flex flex-row w-full flex-wrap justify-center items-center  gap-10 text-text-heading my-6">
        {/* card 1 */}
        <div className="bg-white/35 basis-1/4 flex flex-col justify-center items-start gap-4 p-8 border-white cursor-pointer hover:border-1 hover:border-text-heading rounded-lg transition-all duration-500 md:basis-1/3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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

        {/* card 2 */}
        <div className="bg-white/35 basis-1/4 flex flex-col justify-center items-start gap-4 p-8 border-white cursor-pointer hover:border-1 hover:border-text-heading rounded-lg transition-all duration-500 md:basis-1/3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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

        {/* card 3 */}
        <div className="bg-white/35 basis-1/4 flex flex-col justify-center items-start gap-4 p-8 border-white cursor-pointer hover:border-1 hover:border-text-heading rounded-lg transition-all duration-500  md:basis-1/3 ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
      </div>
    </div>
  );
}
