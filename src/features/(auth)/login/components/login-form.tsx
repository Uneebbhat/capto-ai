"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { ShineBorder } from "@/components/ui/shine-border"
import useTogglePassword from "@/hooks/useTogglePassword"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import useLogin from "../hooks/useLogin"
import { Spinner } from "@/components/ui/spinner"

export function LoginForm({ ...props }: React.ComponentProps<typeof Card>) {
  const { showPassword, togglePassword } = useTogglePassword()
  const {
    formData,
    loading,
    handleOnChange,
    handleOnSubmit
  } = useLogin()

  return (
    <Card {...props} className="relative">
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your information below to login
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleOnSubmit}
        >
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                name="email"
                onChange={handleOnChange}
                value={formData.email}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  name="password"
                  onChange={handleOnChange}
                  value={formData.password} />
                {showPassword ? <EyeOff className="absolute top-2 right-2 w-5 h-5 cursor-pointer" onClick={togglePassword} /> : <Eye className="absolute top-2 right-2 w-5 h-5 cursor-pointer" onClick={togglePassword} />}
              </div>
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button disabled={loading || !formData.email || !formData.password}>
                  {
                    loading ? <>
                      <Spinner />
                      Login
                    </> : "Login"
                  }
                </Button>
                {/* <Button variant="outline" type="button">
                  Sign up with Google
                </Button> */}
                <FieldDescription className="px-6 text-center">
                  Don&apos;t have an account? <Link href="/signup">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
