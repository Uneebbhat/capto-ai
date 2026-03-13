import { ContentGenerationTrendGraph } from "@/features/dashboard/components/content-generation-trend-graph";
import KPICards from "@/features/dashboard/components/kpi-cards";
import RecentPostTable from "@/features/dashboard/components/recent-post-table";
import ContentGenerationTrendGraphSkeleton from "@/features/dashboard/components/skeleton/content-generation-trend-graph-skeleton";
import KPICardsSkeleton from "@/features/dashboard/components/skeleton/kpi-cards-skeleton";
import RecentPostTableSkeleton from "@/features/dashboard/components/skeleton/recent-post-table-skeleton";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <>
      <section className="px-4 md:px-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </section>

      {/* KPI Cards */}
      <section className="px-4 md:px-6">
        <div className="grid grid-cols-1 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 gap-5">
          <Suspense fallback={<KPICardsSkeleton />}>
            <KPICards />
          </Suspense>
        </div>
      </section>

      {/* Content Generation Trend Graph */}
      <section className="px-4 md:px-6">
        <Suspense fallback={<ContentGenerationTrendGraphSkeleton />}>
          <ContentGenerationTrendGraph />
        </Suspense>
      </section>

      {/* Recent Post Table */}
      <section className="px-4 md:px-6 pb-6">
        <h2 className="text-xl font-semibold mb-4">Recently Created Posts</h2>
        <div className="overflow-hidden rounded-lg border bg-card">
          <Suspense fallback={<RecentPostTableSkeleton />}>
            <RecentPostTable />
          </Suspense>
        </div>
      </section>
    </>
  )
}
