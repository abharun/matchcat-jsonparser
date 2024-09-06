import { CommentInfo } from "@/types";
import { NextPage } from "next";
import InfoSpan from "@/components/InfoSpan";

interface CommandCardProps {
  commentInfo: CommentInfo;
}

const CommantCard: NextPage<CommandCardProps> = (props) => {
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

export default CommantCard;
