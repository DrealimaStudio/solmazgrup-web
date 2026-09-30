import LandownerForm from "@/components/LandownerForm";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  FileSearch,
  Map,
  PenTool,
  Building2,
} from "lucide-react";


export const metadata: Metadata = {
  title: "Arsa Sahipleri",

  description:
    "Milas ve Muğla bölgesindeki arsanızın proje potansiyelini Solmaz Grup ile değerlendirin.",

  alternates: {
    canonical: "/arsa-sahipleri",
  },

  openGraph: {
    title: "Arsa Sahipleri | Solmaz Grup",
    description:
      "Arsanızın konumu ve yapı potansiyelini Solmaz Grup ile değerlendirin.",
    url: "/arsa-sahipleri",
    type: "website",
  },
};

const steps = [
  {
    number: "01",
    title: "Ön Değerlendirme",
    description:
      "Arsanın konumu ve temel bilgileri üzerinden ilk değerlendirmeyi gerçekleştiriyoruz.",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Arsa Analizi",
    description:
      "Arsanın proje potansiyelini ve mevcut koşullarını daha detaylı değerlendiriyoruz.",
    icon: Map,
  },
  {
    number: "03",
    title: "Proje Yaklaşımı",
    description:
      "Arsanın özelliklerine ve ihtiyaçlara uygun proje yaklaşımını oluşturuyoruz.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Proje Süreci",
    description:
      "Mutabakat sağlanması halinde tasarım ve uygulama sürecini planlıyoruz.",
    icon: Building2,
  },
];

export default function LandOwnersPage() {
  return (
    <main className="bg-[#f7f5f1] text-[#171717]">

      {/* HERO */}
      <section className="relative flex min-h-[82vh] items-end overflow-hidden bg-neutral-900">
        <Image
          src="/images/landowners-hero.jpg"
          alt="Solmaz Grup arsa geliştirme"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />

        <div className="relative z-10 w-full px-6 pb-20 pt-40 md:px-10 lg:px-16 lg:pb-28">
          <div className="mx-auto max-w-[1450px]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Arsa Sahipleri
            </p>

            <h1 className="mt-7 max-w-5xl text-5xl font-light leading-[0.98] tracking-[-0.04em] text-white md:text-7xl lg:text-[86px]">
              Arsanızın potansiyelini
              <br />
              birlikte değerlendirelim.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/75 md:text-lg">
              Arsanız için proje geliştirme ve kat karşılığı seçeneklerini
              birlikte değerlendirelim.
            </p>

            <a
              href="#basvuru"
              className="group mt-10 inline-flex items-center gap-4 border-b border-white/50 pb-2 text-sm font-semibold text-white"
            >
              Arsamı Değerlendirin
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-[1450px] gap-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">
              Proje Geliştirme
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="max-w-4xl text-4xl font-light leading-[1.1] tracking-[-0.03em] md:text-5xl lg:text-6xl">
              Doğru proje, arsanın doğru anlaşılmasıyla başlar.
            </h2>

            <div className="mt-10 grid gap-8 text-base leading-8 text-neutral-500 md:grid-cols-2">
              <p>
                Her arsanın konumu, çevresi ve proje potansiyeli farklıdır.
                Bu nedenle sürece hazır bir proje önermek yerine öncelikle
                arsayı ve ihtiyaçları değerlendiriyoruz.
              </p>

              <p>
                Mimari ve mühendislik deneyimini proje geliştirme yaklaşımıyla
                bir araya getirerek arsa sahipleriyle birlikte uygulanabilir
                çözümler oluşturmayı hedefliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1450px]">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">
                Nasıl İlerliyoruz?
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="text-4xl font-light tracking-[-0.03em] md:text-6xl">
                Dört adımda değerlendirme.
              </h2>
            </div>
          </div>

          <div className="mt-20 grid border-t border-black/10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group border-b border-black/10 py-10 md:border-r md:px-8 md:first:pl-0 lg:border-b-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-400">
                      {step.number}
                    </span>

                    <Icon
                      size={24}
                      strokeWidth={1.3}
                      className="text-neutral-400 transition group-hover:text-[#1669a8]"
                    />
                  </div>

                  <h3 className="mt-14 text-2xl font-medium">
                    {step.title}
                  </h3>

                  <p className="mt-5 max-w-xs text-sm leading-7 text-neutral-500">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT WE NEED */}
      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-[1450px] gap-16 lg:grid-cols-12">

          <div className="relative min-h-[500px] overflow-hidden lg:col-span-6">
            <Image
              src="/images/services/land-development_v2.jpg"
              alt="Arsa ve proje geliştirme"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex items-center lg:col-span-5 lg:col-start-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">
                İlk Görüşme
              </p>

              <h2 className="mt-6 text-4xl font-light leading-tight tracking-[-0.03em] md:text-5xl">
                Başlamak için birkaç temel bilgi yeterli.
              </h2>

              <div className="mt-10 space-y-5">
                <Info text="Arsanın bulunduğu il / ilçe" />
                <Info text="Yaklaşık arsa büyüklüğü" />
                <Info text="Ada / parsel bilgisi, mevcutsa" />
                <Info text="İletişim bilgileriniz" />
              </div>

              <p className="mt-9 max-w-md text-sm leading-7 text-neutral-500">
                İlk başvuruda tüm teknik belgelerin hazır olması gerekmez.
                Temel bilgiler üzerinden iletişime geçerek süreci birlikte
                ilerletebiliriz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section
        id="basvuru"
        className="scroll-mt-24 bg-[#171717] px-6 py-24 text-white md:px-10 lg:px-16 lg:py-36"
      >
        <div className="mx-auto grid max-w-[1450px] gap-16 lg:grid-cols-12">

          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Arsa Değerlendirme
            </p>

            <h2 className="mt-7 max-w-lg text-4xl font-light leading-tight tracking-[-0.03em] md:text-6xl">
              Arsanızı bize anlatın.
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-white/50">
              Formu doldurun. Ekibimiz paylaştığınız bilgiler üzerinden
              başvurunuzu değerlendirmek üzere sizinle iletişime geçsin.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <LandownerForm />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto flex max-w-[1450px] flex-col justify-between gap-8 border-b border-black/10 pb-14 md:flex-row md:items-center">
          <p className="max-w-2xl text-3xl font-light tracking-[-0.02em] md:text-4xl">
            Farklı bir proje için görüşmek ister misiniz?
          </p>

          <Link
            href="/iletisim"
            className="group inline-flex items-center gap-4 text-sm font-semibold"
          >
            İletişime Geçin
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

    </main>
  );
}

function Info({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 border-b border-black/10 pb-5">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1669a8] text-white">
        <Check size={14} />
      </span>

      <span className="text-sm text-neutral-600">
        {text}
      </span>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs uppercase tracking-[0.2em] text-white/40"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={name !== "parcel"}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-white/20 bg-transparent py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/70"
      />
    </div>
  );
}