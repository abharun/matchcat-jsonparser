import _ from "lodash";

export default function ResourceLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { resourceType: string };
}) {
  console.log(params);
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full h-1/6 items-center">
        <span className="text-2xl font-bold p-8">
          {_.capitalize(params.resourceType)}
        </span>
      </div>
      <div className="flex-grow">
        <div className="flex w-full h-full justify-center items-center p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
