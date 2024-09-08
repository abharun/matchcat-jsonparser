import _ from "lodash";

export default function ResourceLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { resourceType: string }
}) {
  console.log(params);
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full h-1/6 items-center">
        <span className="text-2xl font-bold p-8">{_.capitalize(params.resourceType)}</span>
      </div>
      <div className="flex-grow">
        <div className="flex w-full h-full justify-center items-center p-8">
          <div className="grid gap-8 w-full h-full grid-cols-5 laptop:grid-cols-5 tablet:grid-cols-3 mobile:grid-cols-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
