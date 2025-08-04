import React from "react";
type SkillBadgeProps = {
  icon: React.ReactNode;
  label: string;
};

const SkillBadge: React.FC<SkillBadgeProps> = ({ icon, label }) => {
  return (
    <div className="relative flex justify-center mb-12">
      <div className="bg-[#F5F9FA] border-2 rounded-full px-3 py-2 border-white flex justify-center items-center gap-2">
        <div className="text-[#636978]">{icon}</div>
        <p className="text-md text-[#AAAFB1]">{label}</p>
      </div>
    </div>
  );
};
const checkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#3C5867"
  >
    <path d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-1.293 5.953a1 1 0 0 0-1.32-.083l-.094.083L11 12.585l-1.293-1.292l-.094-.083a1 1 0 0 0-1.403 1.403l.083.094l2 2l.094.083a1 1 0 0 0 1.226 0l.094-.083l4-4l.083-.094a1 1 0 0 0-.083-1.32" />
  </svg>
);

const skills = [
  { label: "Front End", icon: checkIcon },
  { label: "Back End", icon: checkIcon },
  { label: "UI/UX Design", icon: checkIcon },
];

// Komponen utama
const SkillBadgeList: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {skills.map((skill, index) => (
        <SkillBadge key={index} icon={skill.icon} label={skill.label} />
      ))}
    </div>
  );
};

export default SkillBadgeList;
