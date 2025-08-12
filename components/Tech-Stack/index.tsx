"use client"
import ExpertiseMarqueeLeft from "./box/marqueeExpertiseLeft";
import ExpertiseMarqueeRight from "./box/marqueeExpertiseRight";

export default function TechStack() {
  return (
    <div id="tools" className="relative w-full bg-[#F4F8FA] flex flex-col items-center justify-center min-h-screen font-onest">
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
        <p className="text-base sm:text-lg">Tools</p>
      </div>

      <div className="text-text-heading relative w-full flex flex-col justify-center items-center font-onest md:gap-3 text-4xl sm:text-5xl md:text-6xl mb-3">
        <h1 className="w-4/5 md:w-3/4 sm:w-11/12 text-center">
          My Skills that Shine, Expertise
        </h1>
        <h1 className="w-auto md:w-3/4 md:leading-18 text-center">
          You Can Trust
        </h1>
      </div>

      <div className="relative max-w-screen flex justify-center font-onest text-sm sm:text-base md:text-lg">
        <p className="w-11/12 sm:w-3/4 md:w-2/3 text-center text-text-paragraph font-medium px-2">
          Explore my expertise and see how I can leverage my skills to drive
          your projects forward.
        </p>
      </div>

      <div className="w-full mt-2">
        <ExpertiseMarqueeLeft />
        <ExpertiseMarqueeRight />
      </div>
    </div>
  );
}
