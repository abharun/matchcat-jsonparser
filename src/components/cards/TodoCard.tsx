import { TodoInfo } from "@/types/resourceInfo";
import { NextPage } from "next";
import InfoSpan from "@/components/InfoSpan";

interface TodoCardProps {
  todoInfo: TodoInfo;
  id: number;
}

const TodoCard: NextPage<TodoCardProps> = (props) => {
  const { todoInfo } = props;
  return (
    <a href={`/todos/${props.id}`}>
      <div className="flex w-full h-full border-2">
        <div className="flex-col w-full h-full">
          <div className="w-full h-full p-2">
            <InfoSpan tag="ID" value={todoInfo.id} />
            <InfoSpan tag="UserID" value={todoInfo.userId} />
            <InfoSpan tag="Title" value={todoInfo.title} />
            <InfoSpan tag="Status" value={todoInfo.completed} />
          </div>
        </div>
      </div>
    </a>
  );
};

export default TodoCard;
