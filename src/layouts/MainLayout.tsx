import Headbar from "@/components/HeaderBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full h-full relative">
        <Headbar />
        <div className="w-full h-[calc(100vh - 112px)]">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
