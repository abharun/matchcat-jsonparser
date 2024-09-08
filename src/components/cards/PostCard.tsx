import { PostInfo } from "@/types/resourceInfo";
import { NextPage } from "next";
import InfoSpan from "@/components/InfoSpan";

interface PostCardProps {
  postInfo: PostInfo;
  id: number;
}

const PostCard: NextPage<PostCardProps> = (props) => {
  const { postInfo } = props;
  return (
    <a href={`/posts/${props.id}`}>
      <div className="flex w-full h-full border-2">
        <div className="flex-col w-full h-full">
          <div className="w-full h-full p-2">
            <InfoSpan tag="ID" value={postInfo.id} />
            <InfoSpan tag="UserID" value={postInfo.userId} />
            <InfoSpan tag="Title" value={postInfo.title} />
            <InfoSpan tag="Body" value={postInfo.body} />
          </div>
        </div>
      </div>
    </a>
  );
};

export default PostCard;
