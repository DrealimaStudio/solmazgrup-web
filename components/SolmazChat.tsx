"use client";

import {
  ArrowUp,
  Bot,
  Building2,
  MessageCircle,
  RotateCcw,
  X,
} from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const quickQuestions = [
  "Projelerinizi görmek istiyorum",
  "Arsamı değerlendirmek istiyorum",
  "Hizmetleriniz nelerdir?",
  "İletişim bilgilerinizi öğrenmek istiyorum",
];

export default function SolmazChat() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Merhaba, ben Solmaz Grup Dijital Asistanı. Projelerimiz, hizmetlerimiz veya arsa değerlendirme süreci hakkında size yardımcı olabilirim.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading, open]);

  async function sendMessage(text: string) {
    const cleanText = text.trim();

    if (!cleanText || loading) return;

    const userMessage: Message = {
      role: "user",
      content: cleanText,
    };

    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          messages: nextMessages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Chat isteği başarısız oldu."
        );
      }

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.answer,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "Şu anda yanıt veremiyorum. Dilerseniz Solmaz Grup ile doğrudan iletişime geçebilirsiniz.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    sendMessage(input);
  }

  function resetChat() {
    setMessages([
      {
        role: "assistant",
        content:
          "Merhaba, ben Solmaz Grup Dijital Asistanı. Projelerimiz, hizmetlerimiz veya arsa değerlendirme süreci hakkında size yardımcı olabilirim.",
      },
    ]);

    setInput("");
  }

  return (
    <>
      {/* CHAT BUTTON */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Solmaz Grup Dijital Asistan sohbetini aç"
          className="
            fixed bottom-6 right-6 z-[100]
            flex items-center gap-3
            bg-[#171717]
            px-5 py-4
            text-sm font-medium text-white
            shadow-2xl
            transition
            hover:-translate-y-1
            hover:bg-[#222]
          "
        >
          <MessageCircle size={19} strokeWidth={1.7} />

          <span className="hidden sm:inline">
            Solmaz Grup Dijital Asistan
          </span>
        </button>
      )}


      {/* CHAT PANEL */}
      {open && (
        <div
          className="
            fixed inset-0 z-[100]
            flex flex-col
            bg-[#f7f6f2]
            sm:inset-auto
            sm:bottom-6
            sm:right-6
            sm:h-[650px]
            sm:max-h-[calc(100vh-48px)]
            sm:w-[410px]
            sm:overflow-hidden
            sm:border
            sm:border-black/10
            sm:shadow-2xl
          "
        >

          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-black/10 bg-white px-5 py-4">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center bg-[#171717] text-white">
                <Building2 size={18} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Solmaz Grup Dijital Asistan
                </p>

                <p className="mt-0.5 text-xs text-neutral-500">
                  Dijital Proje Danışmanı
                </p>
              </div>

            </div>

            <div className="flex items-center gap-1">

              <button
                type="button"
                onClick={resetChat}
                aria-label="Sohbeti yeniden başlat"
                className="flex h-9 w-9 items-center justify-center text-neutral-500 transition hover:bg-neutral-100 hover:text-black"
              >
                <RotateCcw size={16} />
              </button>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Sohbeti kapat"
                className="flex h-9 w-9 items-center justify-center text-neutral-500 transition hover:bg-neutral-100 hover:text-black"
              >
                <X size={19} />
              </button>

            </div>

          </div>


          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto px-5 py-6">

            <div className="space-y-5">

              {messages.map((message, index) => (
                <div
                  key={index}
                  className={
                    message.role === "user"
                      ? "flex justify-end"
                      : "flex justify-start"
                  }
                >

                  {message.role === "assistant" && (
                    <div className="mr-2 mt-1 flex h-7 w-7 shrink-0 items-center justify-center bg-[#171717] text-white">
                      <Bot size={14} />
                    </div>
                  )}

                  <div
                    className={`
                      max-w-[82%]
                      px-4 py-3
                      text-sm leading-6
                      ${
                        message.role === "user"
                          ? "bg-[#171717] text-white"
                          : "border border-black/10 bg-white text-neutral-700"
                      }
                    `}
                  >
                    {message.content}
                  </div>

                </div>
              ))}


              {/* QUICK QUESTIONS */}
              {messages.length === 1 && (
                <div className="pt-3">

                  <p className="mb-3 text-xs uppercase tracking-[0.18em] text-neutral-400">
                    Nasıl yardımcı olabilirim?
                  </p>

                  <div className="flex flex-col gap-2">

                    {quickQuestions.map((question) => (
                      <button
                        key={question}
                        type="button"
                        onClick={() =>
                          sendMessage(question)
                        }
                        className="
                          border border-black/10
                          bg-white
                          px-4 py-3
                          text-left
                          text-sm text-neutral-700
                          transition
                          hover:border-black/30
                          hover:bg-neutral-50
                        "
                      >
                        {question}
                      </button>
                    ))}

                  </div>

                </div>
              )}


              {/* LOADING */}
              {loading && (
                <div className="flex justify-start">

                  <div className="mr-2 mt-1 flex h-7 w-7 shrink-0 items-center justify-center bg-[#171717] text-white">
                    <Bot size={14} />
                  </div>

                  <div className="border border-black/10 bg-white px-4 py-3">
                    <div className="flex gap-1">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neutral-400" />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neutral-400 [animation-delay:150ms]" />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neutral-400 [animation-delay:300ms]" />
                    </div>
                  </div>

                </div>
              )}

              <div ref={messagesEndRef} />

            </div>

          </div>


          {/* INPUT */}
          <div className="border-t border-black/10 bg-white p-4">

            <form
              onSubmit={handleSubmit}
              className="flex items-end gap-2"
            >

              <textarea
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" &&
                    !event.shiftKey
                  ) {
                    event.preventDefault();

                    sendMessage(input);
                  }
                }}
                placeholder="Mesajınızı yazın..."
                rows={1}
                maxLength={1000}
                className="
                  min-h-[48px]
                  max-h-28
                  flex-1
                  resize-none
                  border
                  border-black/15
                  bg-[#f7f6f2]
                  px-4 py-3
                  text-sm
                  outline-none
                  transition
                  placeholder:text-neutral-400
                  focus:border-black/40
                "
              />

              <button
                type="submit"
                disabled={
                  loading || !input.trim()
                }
                aria-label="Mesaj gönder"
                className="
                  flex h-12 w-12
                  shrink-0
                  items-center
                  justify-center
                  bg-[#171717]
                  text-white
                  transition
                  hover:bg-[#1669a8]
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
              >
                <ArrowUp size={18} />
              </button>

            </form>

            <p className="mt-3 text-center text-[10px] leading-4 text-neutral-400">
              Solmaz Grup Dijital Asistanı hata yapabilir. Güncel proje ve satış
              bilgileri için Solmaz Grup ile iletişime geçiniz.
            </p>

          </div>

        </div>
      )}
    </>
  );
}