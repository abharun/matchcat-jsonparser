import { JSON_PLACE_HOLDER_URL } from "@/consts";
import { PhotoInfo } from "@/types/resourceInfo";
import axios from "axios";

export const fetchPhotos = async () => {
  const response = await axios.get(`${JSON_PLACE_HOLDER_URL}/photos`);
  return response.data;
};

export const createPhoto = async (photo: PhotoInfo) => {
  const response = await axios.post(`${JSON_PLACE_HOLDER_URL}/photos`, photo);
  return response.data;
};

export const editPhoto = async (id: number, photo: PhotoInfo) => {
  const response = await axios.put(
    `${JSON_PLACE_HOLDER_URL}/photos/${id}`,
    photo
  );
  return response.data;
};

export const deletePhoto = async (id: number) => {
  const response = await axios.delete(`${JSON_PLACE_HOLDER_URL}/photos/${id}`);
  return response.data;
};
