import PhotoCard from "@/components/cards/PhotoCard";
import { JSON_PLACE_HOLDER_URL } from "@/consts";
import { PhotoInfo } from "@/types/resourceInfo";
import axios from "axios";
import { NextPage } from "next";

const PhotoPage: NextPage = async () => {
  const response = await axios.get(`${JSON_PLACE_HOLDER_URL}/photos`);
  const photoList: PhotoInfo[] = response.data;

  return (
    <>
      {photoList.map((photo, idx) => (
        <PhotoCard photoInfo={photo} key={idx} />
      ))}
    </>
  );
};

export default PhotoPage;
