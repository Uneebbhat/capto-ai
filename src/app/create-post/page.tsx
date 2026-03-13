import CreatePostForm from "@/features/create-post/components/create-post-form";
import PostResult from "@/features/create-post/components/post-result";
import CreatePostFormSkeleton from "@/features/create-post/components/skeleton/create-post-form-skeleton";
import PostResultSkeleton from "@/features/create-post/components/skeleton/post-result-skeleton";
import { Suspense } from "react";

export default function CreatePostPage() {
  return (
    <>
      <section className="px-4 md:px-6">
        <h1 className="text-2xl font-semibold">Create Post</h1>
      </section>

      {/* Create Post Form */}
      <section className="px-4 md:px-6">
        <div className="grid grid-cols-1 @xl/main:grid-cols-2 gap-5">
          {/* Form */}
          <div className="md:h-[500px]">
            <Suspense fallback={<CreatePostFormSkeleton />}>
              <CreatePostForm />
            </Suspense>
          </div>

          {/* Post Result */}
          <div>
            <Suspense fallback={<PostResultSkeleton />}>
              <PostResult />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  )
}
