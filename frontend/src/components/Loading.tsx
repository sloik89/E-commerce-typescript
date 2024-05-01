import { Skeleton } from "./ui/skeleton";
const Loading = () => {
  return (
    <div className="text-xl grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, idx) => {
        return (
          <div key={idx} className="flex flex-col space-y-3">
            <Skeleton className="h-[125px]  w-full rounded-xl flex flex-col"></Skeleton>
          </div>
        );
      })}
    </div>
  );
};

export default Loading;
