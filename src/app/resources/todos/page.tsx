import TodoCard from "@/components/cards/TodoCard";
import { JSON_PLACE_HOLDER_URL } from "@/consts";
import { TodoInfo } from "@/types";
import axios from "axios";
import { NextPage } from "next";

const TodoPage: NextPage = async () => {
  const response = await axios.get(`${JSON_PLACE_HOLDER_URL}/todos`);
  const todoList: TodoInfo[] = response.data;

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full h-1/6 items-center">
        <span className="text-2xl font-bold p-8">TODOs</span>
      </div>
      <div className="flex-grow">
        <div className="flex w-full h-full justify-center items-center p-8">
          <div className="grid grid-cols-5 gap-8">
            {todoList.map((todo, idx) => (
              <TodoCard todoInfo={todo} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
