import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { env } from "@/env";

const contactSubmissionSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export const contactRouter = createTRPCRouter({
  submitForm: publicProcedure
    .input(contactSubmissionSchema)
    .mutation(async ({ input }) => {
      try {
        const response = await fetch(
          `${env.STRAPI_BACKEND_URL}/api/contacts?status=draft`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${env.STRAPI_API_TOKEN}`,
            },
            body: JSON.stringify({
              data: {
                fullname: input.name,
                email: input.email,
                message: input.message,
              },
            }),
          },
        );
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || "Failed to submit contact form");
        }
        const data = await response.json();
        return {
          status: "success",
          data: data,
          message: "Thank you for your message. We will get back to you soon.",
        };
      } catch (error) {
        console.log({ error });
        throw new Error(
          error instanceof Error
            ? error.message
            : "Failed to submit contact form",
        );
      }
    }),
});
