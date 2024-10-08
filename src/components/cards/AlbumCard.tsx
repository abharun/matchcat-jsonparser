import { AlbumInfo } from "@/types/resourceInfo";
import { NextPage } from "next";
import InfoSpan from "@/components/InfoSpan";

interface AlbumCardProps {
  albumInfo: AlbumInfo;
  id: number;
}

const AlbumCard: NextPage<AlbumCardProps> = (props) => {
  const { albumInfo } = props;
  return (
    <a href={`/albums/${props.id}`}>
      <div className="flex w-full h-full border-2">
        <div className="flex-col w-full h-full">
          <div className="w-full h-full p-2">
            <InfoSpan tag="ID" value={albumInfo.id} />
            <InfoSpan tag="UserID" value={albumInfo.userId} />
            <InfoSpan tag="Title" value={albumInfo.title} />
          </div>
        </div>
      </div>
    </a>
  );
};

export default AlbumCard;
