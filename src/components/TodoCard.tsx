import { TodoInfo } from "@/types";
import { NextPage } from "next";
import InfoSpan from "@/components/InfoSpan";

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
