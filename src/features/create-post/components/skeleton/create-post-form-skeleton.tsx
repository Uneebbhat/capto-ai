import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function CreatePostFormSkeleton() {
  return (
    <>
      <Card>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                <div className="flex flex-col gap-2 w-[180px]">
                  <Skeleton className="h-4 w-16 mb-1" /> {/* Tone label */}
                  <Skeleton className="h-10 w-full rounded-md" /> {/* Tone select */}
                </div>
                <div className="flex flex-col gap-2 w-[180px]">
                  <Skeleton className="h-4 w-20 mb-1" /> {/* Platform label */}
                  <Skeleton className="h-10 w-full rounded-md" /> {/* Platform select */}
                </div>
              </div>

              <div className="mt-6">
                <Skeleton className="h-4 w-20 mb-1" /> {/* Post Idea label */}
                <Skeleton className="h-24 w-full rounded-md" /> {/* Textarea */}
              </div>
            </div>
            <Skeleton className="h-10 w-32 mt-2" /> {/* Button */}
          </div>
        </CardContent>
      </Card>
    </>
  )
}
