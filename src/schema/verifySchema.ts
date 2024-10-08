import { z } from "zod";

export const verifySchema = z.object({
  code: z
    .string()
    .length(6, "Verification code must be 6 digits long")
    .regex(/^[0-9]+$/, "Verification code must contain digits"),
});
