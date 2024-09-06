import PhotoCard from "@/components/cards/PhotoCard";
import { JSON_PLACE_HOLDER_URL } from "@/consts";
import { PhotoInfo } from "@/types";
import axios from "axios";
import { NextPage } from "next";

const PhotoPage: NextPage = async () => {
  const response = await axios.get(`${JSON_PLACE_HOLDER_URL}/photos`);
  const photoList: PhotoInfo[] = response.data;

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full h-1/6 items-center">
        <span className="text-2xl font-bold p-8">Comments</span>
      </div>
      <div className="flex-grow">
        <div className="flex w-full h-full justify-center items-center p-8">
          <div className="grid gap-8 w-full h-full grid-cols-5 laptop:grid-cols-5 tablet:grid-cols-3 mobile:grid-cols-1">
            {photoList.map((photo, idx) => (
              <PhotoCard photoInfo={photo} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoPage;
