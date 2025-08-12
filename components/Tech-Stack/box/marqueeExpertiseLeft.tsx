import { useState, MouseEventHandler, useRef, useEffect } from "react";
import ExpertiseCard from "./boxExpertise";

import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiFigma,
  SiMysql,
  SiTailwindcss,
  SiGoland,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiPrisma,
} from "react-icons/si";

interface ExpertiseItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const expertiseItems: ExpertiseItem[] = [
  {
    title: "React JS",
    desc: "Front-End Development",
    icon: <FaReact size={56} color="#61DAFB" />,
  },
  {
    title: "NodeJS",
    desc: "Back-End Development",
    icon: <FaNodeJs size={56} color="#3C873A" />,
  },
  {
    title: "Figma",
    desc: "UI/UX Design",
    icon: <SiFigma size={56} color="#F24E1E" />,
  },
  {
    title: "MySQL",
    desc: "Database",
    icon: <SiMysql size={56} color="#4479A1" />,
  },
  {
    title: "Tailwind CSS",
    desc: "Front-End Styling",
    icon: <SiTailwindcss size={56} color="#38B2AC" />,
  },
  {
    title: "Python",
    desc: "Data Analisyst",
    icon: <FaPython size={56} color="#FFD43B" />,
  },
  {
    title: "Golang",
    desc: "Back-End Development",
    icon: <SiGoland size={56} color="#00ADD8" />,
  },
  {
    title: "TypeScript",
    desc: "JS Superset",
    icon: <SiTypescript size={56} color="#3178C6" />,
  },
  {
    title: "JavaScript",
    desc: "Web Language",
    icon: <SiJavascript size={56} color="#F7DF1E" />,
  },
  {
    title: "Express",
    desc: "Node.js Framework",
    icon: <SiExpress size={56} color="#000000" />,
  },
  {
    title: "Prisma",
    desc: "ORM for Databases",
    icon: <SiPrisma size={56} color="#0C344B" />,
  },
];


export default function ExpertiseMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      const width = trackRef.current.scrollWidth / 2;
      setTrackWidth(width);
    }
  }, []);

  const handleMouseEnter: MouseEventHandler = () => setIsPaused(true);
  const handleMouseLeave: MouseEventHandler = () => setIsPaused(false);

  return (
    <div className="overflow-hidden w-full bg-[#F4F8FA] py-12">
      <div
        ref={trackRef}
        className="flex gap-6"
        style={{
          animationPlayState: isPaused ? "paused" : "running",
          animationName: "marquee-left",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDuration: "60s",
        }}
      >
        {[...expertiseItems, ...expertiseItems].map((item, i) => (
          <ExpertiseCard
            key={i}
            title={item.title}
            desc={item.desc}
            icon={item.icon}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${trackWidth}px);
          }
        }
      `}</style>
    </div>
  );
}
