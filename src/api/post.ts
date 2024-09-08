import { JSON_PLACE_HOLDER_URL } from "@/consts";
import { PostInfo } from "@/types/resourceInfo";
import axios from "axios";

export const fetchPosts = async () => {
  const response = await axios.get(`${JSON_PLACE_HOLDER_URL}/posts`);
  return response.data;
};

export const fetchPost = async (id: number) => {
  const response = await axios.get(`${JSON_PLACE_HOLDER_URL}/posts/${id}`);
  return response.data;
};

export const createPost = async (post: PostInfo) => {
  const response = await axios.post(`${JSON_PLACE_HOLDER_URL}/posts`, post);
  return response.data;
};

export const editPost = async (id: number, post: PostInfo) => {
  const response = await axios.put(
    `${JSON_PLACE_HOLDER_URL}/posts/${id}`,
    post
  );
  return response.data;
};

export const deletePost = async (id: number) => {
  const response = await axios.delete(`${JSON_PLACE_HOLDER_URL}/posts/${id}`);
  return response.data;
};
