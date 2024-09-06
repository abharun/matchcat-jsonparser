import { PhotoInfo } from "@/types/resourceInfo";
import { NextPage } from "next";
import Image from "next/image";
import InfoSpan from "@/components/InfoSpan";

interface PhotoCardProps {
  photoInfo: PhotoInfo;
}

const PhotoCard: NextPage<PhotoCardProps> = (props) => {
  const { photoInfo } = props;
  return (
    <div className="flex w-full h-full border-2">
      <div className="flex-col w-full p-4">
        <div className="flex w-full justify-around items-center">
          <Image
            src={photoInfo.url}
            alt={photoInfo.title}
            width={150}
            height={150}
          />
        </div>
        <div className="w-full">
          <InfoSpan tag="title" value={photoInfo.title} />
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
