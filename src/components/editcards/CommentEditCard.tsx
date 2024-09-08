"use client";

import { CommentInfo } from "@/types/resourceInfo";
import { useState } from "react";
import { NextPage } from "next";
import { CommentAPI } from "@/api";

interface CommentEditCardProps {
  commentInfo: CommentInfo;
  id: number;
}

const CommentEditCard: NextPage<CommentEditCardProps> = (props) => {
  const { commentInfo, id } = props;

  const [formData, setFormData] = useState({
    id: commentInfo.id,
    postId: commentInfo.postId,
    name: commentInfo.name,
    email: commentInfo.email,
    body: commentInfo.body,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onUpdate = () => {
    CommentAPI.editComment(id, formData);
  };

  const onDelete = () => {
    CommentAPI.deleteComment(id);
  };

  return (
    <div className="flex w-full h-full border-2">
      <div className="flex-col w-full h-full">
        <div className="w-full h-full p-8">
        <a href="/comments" className="flex font-bold justify-end">Back</a>
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
              <label htmlFor="userId">PostID</label>
              <input
                type="text"
                name="postId"
                value={formData.postId}
                onChange={handleChange}
                placeholder="PostID"
                className="w-full border rounded-lg px-5 py-2"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="title">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="name"
                className="w-full border rounded-lg px-5 py-2"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="title">Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
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
                placeholder="body"
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

export default CommentEditCard;
