import { z } from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: "Username must be provided",
    }),
    firstname: z.string({
        required_error: "Firstname must be provided",
    }),
    lastname: z.string({
        required_error: "Lastname must be provided",
    }),
    email: z
        .string({
            required_error: "Email must be provided",
        })
        .email({
            message: "Invalid email format",
        }),
    password: z
        .string({
            required_error: "Password must be provided",
        })
        .min(8, {
            message: "Password must be at least 8 characters long",
        }),
});

export const loginSchema = z.object({
    username: z.string({
        required_error: "Username must be provided",
    }),
    password: z
        .string({
            required_error: "Password must be provided",
        })
        .min(8, {
            message: "Password must be at least 8 characters long",
        }),
});
