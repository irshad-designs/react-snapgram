import * as z from "zod";

// USER
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

// POST
export const createPostValidationSchema = z.object({
  caption: z
    .string()
    .min(5, { message: "Minimum 5 characters." })
    .max(2200, { message: "Maximum 2,200 caracters" }),
  file: z.custom<File[]>(),
  location: z
    .string()
    .min(1, { message: "This field is required" })
    .max(1000, { message: "Maximum 1000 characters." }),
  tags: z.string(),
});
