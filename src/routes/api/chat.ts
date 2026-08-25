import { createFileRoute } from "@tanstack/react-router";
import {
  convertToModelMessages,
  streamText,
  stepCountIs,
  tool,
  type UIMessage,
} from "ai";
import { z } from "zod";

import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { buildSystemPrompt, CONCIERGE_MODEL } from "@/lib/concierge.server";

type ChatRequestBody = { messages?: unknown };

const reference = () => `CL-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;

const contact = {
  name: z.string().min(1).describe("Full name of the guest"),
  email: z.string().min(3).describe("Email address"),
  phone: z.string().min(5).describe("Phone number"),
};

const conciergeTools = {
  capture_reservation: tool({
    description:
      "Record a table reservation request for 1-6 guests. Only call once name, email, phone, date, time and party size are all known.",
    inputSchema: z.object({
      ...contact,
      date: z.string().describe("Requested date, e.g. 'Friday, June 14'"),
      time: z.string().describe("Requested time, e.g. '7:30 PM'"),
      partySize: z.number().int().min(1).max(6).describe("Number of guests"),
      occasion: z.string().nullable().describe("Occasion, or null"),
      notes: z.string().nullable().describe("Allergies, seating or other notes, or null"),
    }),
    execute: async (input) => {
      const ref = reference();
      console.info("[lead:reservation]", ref, JSON.stringify(input));
      return { status: "received" as const, reference: ref, ...input };
    },
  }),
  capture_catering_lead: tool({
    description:
      "Record an off-site catering inquiry. Only call once every required detail is known.",
    inputSchema: z.object({
      ...contact,
      eventType: z.string().describe("Type of event"),
      eventDate: z.string().describe("Event date"),
      guestCount: z.number().int().min(1).describe("Estimated guest count"),
      budgetRange: z.string().describe("Budget range"),
      location: z.string().nullable().describe("Event location, or null"),
      notes: z.string().nullable().describe("Additional notes, or null"),
    }),
    execute: async (input) => {
      const ref = reference();
      console.info("[lead:catering]", ref, JSON.stringify(input));
      return { status: "received" as const, reference: ref, ...input };
    },
  }),
  capture_private_event: tool({
    description:
      "Record an on-site private dining, large party (7+) or buyout inquiry. Only call once every required detail is known.",
    inputSchema: z.object({
      ...contact,
      eventType: z.string().describe("Type of event"),
      eventDate: z.string().describe("Event date"),
      guestCount: z.number().int().min(1).describe("Estimated guest count"),
      preferredSpace: z.string().nullable().describe("The Cellar, La Terrazza, Full Buyout, or null"),
      notes: z.string().nullable().describe("Additional notes, or null"),
    }),
    execute: async (input) => {
      const ref = reference();
      console.info("[lead:private-event]", ref, JSON.stringify(input));
      return { status: "received" as const, reference: ref, ...input };
    },
  }),
};

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as ChatRequestBody;
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const key = process.env["LOVABLE_API_KEY"];
        if (!key) {
          return new Response("The concierge is not configured yet.", { status: 500 });
        }

        const gateway = createLovableAiGatewayProvider(key);

        const result = streamText({
          model: gateway(CONCIERGE_MODEL),
          system: buildSystemPrompt(),
          messages: await convertToModelMessages(messages as UIMessage[]),
          tools: conciergeTools,
          stopWhen: stepCountIs(50),
        });

        return result.toUIMessageStreamResponse({
          originalMessages: messages as UIMessage[],
          onError: (error) => {
            console.error("[concierge]", error);
            const message = error instanceof Error ? error.message : String(error);
            if (message.includes("402")) {
              return "The concierge is out of AI credits right now. Please try again later.";
            }
            if (message.includes("429")) {
              return "The concierge is handling a lot of guests right now. Please try again in a moment.";
            }
            return "Something went wrong reaching the concierge. Please try again.";
          },
        });
      },
    },
  },
});
