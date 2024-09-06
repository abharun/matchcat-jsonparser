import { PhotoInfo } from "@/types";
import { NextPage } from "next";
import Image from "next/image";

interface PhotoCardProps {
  photoInfo: PhotoInfo;
}

const PhotoCard: NextPage<PhotoCardProps> = (props) => {
  const { photoInfo } = props;
  return (
    <div className="flex w-full h-full border-2">
      <div className="flex justify-center items-center shadow-sm">
        <div className="flex-col w-full h-full">
          <div className="w-full h-full p-2">
            <Image src={photoInfo.thumbnailUrl} alt={photoInfo.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
