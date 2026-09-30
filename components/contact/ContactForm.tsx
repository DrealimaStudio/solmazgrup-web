"use client";

import { FormEvent } from "react";
import {
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

export default function ContactForm() {
  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const subject = String(formData.get("subject") || "");
    const message = String(formData.get("message") || "");

    const subjectLabels: Record<string, string> = {
      project: "Proje Hakkında Bilgi",
      construction: "İnşaat",
      architecture: "Mimarlık",
      engineering: "Mühendislik",
      land: "Arsa / Kat Karşılığı",
      other: "Diğer",
    };

    const selectedSubject =
      subjectLabels[subject] || subject;

    const whatsappMessage = `
Merhaba Solmaz Grup,

Web siteniz üzerinden iletişime geçiyorum.

*Ad Soyad:* ${name}
*Telefon:* ${phone}
*E-posta:* ${email || "Belirtilmedi"}
*Konu:* ${selectedSubject}

*Mesajım:*
${message}
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
    <div>
      {/* FORM BAŞLIĞI */}
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1669a8]">
          İletişim Formu
        </p>

        <h2 className="mt-4 text-3xl font-light tracking-[-0.025em] text-[#171717] md:text-4xl">
          Size nasıl yardımcı olabiliriz?
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-500">
          Projelerimiz, hizmetlerimiz veya arsa
          değerlendirme talepleriniz için aşağıdaki formu
          doldurabilirsiniz. Mesajınız WhatsApp üzerinden
          Solmaz Grup&apos;a iletilmek üzere hazırlanacaktır.
        </p>
      </div>

      {/* FORM KARTI */}
      <div className="border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] sm:p-8 lg:p-10">
        <form
          onSubmit={handleSubmit}
          className="space-y-7"
        >
          {/* AD SOYAD */}
          <Field
            label="Ad Soyad"
            name="name"
            placeholder="Adınızı ve soyadınızı yazın"
            required
          />

          {/* TELEFON + E-POSTA */}
          <div className="grid gap-6 md:grid-cols-2">
            <Field
              label="Telefon"
              name="phone"
              type="tel"
              placeholder="05XX XXX XX XX"
              required
            />

            <Field
              label="E-posta"
              name="email"
              type="email"
              placeholder="ornek@email.com"
            />
          </div>

          {/* KONU */}
          <div>
            <label
              htmlFor="subject"
              className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.16em] text-neutral-600"
            >
              Konu{" "}
              <span className="text-[#1669a8]">
                *
              </span>
            </label>

            <select
              id="subject"
              name="subject"
              defaultValue=""
              required
              className="
                h-14 w-full
                border border-black/15
                bg-[#faf9f6]
                px-4
                text-[15px] text-neutral-700
                outline-none
                transition
                hover:border-black/25
                focus:border-[#1669a8]
                focus:bg-white
                focus:ring-1
                focus:ring-[#1669a8]/15
              "
            >
              <option value="" disabled>
                İletişim konusunu seçin
              </option>

              <option value="project">
                Proje Hakkında Bilgi
              </option>

              <option value="construction">
                İnşaat
              </option>

              <option value="architecture">
                Mimarlık
              </option>

              <option value="engineering">
                Mühendislik
              </option>

              <option value="land">
                Arsa / Kat Karşılığı
              </option>

              <option value="other">
                Diğer
              </option>
            </select>
          </div>

          {/* MESAJ */}
          <div>
            <label
              htmlFor="message"
              className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.16em] text-neutral-600"
            >
              Mesajınız{" "}
              <span className="text-[#1669a8]">
                *
              </span>
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Proje, arsa veya hizmet talebiniz hakkında kısaca bilgi verebilirsiniz."
              className="
                min-h-[160px] w-full
                resize-y
                border border-black/15
                bg-[#faf9f6]
                px-4 py-4
                text-[15px] leading-7
                text-neutral-900
                outline-none
                transition
                placeholder:text-neutral-400
                hover:border-black/25
                focus:border-[#1669a8]
                focus:bg-white
                focus:ring-1
                focus:ring-[#1669a8]/15
              "
            />
          </div>

          {/* ONAY */}
          <div className="border-t border-black/10 pt-6">
            <label className="flex max-w-2xl cursor-pointer items-start gap-3 text-xs leading-6 text-neutral-500">
              <input
                name="consent"
                type="checkbox"
                required
                className="
                  mt-1 h-4 w-4
                  shrink-0
                  accent-[#1669a8]
                "
              />

              <span>
                İletişim talebim kapsamında paylaştığım
                bilgilerin iletişim amacıyla kullanılmasını
                kabul ediyorum.
              </span>
            </label>
          </div>

          {/* BUTTON */}
          <div className="pt-1">
            <button
              type="submit"
              className="
                group
                flex min-h-14 w-full
                items-center justify-center
                gap-3
                bg-[#171717]
                px-7 py-4
                text-sm font-semibold
                text-white
                transition
                hover:bg-[#1669a8]
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

            <p className="mt-4 max-w-lg text-xs leading-5 text-neutral-400">
              Gönder butonuna bastığınızda WhatsApp
              açılacak ve mesajınız gönderime hazır olarak
              oluşturulacaktır.
            </p>
          </div>
        </form>
      </div>
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
        className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.16em] text-neutral-600"
      >
        {label}

        {required && (
          <span className="ml-1 text-[#1669a8]">
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
          border border-black/15
          bg-[#faf9f6]
          px-4
          text-[15px] text-neutral-900
          outline-none
          transition
          placeholder:text-neutral-400
          hover:border-black/25
          focus:border-[#1669a8]
          focus:bg-white
          focus:ring-1
          focus:ring-[#1669a8]/15
        "
      />
    </div>
  );
}