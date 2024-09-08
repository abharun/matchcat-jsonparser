"use client";

import { PhotoInfo } from "@/types/resourceInfo";
import { useState } from "react";
import { NextPage } from "next";
import { PhotoAPI } from "@/api";
import Image from "next/image";

interface PhotoEditCardProps {
  photoInfo: PhotoInfo;
  id: number;
}

const PhotoEditCard: NextPage<PhotoEditCardProps> = (props) => {
  const { photoInfo, id } = props;

  const [formData, setFormData] = useState({
    id: photoInfo.id,
    albumId: photoInfo.albumId,
    title: photoInfo.title,
    url: photoInfo.url,
    thumbnailUrl: photoInfo.thumbnailUrl,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onUpdate = () => {
    PhotoAPI.editPhoto(id, formData);
  };

  const onDelete = () => {
    PhotoAPI.deletePhoto(id);
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
              <label htmlFor="userId">AlbumID</label>
              <input
                type="text"
                name="albumId"
                value={formData.albumId}
                onChange={handleChange}
                placeholder="AlbumID"
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
            <div className="flex w-full justify-around items-center">
              <Image
                src={photoInfo.url}
                alt={photoInfo.title}
                width={150}
                height={150}
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

export default PhotoEditCard;
