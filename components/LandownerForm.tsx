"use client";

import { FormEvent } from "react";
import {
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

export default function LandownerForm() {
  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const location = String(formData.get("location") || "");
    const size = String(formData.get("size") || "");
    const parcel = String(formData.get("parcel") || "");
    const message = String(formData.get("message") || "");

    const whatsappMessage = `
Merhaba Solmaz Grup,

Web sitenizdeki *Arsa Sahipleri* bölümünden iletişime geçiyorum.

*İletişim Bilgilerim*
Ad Soyad: ${name}
Telefon: ${phone}
E-posta: ${email || "Belirtilmedi"}

*Arsa Bilgileri*
Konum: ${location}
Yaklaşık Büyüklük: ${size || "Belirtilmedi"}
Ada / Parsel: ${parcel || "Belirtilmedi"}

*Ek Bilgi*
${message || "Ek bilgi belirtilmedi."}

Arsamın proje potansiyeli hakkında görüşmek istiyorum.
    `.trim();

    const whatsappNumber = "905322480435";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div className="border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:p-10">
      {/* FORM BAŞLIĞI */}
      <div className="mb-9 border-b border-white/10 pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5ca4d8]">
          Arsa Bilgileri
        </p>

        <h3 className="mt-4 text-2xl font-light tracking-[-0.02em] text-white md:text-3xl">
          Değerlendirme bilgilerinizi paylaşın.
        </h3>

        <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">
          Arsanızla ilgili temel bilgileri aşağıdaki alanlara
          girin. Zorunlu alanlar * ile işaretlenmiştir.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-7"
      >
        {/* AD SOYAD + TELEFON */}
        <div className="grid gap-6 md:grid-cols-2">
          <Field
            label="Ad Soyad"
            name="name"
            placeholder="Adınızı ve soyadınızı yazın"
            required
          />

          <Field
            label="Telefon"
            name="phone"
            type="tel"
            placeholder="05XX XXX XX XX"
            required
          />
        </div>

        {/* E-POSTA + KONUM */}
        <div className="grid gap-6 md:grid-cols-2">
          <Field
            label="E-posta"
            name="email"
            type="email"
            placeholder="ornek@email.com"
          />

          <Field
            label="Arsanın Konumu"
            name="location"
            placeholder="Örn. Milas / Muğla"
            required
          />
        </div>

        {/* BÜYÜKLÜK + ADA/PARSEL */}
        <div className="grid gap-6 md:grid-cols-2">
          <Field
            label="Yaklaşık Büyüklük"
            name="size"
            placeholder="Örn. 2.500 m²"
          />

          <Field
            label="Ada / Parsel"
            name="parcel"
            placeholder="Varsa belirtiniz"
          />
        </div>

        {/* EK BİLGİ */}
        <div>
          <label
            htmlFor="message"
            className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.16em] text-white/65"
          >
            Ek Bilgi
          </label>

          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Arsanız, mevcut durumu veya proje beklentiniz hakkında eklemek istediğiniz bilgileri yazabilirsiniz."
            className="
              min-h-[160px] w-full
              resize-y
              border border-white/15
              bg-white/[0.045]
              px-4 py-4
              text-[15px] leading-7
              text-white
              outline-none
              transition
              placeholder:text-white/30
              hover:border-white/25
              focus:border-[#5ca4d8]
              focus:bg-white/[0.07]
              focus:ring-1
              focus:ring-[#5ca4d8]/20
            "
          />
        </div>

        {/* ONAY */}
        <div className="border-t border-white/10 pt-6">
          <label className="flex max-w-2xl cursor-pointer items-start gap-3 text-xs leading-6 text-white/50">
            <input
              name="consent"
              type="checkbox"
              required
              className="
                mt-1 h-4 w-4
                shrink-0
                accent-[#5ca4d8]
              "
            />

            <span>
              İletişim talebim kapsamında paylaştığım
              bilgilerin iletişim amacıyla kullanılmasını
              kabul ediyorum.
            </span>
          </label>
        </div>

        {/* GÖNDER */}
        <div className="pt-1">
          <button
            type="submit"
            className="
              group
              flex min-h-14 w-full
              items-center justify-center
              gap-3
              bg-white
              px-7 py-4
              text-sm font-semibold
              text-[#171717]
              transition
              hover:bg-[#1669a8]
              hover:text-white
              sm:w-auto
            "
          >
            <MessageCircle
              size={18}
              strokeWidth={1.7}
            />

            WhatsApp&apos;tan Gönder

            <ArrowUpRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </button>

          <p className="mt-4 max-w-lg text-xs leading-5 text-white/35">
            Gönder butonuna bastığınızda WhatsApp açılır
            ve bilgileriniz mesaj olarak gönderime hazır
            hale getirilir.
          </p>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.16em] text-white/65"
      >
        {label}

        {required && (
          <span className="ml-1 text-[#5ca4d8]">
            *
          </span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="
          h-14 w-full
          border border-white/15
          bg-white/[0.045]
          px-4
          text-[15px] text-white
          outline-none
          transition
          placeholder:text-white/30
          hover:border-white/25
          focus:border-[#5ca4d8]
          focus:bg-white/[0.07]
          focus:ring-1
          focus:ring-[#5ca4d8]/20
        "
      />
    </div>
  );
}