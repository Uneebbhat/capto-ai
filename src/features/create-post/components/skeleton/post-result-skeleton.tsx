import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PostResultSkeleton() {
  return (
    <>
      <Card className="gap-0 p-0 pt-4">
        <CardHeader>
          <div className="flex justify-end">
            <Skeleton className="h-10 w-24 rounded-md" /> {/* Copy button */}
          </div>
        </CardHeader>
        <ScrollArea className="py-4 h-[450px] relative">
          <CardContent>
            <div className="space-y-4">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-6 w-2/3" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-5/6" />
              <Skeleton className="h-6 w-2/3" />
              {/* Add a few more lines for a realistic skeleton look */}
            </div>
          </CardContent>
        </ScrollArea>
      </Card>
    </>
  )
}
