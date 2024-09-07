import { JSON_PLACE_HOLDER_URL } from "@/consts";
import { CommentInfo } from "@/types/resourceInfo";
import axios from "axios";

export const fetchComments = async () => {
  const response = await axios.get(`${JSON_PLACE_HOLDER_URL}/comments`);
  return response.data;
};

export const createComment = async (comment: CommentInfo) => {
    const response = await axios.post(`${JSON_PLACE_HOLDER_URL}/comments`, comment);
    return response.data;
}

export const editComment = async (id: number, comment: CommentInfo) => {
    const response = await axios.put(`${JSON_PLACE_HOLDER_URL}/comments/${id}`, comment);
    return response.data;
}

export const deleteComment = async (id: number) => {
    const response = await axios.delete(`${JSON_PLACE_HOLDER_URL}/comments/${id}`);
    return response.data;
}
