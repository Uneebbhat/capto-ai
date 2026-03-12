import z from "zod"

const SignupSchema = z.object({
  name: z
    .string({ error: "Name is required" })
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name must be at most 50 characters long" }),
  email: z
    .string({ error: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string({ error: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters long" })
})

export default SignupSchema