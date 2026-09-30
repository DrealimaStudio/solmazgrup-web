import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  DraftingCompass,
  HardHat,
  Ruler,
} from "lucide-react";


export const metadata: Metadata = {
  title: "Hizmetler",

  description:
    "Solmaz Grup'un inşaat, mimarlık, mühendislik ve kat karşılığı proje hizmetlerini inceleyin.",

  alternates: {
    canonical: "/hizmetler",
  },

  openGraph: {
    title: "Hizmetler | Solmaz Grup",
    description:
      "İnşaat, mimarlık, mühendislik ve kat karşılığı proje hizmetlerimizi keşfedin.",
    url: "/hizmetler",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "İnşaat",
    subtitle: "Fikirden yapıya.",
    description:
      "Konut ve yaşam alanlarının uygulama süreçlerini; planlama, kalite ve detay odağıyla ele alıyoruz.",
    image: "/images/services/construction.jpg",
    icon: HardHat,
  },
  {
    number: "02",
    title: "Mimarlık",
    subtitle: "Mekânı yaşamla buluşturuyoruz.",
    description:
      "Estetik, işlev ve çevre ilişkisini birlikte değerlendirerek yaşam ihtiyaçlarına cevap veren mimari çözümler geliştiriyoruz.",
    image: "/images/services/architecture.jpg",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Mühendislik",
    subtitle: "Güçlü yapılar, doğru çözümler.",
    description:
      "Projelerin teknik gereksinimlerini güvenilir, uygulanabilir ve uzun vadeli mühendislik çözümleriyle ele alıyoruz.",
    image: "/images/services/engineering.jpg",
    icon: Ruler,
  },
  {
    number: "04",
    title: "Kat Karşılığı",
    subtitle: "Arsanın potansiyelini birlikte geliştiriyoruz.",
    description:
      "Arsanın konumu, imar koşulları ve proje potansiyelini değerlendirerek arsa sahipleri için proje geliştirme sürecini yönetiyoruz.",
    image: "/images/services/land-development.jpg",
    icon: Building2,
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#f7f5f1] text-[#171717]">

      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-[#171717]">
        <Image
          src="/images/services-hero.jpg"
          alt="Solmaz Grup inşaat ve mimarlık hizmetleri"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
        <div className="absolute inset-0 bg-black/5" />

        <div className="relative z-10 w-full px-6 pb-16 pt-36 md:px-10 lg:px-16 lg:pb-24">
          <div className="mx-auto max-w-[1450px]">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Hizmetler
            </p>

            <h1 className="max-w-5xl text-5xl font-light leading-[0.98] tracking-[-0.04em] text-white md:text-7xl lg:text-[86px]">
              Tasarımdan uygulamaya,
              <br />
              bütüncül çözümler.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/75 md:text-lg">
              Mimarlık, mühendislik ve uygulama disiplinlerini aynı proje
              anlayışı içerisinde bir araya getiriyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1450px] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">
              Ne Yapıyoruz?
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="max-w-4xl text-4xl font-light leading-[1.12] tracking-[-0.03em] md:text-5xl lg:text-6xl">
              Bir yapının her aşamasını aynı bütünün parçası olarak görüyoruz.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-500">
              Projenin ilk fikrinden uygulama sürecine kadar mimari, teknik ve
              işlevsel kararların birbiriyle uyum içinde ilerlemesini
              önemsiyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-28 lg:pb-40">
        {services.map((service, index) => {
          const Icon = service.icon;
          const reverse = index % 2 !== 0;

          return (
            <article
              key={service.title}
              className="border-t border-black/10 px-6 py-16 md:px-10 lg:px-16 lg:py-24"
            >
              <div
                className={`mx-auto grid max-w-[1450px] items-center gap-12 lg:grid-cols-12 lg:gap-16`}
              >
                {/* IMAGE */}
                <div
                  className={`${
                    reverse
                      ? "lg:order-2 lg:col-span-7 lg:col-start-6"
                      : "lg:col-span-7"
                  }`}
                >
                  <div className="group relative aspect-[4/3] overflow-hidden bg-neutral-200">
                    <Image
                      src={service.image}
                      alt={`Solmaz Grup ${service.title} hizmeti`}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.025]"
                    />

                    <div className="absolute inset-0 bg-black/5 transition group-hover:bg-transparent" />
                  </div>
                </div>

                {/* TEXT */}
                <div
                  className={`${
                    reverse
                      ? "lg:order-1 lg:col-span-4"
                      : "lg:col-span-4 lg:col-start-9"
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-black/10 pb-5">
                    <span className="text-xs text-neutral-400">
                      {service.number}
                    </span>

                    <Icon
                      size={25}
                      strokeWidth={1.3}
                      className="text-[#1669a8]"
                    />
                  </div>

                  <h2 className="mt-10 text-4xl font-light tracking-[-0.03em] md:text-5xl">
                    {service.title}
                  </h2>

                  <p className="mt-5 text-lg font-medium text-neutral-700">
                    {service.subtitle}
                  </p>

                  <p className="mt-6 max-w-md text-sm leading-7 text-neutral-500">
                    {service.description}
                  </p>

                  {service.title === "Kat Karşılığı" && (
                    <Link
                      href="/arsa-sahipleri"
                      className="group mt-9 inline-flex items-center gap-3 border-b border-black/25 pb-2 text-sm font-semibold"
                    >
                      Arsa Sahipleri İçin
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* PROCESS */}
      <section className="bg-[#171717] px-6 py-24 text-white md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1450px]">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Çalışma Süreci
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="text-4xl font-light leading-tight tracking-[-0.03em] md:text-6xl">
                Her proje doğru analizle başlar.
              </h2>
            </div>
          </div>

          <div className="mt-20 grid border-t border-white/15 md:grid-cols-2 lg:grid-cols-4">
            <Process
              number="01"
              title="Analiz"
              description="İhtiyaçları, arsayı ve projenin temel koşullarını değerlendiriyoruz."
            />

            <Process
              number="02"
              title="Planlama"
              description="Mimari ve teknik yaklaşımı proje hedefleri doğrultusunda şekillendiriyoruz."
            />

            <Process
              number="03"
              title="Uygulama"
              description="Planlanan projeyi kalite ve detay odağıyla hayata geçiriyoruz."
            />

            <Process
              number="04"
              title="Tamamlama"
              description="Projenin son kontrollerini gerçekleştirerek süreci tamamlıyoruz."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto flex max-w-[1450px] flex-col justify-between gap-12 border-b border-black/10 pb-16 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">
              Yeni Bir Proje
            </p>

            <h2 className="mt-6 max-w-3xl text-4xl font-light leading-tight tracking-[-0.03em] md:text-6xl">
              Projenizi birlikte değerlendirelim.
            </h2>
          </div>

          <Link
            href="/iletisim"
            className="group flex shrink-0 items-center gap-4 text-sm font-semibold"
          >
            İletişime Geçin

            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/20 transition duration-300 group-hover:bg-black group-hover:text-white">
              <ArrowUpRight size={17} />
            </span>
          </Link>
        </div>
      </section>

    </main>
  );
}

function Process({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border-b border-white/15 py-10 md:border-r md:px-8 md:first:pl-0 lg:border-b-0">
      <span className="text-xs text-white/35">{number}</span>

      <h3 className="mt-12 text-2xl font-medium">
        {title}
      </h3>

      <p className="mt-5 max-w-xs text-sm leading-7 text-white/45">
        {description}
      </p>
    </div>
  );
}