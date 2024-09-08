"use client";

import { useState } from "react";
import { NextPage } from "next";
import { UserAPI } from "@/api";

interface UserEditCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userInfo: any;
  id: number;
}

const UserEditCard: NextPage<UserEditCardProps> = (props) => {
  const { id, userInfo } = props;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [formData, setFormData] = useState<any>(userInfo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [name]: value,
      },
    });
  };

  const handleGeoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        geo: {
          ...formData.address.geo,
          [name]: value,
        },
      },
    });
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      company: {
        ...formData.company,
        [name]: value,
      },
    });
  };

  const onUpdate = () => {
    UserAPI.editUser(id, formData);
  };

  const onDelete = () => {
    UserAPI.deleteUser(id);
  };

  const GroupBox = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => {
    return (
      <div className="border border-gray-300 rounded-md p-4">
        <div className="text-lg font-semibold mb-2">{title}</div>
        <div>{children}</div>
      </div>
    );
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
              <label htmlFor="userId">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full border rounded-lg px-5 py-2"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="title">UserName</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="UserName"
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

            <GroupBox title="Address">
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <label htmlFor="title">Street</label>
                  <input
                    type="text"
                    name="street"
                    value={formData.address.street}
                    onChange={handleAddrChange}
                    placeholder="Street"
                    className="w-full border rounded-lg px-4"
                  />
                </div>
                <div className="flex gap-2">
                  <label htmlFor="title">Suite</label>
                  <input
                    type="text"
                    name="suite"
                    value={formData.address.suite}
                    onChange={handleAddrChange}
                    placeholder="Suite"
                    className="w-full border rounded-lg px-4"
                  />
                </div>
                <div className="flex gap-2">
                  <label htmlFor="title">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.address.city}
                    onChange={handleAddrChange}
                    placeholder="City"
                    className="w-full border rounded-lg px-4"
                  />
                </div>
                <div className="flex gap-2">
                  <label htmlFor="title">Zipcode</label>
                  <input
                    type="text"
                    name="zipcode"
                    value={formData.address.zipcode}
                    onChange={handleAddrChange}
                    placeholder="Zipcode"
                    className="w-full border rounded-lg px-4"
                  />
                </div>
                <div className="flex gap-2">
                  <label htmlFor="title">Lat</label>
                  <input
                    type="text"
                    name="lat"
                    value={formData.address.geo.lat}
                    onChange={handleGeoChange}
                    placeholder="Lat"
                    className="w-full border rounded-lg px-4"
                  />
                </div>
                <div className="flex gap-2">
                  <label htmlFor="title">Lng</label>
                  <input
                    type="text"
                    name="lng"
                    value={formData.address.geo.lng}
                    onChange={handleGeoChange}
                    placeholder="Lng"
                    className="w-full border rounded-lg px-4"
                  />
                </div>
              </div>
            </GroupBox>

            <div className="flex flex-col gap-3">
              <label htmlFor="title">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full border rounded-lg px-5 py-2"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="title">Website</label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Website"
                className="w-full border rounded-lg px-5 py-2"
              />
            </div>
            <GroupBox title="Company">
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <label htmlFor="title">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.company.name}
                    onChange={handleCompanyChange}
                    placeholder="Name"
                    className="w-full border rounded-lg px-4"
                  />
                </div>
                <div className="flex gap-2">
                  <label htmlFor="title">CatchPhrase</label>
                  <input
                    type="text"
                    name="catchPhrase"
                    value={formData.company.catchPhrase}
                    onChange={handleCompanyChange}
                    placeholder="catchPhrase"
                    className="w-full border rounded-lg px-4"
                  />
                </div>
                <div className="flex gap-2">
                  <label htmlFor="title">BS</label>
                  <input
                    type="text"
                    name="bs"
                    value={formData.company.bs}
                    onChange={handleCompanyChange}
                    placeholder="bs"
                    className="w-full border rounded-lg px-4"
                  />
                </div>
              </div>
            </GroupBox>
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

export default UserEditCard;
