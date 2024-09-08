import {
  AlbumAPI,
  CommentAPI,
  PhotoAPI,
  PostAPI,
  TodoAPI,
  UserAPI,
} from "@/api";
import AlbumEditCard from "@/components/editcards/AlbumEditCard";
import CommentEditCard from "@/components/editcards/CommentEditCard";
import PhotoEditCard from "@/components/editcards/PhotoEditCard";
import PostEditCard from "@/components/editcards/PostEditCard";
import TodoEditCard from "@/components/editcards/TodoEditCard";
import UserEditCard from "@/components/editcards/UserEditCard";
import {
  AlbumInfo,
  CommentInfo,
  PhotoInfo,
  PostInfo,
  TodoInfo,
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
        return <PostEditCard id={params.id} postInfo={post} />;
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
        return <TodoEditCard id={params.id} todoInfo={todo} />;
      case "users":
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const user: any = await UserAPI.fetchUser(params.id);
        return <UserEditCard id={params.id} userInfo={user} />;
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
