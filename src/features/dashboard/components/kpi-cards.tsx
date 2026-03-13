import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


export default function KPICards() {
  return (
    <>
      <Card className="gap-2 justify-between">
        <CardHeader>
          <CardDescription>Posts Generated</CardDescription>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-3xl font-semibold">
            42
          </CardTitle>
        </CardContent>
        <CardFooter>
          <CardDescription>
            Total posts created
          </CardDescription>
        </CardFooter>
      </Card>

      <Card className="gap-2 justify-between">
        <CardHeader>
          <CardDescription>Remaining This Month</CardDescription>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-3xl font-semibold">
            12
          </CardTitle>
        </CardContent>
        <CardFooter>
          <CardDescription>
            Posts available this month
          </CardDescription>
        </CardFooter>
      </Card>

      <Card className="gap-2 justify-between">
        <CardHeader>
          <CardDescription>Credits Remaining</CardDescription>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-3xl font-semibold">
            310
          </CardTitle>
        </CardContent>
        <CardFooter>
          <CardDescription>
            AI credits available
          </CardDescription>
        </CardFooter>
      </Card>

      <Card className="gap-2 justify-between">
        <CardHeader>
          <CardDescription>Posts This Week</CardDescription>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-3xl font-semibold">15</CardTitle>
        </CardContent>
        <CardFooter>
          <CardDescription>
            Posts created in last 7 days
          </CardDescription>
        </CardFooter>
      </Card>
    </>
  )
}
