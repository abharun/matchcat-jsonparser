import { JSON_PLACE_HOLDER_URL } from "@/consts";
import { AlbumInfo } from "@/types/resourceInfo";
import axios from "axios";

export const fetchAlbums = async () => {
  const response = await axios.get(`${JSON_PLACE_HOLDER_URL}/albums`);
  return response.data;
};

export const fetchAlbum = async (id: number) => {
  const response = await axios.get(`${JSON_PLACE_HOLDER_URL}/albums/${id}`);
  return response.data;
};

export const createAlbum = async (album: AlbumInfo) => {
  const response = await axios.post(`${JSON_PLACE_HOLDER_URL}/albums`, album);
  return response.data;
};

export const editAlbum = async (id: number, album: AlbumInfo) => {
  const response = await axios.put(
    `${JSON_PLACE_HOLDER_URL}/albums/${id}`,
    album
  );
  return response.data;
};

export const deleteAlbum = async (id: number) => {
  const response = await axios.delete(`${JSON_PLACE_HOLDER_URL}/albums/${id}`);
  return response.data;
};
