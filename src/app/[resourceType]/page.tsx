import AlbumCard from "@/components/cards/AlbumCard";
import CommentCard from "@/components/cards/CommentCard";
import PhotoCard from "@/components/cards/PhotoCard";
import PostCard from "@/components/cards/PostCard";
import TodoCard from "@/components/cards/TodoCard";
import UserCard from "@/components/cards/UserCard";
import { JSON_PLACE_HOLDER_URL } from "@/consts";
import {
  AlbumInfo,
  CommentInfo,
  PhotoInfo,
  PostInfo,
  TodoInfo,
  UserInfo,
} from "@/types/resourceInfo";
import axios from "axios";

const ResourcePage = async ({
  params,
}: {
  params: { resourceType: string };
}) => {
  const response = await axios.get(
    `${JSON_PLACE_HOLDER_URL}/${params.resourceType}`
  );

  const renderComponent = () => {
    switch (params.resourceType) {
      case "posts":
        const postdata: PostInfo[] = response.data;
        return postdata.map((post, idx) => (
          <PostCard postInfo={post} key={idx} />
        ));
      case "comments":
        const commentdata: CommentInfo[] = response.data;
        return commentdata.map((comment, idx) => (
          <CommentCard commentInfo={comment} key={idx} />
        ));
      case "albums":
        const albumdata: AlbumInfo[] = response.data;
        return albumdata.map((album, idx) => (
          <AlbumCard albumInfo={album} key={idx} />
        ));
      case "photos":
        const photodata: PhotoInfo[] = response.data;
        return photodata.map((photo, idx) => (
          <PhotoCard photoInfo={photo} key={idx} />
        ));
      case "todos":
        const tododata: TodoInfo[] = response.data;
        return tododata.map((todo, idx) => (
          <TodoCard todoInfo={todo} key={idx} />
        ));
      case "users":
        const userdata: UserInfo[] = response.data;
        return userdata.map((user, idx) => (
          <UserCard userInfo={user} key={idx} />
        ));
      default:
        return;
    }
  };

  return renderComponent();
};

export default ResourcePage;
