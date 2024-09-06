import { TodoInfo } from "@/types";
import React from "react";

const InfoSpan = ({
  tag,
  value,
}: {
  tag: string;
  value: string | number | boolean;
}) => {
  return (
    <div className="flex">
      <p className="w-1/2 p-1 text-sm text-right text-gray-200">{tag}:</p>
      {typeof value === "boolean" ? (
        <input type="checkbox" checked={value} readOnly className="w-4 h-4" />
      ) : (
        <p className="w-1/2 p-1 text-sm text-left text-gray-200">{value}</p>
      )}
    </div>
  );
};

interface TodoCardProps {
  todoInfo: TodoInfo;
}

const TodoCard: React.FC<TodoCardProps> = (props) => {
  const { todoInfo } = props;
  return (
    <div className="flex w-full h-full">
      <div className="flex justify-center items-center shadow-sm">
        <div className="flex w-full h-full">
          <InfoSpan tag="ID" value={todoInfo.id} />
          <InfoSpan tag="UserID" value={todoInfo.userId} />
          <InfoSpan tag="Title" value={todoInfo.title} />
          <InfoSpan tag="Status" value={todoInfo.completed} />
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
