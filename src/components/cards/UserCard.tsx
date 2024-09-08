import { UserInfo } from "@/types/resourceInfo";
import { NextPage } from "next";
import InfoSpan from "@/components/InfoSpan";

interface UserCardProps {
  userInfo: UserInfo;
  id: number;
}

const UserCard: NextPage<UserCardProps> = (props) => {
  const { userInfo } = props;
  return (
    <a href={`/users/${props.id}`}>
      <div className="flex w-full h-full border-2">
        <div className="flex-col w-full h-full">
          <div className="w-full h-full p-2">
            <InfoSpan tag="ID" value={userInfo.id} />
            <InfoSpan tag="Name" value={userInfo.name} />
            <InfoSpan tag="Username" value={userInfo.username} />
            <InfoSpan tag="email" value={userInfo.email} />
            <InfoSpan
              tag="Address"
              value={`${userInfo.address.street} ${userInfo.address.suite} ${userInfo.address.city}`}
            />
            <InfoSpan tag="Phone" value={userInfo.phone} />
            <InfoSpan tag="Website" value={userInfo.website} />
            <InfoSpan tag="Company" value={userInfo.company.name} />
          </div>
        </div>
      </div>
    </a>
  );
};

export default UserCard;
