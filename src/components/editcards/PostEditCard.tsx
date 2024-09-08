"use client";

import { PostInfo } from "@/types/resourceInfo";
import { useState } from "react";
import { NextPage } from "next";
import { PostAPI } from "@/api";

interface PostEditCardProps {
  postInfo: PostInfo;
  id: number;
}

const PostEditCard: NextPage<PostEditCardProps> = (props) => {
  const { postInfo, id } = props;

  const [formData, setFormData] = useState({
    id: postInfo.id,
    userId: postInfo.userId,
    title: postInfo.title,
    body: postInfo.body,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onUpdate = () => {
    PostAPI.editPost(id, formData);
  };

  const onDelete = () => {
    PostAPI.deletePost(id);
  };

  return (
    <div className="flex w-full h-full border-2">
      <div className="flex-col w-full h-full">
        <div className="w-full h-full p-8">
        <a href="/posts" className="flex font-bold justify-end">Back</a>
          <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <label htmlFor="id">ID</label>
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
                placeholder="ID"
                className="w-full border rounded-lg px-5 py-2"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="userId">UserID</label>
              <input
                type="text"
                name="userId"
                value={formData.userId}
                onChange={handleChange}
                placeholder="UserID"
                className="w-full border rounded-lg px-5 py-2"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                className="w-full border rounded-lg px-5 py-2"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="title">Body</label>
              <input
                type="text"
                name="body"
                value={formData.body}
                onChange={handleChange}
                placeholder="Body"
                className="w-full border rounded-lg px-5 py-2"
              />
            </div>
            <div className="flex justify-around gap-2">
              <button
                type="button"
                onClick={onUpdate}
                className="border-2 border-green-600 rounded-lg px-4 py-2"
              >
                Update
              </button>
              <button
                type="button"
                onClick={onDelete}
                className="border-2 border-red-600 rounded-lg px-4 py-2"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostEditCard;
