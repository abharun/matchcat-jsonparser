import React from "react";
import SourceCard from "./SourceCard";
import { ResourceData } from "@/consts";

const ResourceBoard: React.FC = () => {
  return (
    <div className="flex w-1/2 h-1/2 border-2 rounded-lg border-gray-800">
      <div className="flex flex-col w-full h-full">
        <div className="flex w-full h-1/4 px-8 items-center justify-center bg-gray-300">
          <span className="text-4xl p-2 font-bold">Resources</span>
        </div>
        <div className="flex-grow w-full">
          <div className="grid grid-cols-3 grid-rows-2 w-full h-full gap-4 p-4 justify-around">
            {ResourceData.map((data) => (
              <SourceCard key={data.name} name={data.name} count={data.count} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceBoard;
