import CommentCard from "@/components/cards/CommentCard";
import { JSON_PLACE_HOLDER_URL } from "@/consts";
import { CommentInfo } from "@/types/resourceInfo";
import axios from "axios";
import { NextPage } from "next";

const CommentPage: NextPage = async () => {
  const response = await axios.get(`${JSON_PLACE_HOLDER_URL}/comments`);
  const commentList: CommentInfo[] = response.data;

  return (
    <>
      {commentList.map((comment, idx) => (
        <CommentCard commentInfo={comment} key={idx} />
      ))}
    </>
  );
};

export default CommentPage;
