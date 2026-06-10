import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import ReactMarkdown from "react-markdown";
import { MessageCircle, Send, X } from "lucide-react";
import { chatWithAssistant } from "@/lib/chat.functions";

interface Msg { role: "user" | "assistant"; content: string }

const SUGGESTIONS = [
  "Quels sont vos honoraires ?",
  "Comment créer mon entreprise ?",
  "Prendre rendez-vous",
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Bonjour 👋 Je suis l'assistant virtuel de **C3F Conseils**. Comment puis-je vous aider aujourd'hui ?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chat = useServerFn(chatWithAssistant);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = async (text: string) => {
    const content = text.trim();
    if (!content || loading) return;
    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const { reply } = await chat({ data: { messages: next } });
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch (e) {
      console.error(e);
      setMessages([...next, { role: "assistant", content: "Désolé, une erreur est survenue. Vous pouvez nous écrire directement à contact@c3f-conseils.fr." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Ouvrir l'assistant"
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 animate-pulse-ring ${open ? "hidden" : ""}`}
      >
        <MessageCircle size={22} strokeWidth={1.8} />
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[min(600px,80vh)] w-[min(380px,calc(100vw-2rem))] flex-col rounded-lg border border-border bg-card shadow-2xl overflow-hidden animate-fade-up">
          <header className="flex items-center justify-between bg-primary px-5 py-4 text-primary-foreground">
            <div>
              <p className="font-display text-lg leading-tight">Assistant C3F</p>
              <p className="text-xs opacity-70">Réponse immédiate</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Fermer" className="rounded-sm p-1 hover:bg-white/10">
              <X size={18} />
            </button>
          </header>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-background">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-md px-3.5 py-2.5 text-sm leading-relaxed ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
                  <div className="prose prose-sm max-w-none [&_p]:my-0 [&_p+p]:mt-2 [&_a]:text-accent [&_strong]:font-semibold">
                    <ReactMarkdown>{m.content}</ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-secondary rounded-md px-3.5 py-2.5 text-sm">
                  <span className="inline-flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}

            {messages.length <= 1 && !loading && (
              <div className="pt-2 flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-xs rounded-full border border-border bg-card px-3 py-1.5 text-foreground/80 hover:border-accent hover:text-foreground transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="border-t border-border bg-card p-3 flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Posez votre question…"
              maxLength={1000}
              className="flex-1 bg-background border border-input rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Envoyer"
              className="inline-flex items-center justify-center rounded-sm bg-primary px-3 text-primary-foreground disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
