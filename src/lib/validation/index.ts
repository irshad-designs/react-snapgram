import * as z from "zod";

export const signUpValidationSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Too Short" })
    .max(20, { message: "Too long" }),
  username: z.string().min(2).max(50),
  email: z.string().min(6, { message: "Enter valid email" }),
  password: z.string().min(6, { message: "Strong password needed" }),
});

export const signInValidationSchema = z.object({
  email: z.string().min(6, { message: "Enter valid email" }),
  password: z.string().min(6, { message: "Strong password needed" }),
});
