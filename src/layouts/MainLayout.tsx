import Headbar from "@/components/HeadBar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="main-layout w-full h-full relative">
      <Headbar />
      <div className="w-full" style={{ height: "calc(100vh - 112px)" }}>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
