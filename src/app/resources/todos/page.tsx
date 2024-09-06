import TodoCard from "@/components/cards/TodoCard";
import { JSON_PLACE_HOLDER_URL } from "@/consts";
import { TodoInfo } from "@/types/resourceInfo";
import axios from "axios";
import { NextPage } from "next";

const TodoPage: NextPage = async () => {
  const response = await axios.get(`${JSON_PLACE_HOLDER_URL}/todos`);
  const todoList: TodoInfo[] = response.data;

  return (
    <>
      {todoList.map((todo, idx) => (
        <TodoCard todoInfo={todo} key={idx} />
      ))}
    </>
  );
};

export default TodoPage;
