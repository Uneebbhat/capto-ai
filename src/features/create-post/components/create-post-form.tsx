import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CreatePostForm() {
  return (
    <>
      <Card>
        <CardContent>
          <form className="space-y-6">
            <FieldGroup>
              <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                <Field>
                  <FieldLabel>Tone</FieldLabel>
                  <Select name="tone" required>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="informal">Informal</SelectItem>
                        <SelectItem value="friendly">Friendly</SelectItem>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="authoritative">Authoritative</SelectItem>
                        <SelectItem value="excited">Excited</SelectItem>
                        <SelectItem value="funny">Funny</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel>Platform</FieldLabel>
                  <Select name="platform" required>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="twitter">Twitter</SelectItem>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="facebook">Facebook</SelectItem>
                        <SelectItem value="authoritative">Authoritative</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
              </div>

              <Field>
                <FieldLabel>Post Idea</FieldLabel>
                <Textarea
                  name="postIdea"
                  className="textarea textarea-bordered w-full h-30"
                  placeholder="Describe your post idea..."
                  required
                ></Textarea>
              </Field>
            </FieldGroup>
            <Button>
              Generate Post
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  )
}
