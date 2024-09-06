import { JSON_PLACE_HOLDER_URL } from "@/consts";
import { TodoInfo } from "@/types";
import React from "react";

// Define getServerSideProps for SSR
export const getServerSideProps = async () => {
  const res = await fetch(`${JSON_PLACE_HOLDER_URL}/todos`);
  const todoList = await res.json();

  return {
    props: {
      todoList, // Pass the fetched data as props
    },
  };
};

interface TodoPageProps {
  todoList: TodoInfo[]; // Define the type of your data
}

const TodoPage: React.FC<TodoPageProps> = ({ todoList }) => {
  return (
    <>
      <h1>This is Todo List Page</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoPage;
