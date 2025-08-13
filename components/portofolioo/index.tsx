"use client"
import Image from "next/image";
import imgTicket from "@/public/porto-images/train-ticket.png";
import imgEcommerce from "@/public/porto-images/ecommerce.png";
import imgLearn from "@/public/porto-images/redesign_khan_academy.png";
import imgFooder from "@/public/porto-images/fooder-home.png";
import imgNusa from "@/public/porto-images/exploreNusa.png";
import imgWorker from "@/public/porto-images/web1.png";

export default function Portofolio() {
  return (
    <div id="projects" className="relative bg-[#F4F8FA] flex flex-col items-center justify-center min-h-screen font-onest px-4">
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
              d="m12 14.475l1.925 1.15q.275.175.538-.012t.187-.513l-.5-2.175l1.7-1.475q.25-.225.15-.537t-.45-.338l-2.225-.175l-.875-2.075q-.125-.3-.45-.3t-.45.3l-.875 2.075l-2.225.175q-.35.025-.45.338t.15.537l1.7 1.475l-.5 2.175q-.075.325.188.513t.537.012zM8.65 20H6q-.825 0-1.412-.587T4 18v-2.65L2.075 13.4q-.275-.3-.425-.662T1.5 12t.15-.737t.425-.663L4 8.65V6q0-.825.588-1.412T6 4h2.65l1.95-1.925q.3-.275.663-.425T12 1.5t.738.15t.662.425L15.35 4H18q.825 0 1.413.588T20 6v2.65l1.925 1.95q.275.3.425.663t.15.737t-.15.738t-.425.662L20 15.35V18q0 .825-.587 1.413T18 20h-2.65l-1.95 1.925q-.3.275-.662.425T12 22.5t-.737-.15t-.663-.425z"
            />
          </svg>
        </div>
        <p>Projects</p>
      </div>

      <div className="text-text-heading relative w-full flex flex-col justify-center items-center font-onest gap-2 sm:gap-3 text-4xl sm:text-4xl md:text-5xl mb-3">
        <h1 className="w-full sm:w-4/5 md:w-3/4 text-center leading-10 sm:leading-[3rem] md:leading-[3.5rem]">
          My Creative Project
        </h1>
      </div>

      <div className="relative w-full flex justify-center font-onest text-sm sm:text-base md:text-lg ">
        <p className="w-full sm:w-4/5 md:w-2/3 text-center text-text-paragraph font-medium px-2">
          Explore my portfolio and see how I bring ideas to life
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 my-20 w-full px-4 sm:px-6 md:px-12">
        {[
          { img: imgTicket, title: "Train Ticket" },
          { img: imgFooder, title: "Food Ordering" },
          { img: imgEcommerce, title: "Ecommerce" },
          { img: imgLearn, title: "Learn" },
          { img: imgNusa, title: "Explore Nusa" },
          { img: imgWorker, title: "Work King" },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden flex flex-col flex-wrap w-max-sm bg-white"
          >
            <Image
              className="object-cover h-56"
              src={item.img}
              alt=""
              width={456}
              height={0}
            />
            <div className=" py-3 px-4 flex flex-col gap-6 mt-2">
              <h4 className="text-lg font-onest font-semibold text-gray-800">
                {item.title}
              </h4>
              <button className="text-sm font-onest font-medium text-[#f5f5f5] bg-slate-blue py-2 px-4 rounded-lg hover:bg-slate-blue/90 transition-all hover:cursor-pointer">
                More detail
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="text-sm font-onest font-medium text-[#f5f5f5] bg-slate-blue py-3 px-6 rounded-lg hover:bg-slate-blue/90 transition-all hover:cursor-pointer w-1/6">See more</button>
    </div>
  );
}
