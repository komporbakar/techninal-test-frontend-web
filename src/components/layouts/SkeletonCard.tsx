import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Skeleton className="h-[200px] w-full rounded-xl bg-slate-200" />
        <div className="space-y-2 mt-2">
          <Skeleton className="h-5 w-full bg-slate-200" />
          <Skeleton className="h-4 w-[250px] bg-slate-200" />
          <Skeleton className="h-4 w-[250px] bg-slate-200" />
          <Skeleton className="h-10  bg-slate-200" />
          <div className="flex flex-nowrap justify-between">
            <Skeleton className="h-2 w-[100px] bg-slate-200" />
            <Skeleton className="h-2 w-[100px] bg-slate-200" />
          </div>
        </div>
      </div>
      <div>
        <Skeleton className="h-[200px] w-full rounded-xl bg-slate-200" />
        <div className="space-y-2 mt-2">
          <Skeleton className="h-5 w-full bg-slate-200" />
          <Skeleton className="h-4 w-[250px] bg-slate-200" />
          <Skeleton className="h-4 w-[250px] bg-slate-200" />
          <Skeleton className="h-10  bg-slate-200" />
          <div className="flex flex-nowrap justify-between">
            <Skeleton className="h-2 w-[100px] bg-slate-200" />
            <Skeleton className="h-2 w-[100px] bg-slate-200" />
          </div>
        </div>
      </div>
      <div>
        <Skeleton className="h-[200px] w-full rounded-xl bg-slate-200" />
        <div className="space-y-2 mt-2">
          <Skeleton className="h-5 w-full bg-slate-200" />
          <Skeleton className="h-4 w-[250px] bg-slate-200" />
          <Skeleton className="h-4 w-[250px] bg-slate-200" />
          <Skeleton className="h-10  bg-slate-200" />
          <div className="flex flex-nowrap justify-between">
            <Skeleton className="h-2 w-[100px] bg-slate-200" />
            <Skeleton className="h-2 w-[100px] bg-slate-200" />
          </div>
        </div>
      </div>
      <div>
        <Skeleton className="h-[200px] w-full rounded-xl bg-slate-200" />
        <div className="space-y-2 mt-2">
          <Skeleton className="h-5 w-full bg-slate-200" />
          <Skeleton className="h-4 w-[250px] bg-slate-200" />
          <Skeleton className="h-4 w-[250px] bg-slate-200" />
          <Skeleton className="h-10  bg-slate-200" />
          <div className="flex flex-nowrap justify-between">
            <Skeleton className="h-2 w-[100px] bg-slate-200" />
            <Skeleton className="h-2 w-[100px] bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
