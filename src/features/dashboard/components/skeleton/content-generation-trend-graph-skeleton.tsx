import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ContentGenerationTrendGraphSkeleton() {
  return (
    <Card className="animate-pulse">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-6 w-52" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton className="h-4 w-12" />
              <div className="flex-1">
                <Skeleton className="h-4" style={{ width: `${40 + i * 20}px` }} />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
