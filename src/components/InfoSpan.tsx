const InfoSpan = ({
  tag,
  value,
}: {
  tag: string;
  value: string | number | boolean;
}) => {
  return (
    <div className="flex w-full">
      <p className="p-1 text-sm text-black">{tag}:</p>
      {typeof value === "boolean" ? (
        <div className="p-1 items-center">
          <input type="checkbox" checked={value} readOnly className="w-4 h-4" />
        </div>
      ) : (
        <p className="p-1 text-sm text-black items-center">
          <span>{value}</span>
        </p>
      )}
    </div>
  );
};

export default InfoSpan;
