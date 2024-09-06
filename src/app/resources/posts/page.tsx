import PostCard from "@/components/cards/PostCard";
import { JSON_PLACE_HOLDER_URL } from "@/consts";
import { PostInfo } from "@/types/resourceInfo";
import axios from "axios";
import { NextPage } from "next";

const PostPage: NextPage = async () => {
  const response = await axios.get(`${JSON_PLACE_HOLDER_URL}/posts`);
  const postList: PostInfo[] = response.data;

  return (
    <>
      {postList.map((post, idx) => (
        <PostCard postInfo={post} key={idx} />
      ))}
    </>
  );
};

export default PostPage;
