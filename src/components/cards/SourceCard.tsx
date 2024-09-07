import React from "react";

interface ResourceTypeProps {
  name: string;
  count: number;
}

const SourceCard: React.FC<ResourceTypeProps> = (props) => {
  return (
    <a href={`/resources/${props.name}`}>
      <div className="flex w-full h-full">
        <div className="flex justify-center items-center shadow-lg w-full hover:shadow-2xl active:shadow-none">
          <span className="font-bold text-lg">
            {props.name}: {props.count}
          </span>
        </div>
      </div>
    </a>
  );
};

export default SourceCard;
