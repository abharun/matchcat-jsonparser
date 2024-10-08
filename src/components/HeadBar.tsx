import React from "react";

const Headbar: React.FC = () => {
  return (
    <div className="z-20 sticky top-0 w-full min-h-28 max-h-28 flex p-3 flex-row shadow-md shadow-black justify-between items-center xl:py-[1.375rem] bg-gradient-to-r from-[#5c5e75] to-[#100c35]">
      <div className="text-white text-3xl px-4">JSON Placeholder</div>
      <a
        href="/dashboard"
        className="text-white text-xl px-4 cursor-pointer hover:underline"
      >
        Dashboard
      </a>
    </div>
  );
};

export default Headbar;
