"use client";

import { TodoInfo } from "@/types/resourceInfo";
import { useState } from "react";
import { NextPage } from "next";
import { TodoAPI } from "@/api";

interface TodoEditCardProps {
  todoInfo: TodoInfo;
  id: number;
}

const TodoEditCard: NextPage<TodoEditCardProps> = (props) => {
  const { todoInfo, id } = props;

  const [formData, setFormData] = useState({
    id: todoInfo.id,
    userId: todoInfo.userId,
    title: todoInfo.title,
    completed: todoInfo.completed,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const onUpdate = () => {
    TodoAPI.editTodo(id, formData);
  };

  const onDelete = () => {
    TodoAPI.deleteTodo(id);
  };

  return (
    <div className="flex w-full h-full border-2">
      <div className="flex-col w-full h-full">
        <div className="w-full h-full p-8">
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
              <label htmlFor="title">Status</label>
              <input
                type="checkbox"
                name="completed"
                checked={formData.completed}
                onChange={handleStatus}
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

export default TodoEditCard;
