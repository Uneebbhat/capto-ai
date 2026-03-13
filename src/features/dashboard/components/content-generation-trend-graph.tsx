"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A horizontal bar chart"

const chartData = [
  { day: "Monday", post: 186 },
  { day: "Tuesday", post: 305 },
  { day: "Wednesday", post: 237 },
  { day: "Thursday", post: 73 },
  { day: "Friday", post: 209 },
  { day: "Saturday", post: 214 },
  { day: "Sunday", post: 10 },
]

const chartConfig = {
  desktop: {
    label: "Post",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

const maxPosts = Math.max(...chartData.map((d) => d.post))

export function ContentGenerationTrendGraph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Generation Trend Graph</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis
              type="number"
              dataKey="post"
              domain={[0, maxPosts]}
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            // show X axis and format numbers if needed
            />
            <YAxis
              dataKey="day"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="post" fill="var(--color-desktop)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
