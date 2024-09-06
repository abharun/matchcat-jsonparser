import UserCard from "@/components/cards/UserCard";
import { JSON_PLACE_HOLDER_URL } from "@/consts";
import { UserInfo } from "@/types/resourceInfo";
import axios from "axios";
import { NextPage } from "next";

const UserPage: NextPage = async () => {
  const response = await axios.get(`${JSON_PLACE_HOLDER_URL}/users`);
  const userList: UserInfo[] = response.data;

  return (
    <>
      {userList.map((user, idx) => (
        <UserCard userInfo={user} key={idx} />
      ))}
    </>
  );
};

export default UserPage;
