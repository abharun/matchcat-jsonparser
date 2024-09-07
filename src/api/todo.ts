import { JSON_PLACE_HOLDER_URL } from "@/consts";
import { TodoInfo } from "@/types/resourceInfo";
import axios from "axios";

export const fetchTodos = async () => {
  const response = await axios.get(`${JSON_PLACE_HOLDER_URL}/todos`);
  return response.data;
};

export const createTodo = async (todo: TodoInfo) => {
  const response = await axios.post(`${JSON_PLACE_HOLDER_URL}/todos`, todo);
  return response.data;
};

export const editTodo = async (id: number, todo: TodoInfo) => {
  const response = await axios.put(
    `${JSON_PLACE_HOLDER_URL}/todos/${id}`,
    todo
  );
  return response.data;
};

export const deleteTodo = async (id: number) => {
  const response = await axios.delete(`${JSON_PLACE_HOLDER_URL}/todos/${id}`);
  return response.data;
};
