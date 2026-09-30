"use client";

import { ArrowUpRight } from "lucide-react";

type ProjectWhatsAppButtonProps = {
  projectTitle: string;
};

export default function ProjectWhatsAppButton({
  projectTitle,
}: ProjectWhatsAppButtonProps) {
  function handleWhatsApp() {
    // Buraya ContactForm'da kullandığın
    // mevcut WhatsApp numarasını aynen yaz.
    const whatsappNumber = "905322480435";

    const message = `Merhaba Solmaz Grup,

${projectTitle} hakkında bilgi almak istiyorum.

Projenin detayları hakkında benimle iletişime geçebilir misiniz?`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <button
      type="button"
      onClick={handleWhatsApp}
      className="group inline-flex items-center gap-3 border-b border-white/30 pb-2 text-sm font-semibold text-white transition hover:border-white"
    >
      WhatsApp&apos;tan Bilgi Al

      <ArrowUpRight
        size={16}
        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
      />
    </button>
  );
}