import { JSON_PLACE_HOLDER_URL } from "@/consts";
import { UserInfo } from "@/types/resourceInfo";
import axios from "axios";

export const fetchUsers = async () => {
  const response = await axios.get(`${JSON_PLACE_HOLDER_URL}/users`);
  return response.data;
};

export const createUser = async (user: UserInfo) => {
  const response = await axios.post(`${JSON_PLACE_HOLDER_URL}/users`, user);
  return response.data;
};

export const editUser = async (id: number, user: UserInfo) => {
  const response = await axios.put(
    `${JSON_PLACE_HOLDER_URL}/users/${id}`,
    user
  );
  return response.data;
};

export const deleteUser = async (id: number) => {
  const response = await axios.delete(`${JSON_PLACE_HOLDER_URL}/users/${id}`);
  return response.data;
};
