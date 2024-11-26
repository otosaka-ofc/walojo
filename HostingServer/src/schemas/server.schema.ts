import { z } from "zod";

export const createServerSchema = z.object({
    name: z.string({
        required_error: "Name must be provided",
    }),
    description: z
        .string({
            required_error: "Description must be provided",
        })
        .optional(),
    os: z.number({
        required_error: "Operating System must be provided",
    }),
    ram: z.string({
        required_error: "RAM must be provided",
    }),
    cpu: z.string({
        required_error: "CPU must be provided",
    }),
    active: z.boolean({
        required_error: "Active status must be provided",
    }),
    date: z.string().datetime().optional(),
});
