import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { MessageSquare, Send, Sparkles, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { LeadCard } from "@/components/concierge/lead-card";
import { useConcierge } from "@/components/concierge/concierge-context";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import { restaurant } from "@/config/restaurant";
import { cn } from "@/lib/utils";

const suggestions = [
  "Book a table for two on Friday",
  "What's good for a vegetarian?",
  "Catering for 40 people",
  "Host a birthday dinner here",
];

type AnyRecord = Record<string, unknown>;

function renderToolOutput(toolName: string, output: AnyRecord) {
  const ref = typeof output.reference === "string" ? output.reference : undefined;
  if (toolName === "capture_reservation") {
    return (
      <LeadCard
        kind="reservation"
        title="Reservation Requested"
        reference={ref}
        rows={[
          { label: "Name", value: output.name as string },
          { label: "Party", value: `${output.partySize} guests` },
          { label: "Date", value: output.date as string },
          { label: "Time", value: output.time as string },
          { label: "Email", value: output.email as string },
          { label: "Phone", value: output.phone as string },
          { label: "Occasion", value: output.occasion as string },
          { label: "Notes", value: output.notes as string },
        ]}
      />
    );
  }
  if (toolName === "capture_catering_lead") {
    return (
      <LeadCard
        kind="catering"
        title="Catering Inquiry Received"
        reference={ref}
        rows={[
          { label: "Name", value: output.name as string },
          { label: "Event", value: output.eventType as string },
          { label: "Date", value: output.eventDate as string },
          { label: "Guests", value: output.guestCount as number },
          { label: "Budget", value: output.budgetRange as string },
          { label: "Location", value: output.location as string },
          { label: "Email", value: output.email as string },
          { label: "Phone", value: output.phone as string },
        ]}
      />
    );
  }
  if (toolName === "capture_private_event") {
    return (
      <LeadCard
        kind="event"
        title="Private Event Inquiry Received"
        reference={ref}
        rows={[
          { label: "Name", value: output.name as string },
          { label: "Event", value: output.eventType as string },
          { label: "Date", value: output.eventDate as string },
          { label: "Guests", value: output.guestCount as number },
          { label: "Space", value: output.preferredSpace as string },
          { label: "Email", value: output.email as string },
          { label: "Phone", value: output.phone as string },
        ]}
      />
    );
  }
  return null;
}

export function ConciergeWidget() {
  const { isOpen, open, close, consumePendingPrompt } = useConcierge();
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const transport = useMemo(() => new DefaultChatTransport({ api: "/api/chat" }), []);

  const { messages, sendMessage, status, error } = useChat({ transport });
  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (!isOpen) return;
    const pending = consumePendingPrompt();
    if (pending) {
      void sendMessage({ text: pending });
    } else {
      inputRef.current?.focus();
    }
  }, [isOpen, consumePendingPrompt, sendMessage]);

  const submit = () => {
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    void sendMessage({ text });
  };

  return (
    <>
      {!isOpen ? (
        <button
          type="button"
          onClick={() => open()}
          aria-label="Ask Lumina, the AI concierge"
          className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-gold px-5 py-3.5 text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] md:bottom-8 md:right-8"
        >
          <span className="pointer-events-none absolute inset-0 rounded-full bg-gold/60 pulse-ring" />
          <MessageSquare className="relative size-4" />
          <span className="relative text-[0.7rem] font-medium uppercase tracking-[0.2em]">
            Ask Lumina
          </span>
        </button>
      ) : null}

      <div
        className={cn(
          "fixed inset-0 z-50 flex items-stretch justify-end transition-opacity duration-300 sm:p-5 md:p-8",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <button
          type="button"
          aria-label="Close concierge"
          onClick={close}
          className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
        />
        <div
          className={cn(
            "relative flex h-full w-full flex-col overflow-hidden border border-border bg-background shadow-lift transition-transform duration-500 sm:h-auto sm:max-h-[min(46rem,100%)] sm:w-[27rem] sm:self-end sm:rounded-2xl",
            isOpen ? "translate-y-0" : "translate-y-6",
          )}
        >
          <div className="flex items-center gap-3 border-b border-border bg-surface px-5 py-4">
            <span className="inline-flex size-9 items-center justify-center rounded-full bg-gold/15">
              <Sparkles className="size-4 text-gold" />
            </span>
            <div className="min-w-0">
              <p className="font-display text-lg leading-tight text-cream">Lumina</p>
              <p className="truncate text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                {restaurant.name} · AI Concierge
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="ml-auto inline-flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-cream"
            >
              <X className="size-4" />
            </button>
          </div>

          <Conversation className="min-h-0 flex-1 sm:h-[26rem]">
            <ConversationContent className="gap-6 p-5">
              {messages.length === 0 ? (
                <div className="space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Good evening — I'm Lumina, the concierge for {restaurant.name}. I can recommend
                    dishes, answer questions, book your table, or plan a private event or catering
                    order.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => void sendMessage({ text: s })}
                        className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-gold/50 hover:text-cream"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              {messages.map((message) => (
                <Message key={message.id} from={message.role}>
                  <MessageContent>
                    {message.parts.map((part, index) => {
                      if (part.type === "text") {
                        return (
                          <MessageResponse key={index}>{part.text}</MessageResponse>
                        );
                      }
                      if (
                        part.type.startsWith("tool-") &&
                        "state" in part &&
                        part.state === "output-available"
                      ) {
                        return (
                          <div key={index}>
                            {renderToolOutput(
                              part.type.replace("tool-", ""),
                              (part as { output: AnyRecord }).output,
                            )}
                          </div>
                        );
                      }
                      return null;
                    })}
                  </MessageContent>
                </Message>
              ))}

              {busy ? (
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Lumina is typing…
                </p>
              ) : null}

              {error ? (
                <p className="rounded-md border border-destructive/40 bg-destructive/10 p-3 text-xs text-foreground">
                  {error.message || "Something went wrong. Please try again."}
                </p>
              ) : null}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>

          <div className="border-t border-border bg-surface p-3">
            <div className="flex items-end gap-2 rounded-xl border border-input bg-background p-2">
              <textarea
                ref={inputRef}
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    submit();
                  }
                }}
                placeholder="Ask about the menu, book a table…"
                className="max-h-28 min-h-9 flex-1 resize-none bg-transparent px-2 py-1.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              <button
                type="button"
                onClick={submit}
                disabled={busy || !input.trim()}
                aria-label="Send message"
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-gold text-primary-foreground transition-opacity disabled:opacity-40"
              >
                <Send className="size-4" />
              </button>
            </div>
            <p className="mt-2 text-center text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">
              AI concierge by Aqalion
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
