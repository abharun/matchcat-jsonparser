import ResourceBoard from "@/components/ResourceBoard";
import { NextPage } from "next";

const Dashboard: NextPage = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <ResourceBoard />
    </div>
  );
};

export default Dashboard;
