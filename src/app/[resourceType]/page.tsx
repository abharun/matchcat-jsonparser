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

const ResourcePage = async ({
  params,
}: {
  params: { resourceType: string };
}) => {
  const renderComponent = async () => {
    switch (params.resourceType) {
      case "posts":
        const postdata: PostInfo[] = await PostAPI.fetchPosts();
        return postdata.map((post, idx) => (
          <PostCard postInfo={post} id={idx + 1} key={idx} />
        ));
      case "comments":
        const commentdata: CommentInfo[] = await CommentAPI.fetchComments();
        return commentdata.map((comment, idx) => (
          <CommentCard commentInfo={comment} id={idx + 1} key={idx} />
        ));
      case "albums":
        const albumdata: AlbumInfo[] = await AlbumAPI.fetchAlbums();
        return albumdata.map((album, idx) => (
          <AlbumCard albumInfo={album} id={idx + 1} key={idx} />
        ));
      case "photos":
        const photodata: PhotoInfo[] = await PhotoAPI.fetchPhotos();
        return photodata.map((photo, idx) => (
          <PhotoCard photoInfo={photo} id={idx + 1} key={idx} />
        ));
      case "todos":
        const tododata: TodoInfo[] = await TodoAPI.fetchTodos();
        return tododata.map((todo, idx) => (
          <TodoCard todoInfo={todo} id={idx + 1} key={idx} />
        ));
      case "users":
        const userdata: UserInfo[] = await UserAPI.fetchUsers();
        return userdata.map((user, idx) => (
          <UserCard userInfo={user} id={idx + 1} key={idx} />
        ));
      default:
        return;
    }
  };

  return (
    <div className="grid gap-8 w-full h-full grid-cols-5 laptop:grid-cols-5 tablet:grid-cols-3 mobile:grid-cols-1">
      {renderComponent()}
    </div>
  );
};

export default ResourcePage;
