export interface TodoInfo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface CommentInfo {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface PhotoInfo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
