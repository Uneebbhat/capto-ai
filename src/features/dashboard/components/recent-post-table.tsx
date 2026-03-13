import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function RecentPostTable() {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/2">Post Content</TableHead>
            <TableHead>Platform</TableHead>
            <TableHead>Tone</TableHead>
            <TableHead className="text-right">Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="max-w-md truncate">
              Check out our new product launch this week!
            </TableCell>
            <TableCell>Twitter</TableCell>
            <TableCell>Excited</TableCell>
            <TableCell className="text-right text-muted-foreground">
              2 hours ago
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="max-w-md truncate">
              We value your feedback—let us know your thoughts.
            </TableCell>
            <TableCell>LinkedIn</TableCell>
            <TableCell>Professional</TableCell>
            <TableCell className="text-right text-muted-foreground">
              Yesterday
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="max-w-md truncate">
              Flash Sale! Limited time offer ends tonight.
            </TableCell>
            <TableCell>Instagram</TableCell>
            <TableCell>Urgent</TableCell>
            <TableCell className="text-right text-muted-foreground">
              3 days ago
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="max-w-md truncate">
              Happy Friday! Here are your feel-good updates.
            </TableCell>
            <TableCell>Facebook</TableCell>
            <TableCell>Friendly</TableCell>
            <TableCell className="text-right text-muted-foreground">
              5 days ago
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}
