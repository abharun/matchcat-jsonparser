import ResourceBoard from "@/components/ResourceBoard";
import MainLayout from "@/layouts/MainLayout";

const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex w-full h-full items-center justify-center">
        <ResourceBoard />
      </div>
    </MainLayout>
  );
};

export default Dashboard;
