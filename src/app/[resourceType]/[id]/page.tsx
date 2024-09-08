import {
  AlbumAPI,
  CommentAPI,
  PhotoAPI,
  PostAPI,
  TodoAPI,
  UserAPI,
} from "@/api";
import AlbumCard from "@/components/cards/AlbumCard";
import CommentCard from "@/components/cards/CommentCard";
import PhotoCard from "@/components/cards/PhotoCard";
import PostCard from "@/components/cards/PostCard";
import TodoCard from "@/components/cards/TodoCard";
import UserCard from "@/components/cards/UserCard";
import {
  AlbumInfo,
  CommentInfo,
  PhotoInfo,
  PostInfo,
  TodoInfo,
  UserInfo,
} from "@/types/resourceInfo";

const ResourceDetailPage = async ({
  params,
}: {
  params: { resourceType: string; id: number };
}) => {
  const renderComponent = async () => {
    switch (params.resourceType) {
      case "posts":
        const post: PostInfo = await PostAPI.fetchPost(params.id);
        return <PostCard postInfo={post} />;
      case "comments":
        const comment: CommentInfo = await CommentAPI.fetchComment(params.id);
        return <CommentCard commentInfo={comment} />;
      case "albums":
        const album: AlbumInfo = await AlbumAPI.fetchAlbum(params.id);
        return <AlbumCard albumInfo={album} />;
      case "photos":
        const photo: PhotoInfo = await PhotoAPI.fetchPhoto(params.id);
        return <PhotoCard photoInfo={photo} />;
      case "todos":
        const todo: TodoInfo = await TodoAPI.fetchTodo(params.id);
        return <TodoCard todoInfo={todo} />;
      case "users":
        const user: UserInfo = await UserAPI.fetchUser(params.id);
        return <UserCard userInfo={user} />;
      default:
        return;
    }
  };
  return <div className="flex h-max">{await renderComponent()}</div>;
};

export default ResourceDetailPage;
