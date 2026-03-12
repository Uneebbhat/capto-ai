import z from "zod";

const LoginSchema = z.object({
  email: z
    .string({ error: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string({ error: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters long" })
});

export default LoginSchema;