import type { Metadata } from "next";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "İletişim",

  description:
    "Solmaz Grup Milas ofisi iletişim bilgileri, telefon, e-posta, adres ve yol tarifi.",

  alternates: {
    canonical: "/iletisim",
  },

  openGraph: {
    title: "İletişim | Solmaz Grup",
    description:
      "Solmaz Grup ile iletişime geçin. Milas ofisimize ulaşın.",
    url: "/iletisim",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[#f7f5f1] text-[#171717]">
      {/* HERO */}
      <section className="px-6 pb-24 pt-40 md:px-10 lg:px-16 lg:pb-32 lg:pt-48">
        <div className="mx-auto max-w-[1450px]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
            İletişim
          </p>

          <div className="mt-8 grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="text-5xl font-light leading-[0.98] tracking-[-0.045em] md:text-7xl lg:text-[92px]">
                Yeni bir proje
                <br />
                konuşalım.
              </h1>
            </div>

            <div className="flex items-end lg:col-span-3 lg:col-start-10">
              <p className="max-w-sm text-base leading-8 text-neutral-500">
                Projeniz, arsanız veya hizmetlerimiz hakkında bilgi almak için
                bizimle iletişime geçebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-[1450px] px-6 py-16 sm:px-8 lg:px-16 lg:py-20">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.28em] text-neutral-400">
              İletişim Bilgileri
            </p>

            <h2 className="mt-4 text-3xl font-light tracking-[-0.025em] md:text-4xl">
              Bize doğrudan ulaşın.
            </h2>
          </div>

          <div className="grid border border-black/10 md:grid-cols-3">
            {/* TELEFON */}
            <a
              href="tel:+902525131119"
              className="group flex min-h-[180px] flex-col justify-between border-b border-black/10 p-7 transition hover:bg-[#f7f6f2] md:border-b-0 md:border-r"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-400">
                  Telefon
                </span>

                <Phone
                  size={19}
                  strokeWidth={1.4}
                  className="text-neutral-400 transition group-hover:text-[#1669a8]"
                />
              </div>

              <div>
                <p className="text-xl font-light">
                  0 252 513 11 19
                </p>

                <p className="mt-2 text-xs text-neutral-400">
                  Aramak için tıklayın
                </p>
              </div>
            </a>

            {/* E-POSTA */}
            <a
              href="mailto:iletisim@solmazgrup.com"
              className="group flex min-h-[180px] flex-col justify-between border-b border-black/10 p-7 transition hover:bg-[#f7f6f2] md:border-b-0 md:border-r"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-400">
                  E-posta
                </span>

                <Mail
                  size={19}
                  strokeWidth={1.4}
                  className="text-neutral-400 transition group-hover:text-[#1669a8]"
                />
              </div>

              <div>
                <p className="break-all text-xl font-light">
                  iletisim@solmazgrup.com
                </p>

                <p className="mt-2 text-xs text-neutral-400">
                  E-posta göndermek için tıklayın
                </p>
              </div>
            </a>

            {/* OFİS */}
            <div className="flex min-h-[180px] flex-col justify-between p-7">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-400">
                  Ofis
                </span>

                <MapPin
                  size={19}
                  strokeWidth={1.4}
                  className="text-neutral-400"
                />
              </div>

              <div>
                <p className="max-w-sm text-lg font-light leading-7">
                  İsmet Paşa, Atatürk Blv. No:58/1
                  <br />
                  48200 Milas / Muğla
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=İsmet+Paşa+Atatürk+Bulvarı+No+58%2F1+Milas+Muğla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-[#1669a8]"
                >
                  Yol tarifi alın
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-[#f7f5f1] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1100px]">
          <ContactForm />
        </div>
      </section>

      {/* LOCATION */}
      {/* LOCATION */}
<section className="bg-[#171717] px-6 py-24 text-white md:px-10 lg:px-16 lg:py-32">
  <div className="mx-auto grid max-w-[1450px] gap-14 lg:grid-cols-12">

    {/* OFİS BİLGİLERİ */}
    <div className="lg:col-span-5">
      <p className="text-xs uppercase tracking-[0.3em] text-white/40">
        Merkez Ofis
      </p>

      <h2 className="mt-7 text-4xl font-light tracking-[-0.03em] md:text-6xl">
        Milas
        <br />
        Muğla
      </h2>

      <p className="mt-8 max-w-sm text-sm leading-7 text-white/55">
        Solmaz Grup İnşaat Mimarlık Mühendislik Ltd. Şti.
      </p>

      <p className="mt-4 max-w-sm text-sm leading-7 text-white/50">
        İsmet Paşa, Atatürk Blv. No:58/1
        <br />
        48200 Milas / Muğla
      </p>

      <div className="mt-9 flex flex-col items-start gap-4">
        <a
          href="tel:+902525131119"
          className="border-b border-white/20 pb-1 text-sm transition hover:border-white"
        >
          0 252 513 11 19
        </a>

        <a
          href="mailto:iletisim@solmazgrup.com"
          className="border-b border-white/20 pb-1 text-sm transition hover:border-white"
        >
          iletisim@solmazgrup.com
        </a>

        <a
          href="https://solmazgrupgayrimenkulinsaat.sahibinden.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-5 inline-flex items-center gap-3 border-b border-white/25 pb-2 text-sm font-semibold text-white transition hover:border-white"
        >
          Güncel Gayrimenkul İlanlarını Görüntüleyin

          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </a>
      </div>
    </div>

    {/* GOOGLE MAPS */}
    <div className="relative min-h-[460px] overflow-hidden lg:col-span-7">
      <iframe
  src="https://maps.google.com/maps?q=İsmet%20Paşa%20Atatürk%20Bulvarı%20No%3A58%2F1%20Milas%20Muğla&t=&z=16&ie=UTF8&iwloc=&output=embed"
  width="100%"
  height="100%"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Solmaz Grup Milas Ofis Konumu"
  className="absolute inset-0 h-full w-full border-0"
/>

      <a
        href="https://www.google.com/maps/search/?api=1&query=İsmet+Paşa+Atatürk+Bulvarı+No+58%2F1+Milas+Muğla"
        target="_blank"
        rel="noopener noreferrer"
        className="
          absolute bottom-5 left-5 z-10
          inline-flex items-center gap-3
          bg-[#171717] px-5 py-3
          text-sm font-semibold text-white
          shadow-xl
          transition
          hover:bg-[#1669a8]
        "
      >
        <MapPin size={16} />
        Yol Tarifi Al
        <ArrowUpRight size={15} />
      </a>
    </div>

  </div>
</section>
    </main>
  );
}