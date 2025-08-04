import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonDemo() {
  return (
    <div className="flex flex-col space-x-4">
      {/* <Skeleton className="h-12 w-12 rounded-full" /> */}
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="mt-2 h-4 w-full" />
      <Skeleton className="mt-2 h-24 w-full" />

      <Skeleton className="mt-4 h-4 w-full" />
    </div>
  );
}

export default SkeletonDemo;
