import { CommentInfo } from "@/types";
import { NextPage } from "next";

const InfoSpan = ({
  tag,
  value,
}: {
  tag: string;
  value: string | number | boolean;
}) => {
  return (
    <div className="flex w-full">
      <p className="p-1 text-sm text-black">{tag}:</p>
      {typeof value === "boolean" ? (
        <div className="p-1 items-center">
          <input type="checkbox" checked={value} readOnly className="w-4 h-4" />
        </div>
      ) : (
        <p className="p-1 text-sm text-black items-center">
          <span>{value}</span>
        </p>
      )}
    </div>
  );
};

interface CommandCardProps {
  commentInfo: CommentInfo;
}

const CommandCard: NextPage<CommandCardProps> = (props) => {
  const { commentInfo } = props;
  return (
    <div className="flex w-full h-full border-2">
      <div className="flex justify-center items-center shadow-sm">
        <div className="flex-col w-full h-full">
          <div className="w-full h-full p-2">
            <InfoSpan tag="ID" value={commentInfo.id} />
            <InfoSpan tag="PostID" value={commentInfo.postId} />
            <InfoSpan tag="Name" value={commentInfo.name} />
            <InfoSpan tag="Email" value={commentInfo.email} />
            <InfoSpan tag="Body" value={commentInfo.body} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandCard;
