import { TodoInfo } from "@/types";
import { NextPage } from "next";

const InfoSpan = ({
  tag,
  value,
}: {
  tag: string;
  value: string | number | boolean;
}) => {
  return (
    <div className="flex w-full">
      <p className="p-1 text-sm text-black">{tag}:</p>
      {typeof value === "boolean" ? (
        <div className="p-1 items-center">
          <input type="checkbox" checked={value} readOnly className="w-4 h-4" />
        </div>
      ) : (
        <p className="p-1 text-sm text-black items-center">
          <span>{value}</span>
        </p>
      )}
    </div>
  );
};

interface TodoCardProps {
  todoInfo: TodoInfo;
}

const TodoCard: NextPage<TodoCardProps> = (props) => {
  const { todoInfo } = props;
  return (
    <div className="flex w-full h-full border-2">
      <div className="flex justify-center items-center shadow-sm">
        <div className="flex-col w-full h-full">
          <div className="w-full h-full p-2">
            <InfoSpan tag="ID" value={todoInfo.id} />
            <InfoSpan tag="UserID" value={todoInfo.userId} />
            <InfoSpan tag="Title" value={todoInfo.title} />
            <InfoSpan tag="Status" value={todoInfo.completed} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
