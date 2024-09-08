import {
  AlbumAPI,
  CommentAPI,
  PhotoAPI,
  PostAPI,
  TodoAPI,
  UserAPI,
} from "@/api";
import PostCard from "@/components/cards/PostCard";
import TodoCard from "@/components/cards/TodoCard";
import UserCard from "@/components/cards/UserCard";
import AlbumEditCard from "@/components/editcards/AlbumEditCard";
import CommentEditCard from "@/components/editcards/CommentEditCard";
import PhotoEditCard from "@/components/editcards/PhotoEditCard";
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
        return <CommentEditCard id={params.id} commentInfo={comment} />;
      case "albums":
        const album: AlbumInfo = await AlbumAPI.fetchAlbum(params.id);
        return <AlbumEditCard id={params.id} albumInfo={album} />;
      case "photos":
        const photo: PhotoInfo = await PhotoAPI.fetchPhoto(params.id);
        return <PhotoEditCard id={params.id} photoInfo={photo} />;
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
  return (
    <div className="grid gap-8 w-1/2 h-full">
      <div className="flex h-max">{await renderComponent()}</div>
    </div>
  );
};

export default ResourceDetailPage;
