import PostCard from "@/components/cards/PostCard";
import { JSON_PLACE_HOLDER_URL } from "@/consts";
import { PostInfo } from "@/types/resourceInfo";
import axios from "axios";
import { NextPage } from "next";

const PostPage: NextPage = async () => {
  const response = await axios.get(`${JSON_PLACE_HOLDER_URL}/posts`);
  const postList: PostInfo[] = response.data;

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full h-1/6 items-center">
        <span className="text-2xl font-bold p-8">Posts</span>
      </div>
      <div className="flex-grow">
        <div className="flex w-full h-full justify-center items-center p-8">
          <div className="grid gap-8 w-full h-full grid-cols-5 laptop:grid-cols-5 tablet:grid-cols-3 mobile:grid-cols-1">
            {postList.map((post, idx) => (
              <PostCard postInfo={post} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
