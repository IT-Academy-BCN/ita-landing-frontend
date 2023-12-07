import { z } from 'zod'

export const FormDataSchema = z.object({
    title: z.string({required_error: "This field is required", invalid_type_error: "Title must be a string",}),
    description: z
        .string({required_error: "This field is required", invalid_type_error: "Description must be a string",})
        .min(6, { message: 'Message must be at least 6 characters.' }),
    url: z
        .string({required_error: "This field is required", invalid_type_error: "URL must be a string",})
        .startsWith("https://", { message: "Must start with https://" }),
    github: z
        .string({required_error: "This field is required", invalid_type_error: "Github URL must be a string",})
        .startsWith("https://", { message: "Must start with https://" }),
    state: z
        .enum(["COMPLETED" && "IN PROGRESS" && "SOON"], {required_error: "This field is required", invalid_type_error: "State must be a string",})
})