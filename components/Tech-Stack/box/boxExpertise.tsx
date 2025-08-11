import React, { MouseEventHandler, ReactNode } from "react";

interface ExpertiseCardProps {
  title: string;
  desc: string;
  icon: ReactNode;
  onMouseEnter: MouseEventHandler;
  onMouseLeave: MouseEventHandler;
}

export default function ExpertiseCard({
  title,
  desc,
  icon,
  onMouseEnter,
  onMouseLeave,
}: ExpertiseCardProps) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="bg-white flex justify-center items-center gap-x-8 px-6 py-5 rounded-xl border-2 border-transparent hover:border-[#3C5867] transition-all duration-300 transform min-w-[300px] cursor-pointer select-none"
    >
      <div
        className="w-14 h-14 flex justify-center items-center rounded-xl"
        style={{ minWidth: 58, minHeight: 58 }}
      >
        {icon}
      </div>
      <div className="flex flex-col justify-center text-slate-blue">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm opacity-50">{desc}</p>
      </div>
    </div>
  );
}
