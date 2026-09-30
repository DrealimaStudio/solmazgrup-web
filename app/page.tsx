import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import {
  ArrowRight,
  Building2,
  Compass,
  Ruler,
  MapPin,
} from "lucide-react";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <main className="bg-[#f7f6f2] text-[#171717]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-screen overflow-hidden">

        <Image
          src="/images/hero_welcome.png"
          alt="Solmaz Grup konut projesi"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-black/5" />

        <div className="relative z-10 flex min-h-screen items-end px-6 pb-16 pt-32 sm:px-8 md:pb-20 lg:px-16 lg:pb-24">

          <div className="max-w-6xl">

            <p className="mb-6 text-xs uppercase tracking-[0.32em] text-white/65 sm:text-sm">
              Milas • Muğla
            </p>

            <h1
              className="
                max-w-5xl
                text-5xl
                font-medium
                leading-[0.98]
                tracking-[-0.035em]
                text-white
                drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]
                md:text-7xl
                lg:text-[82px]
              "
            >
              Geleceğin yaşam
              <br />
              alanlarını inşa ediyoruz.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/90 drop-shadow-sm">
              2002&apos;den bu yana Milas&apos;ta.
            </p>

            <Link
              href="#projeler"
              className="group mt-9 inline-flex items-center gap-4 border-b border-white/70 pb-2 text-sm text-white transition hover:border-white"
            >
              Projeleri Keşfet

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>
        </div>

      </section>


      {/* =====================================================
          ABOUT / KURUMSAL ÖZET
      ===================================================== */}
      <section className="px-6 py-28 sm:px-8 lg:px-16 lg:py-40">

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">

          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Solmaz Grup
            </p>
          </div>

          <div className="lg:col-span-7">

            <h2 className="max-w-4xl text-4xl font-light leading-[1.12] tracking-[-0.02em] md:text-5xl lg:text-6xl">
              Yapının ötesinde,
              <br />
              yaşam tasarlıyoruz.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-600 md:text-lg">
              2002 yılından bu yana Milas&apos;ta faaliyet gösteren
              Solmaz Grup; mimari, mühendislik ve uygulama
              deneyimini bir araya getirerek nitelikli yaşam
              alanları geliştirmektedir.
            </p>

            <Link
              href="/kurumsal"
              className="group mt-9 inline-flex items-center gap-3 border-b border-black pb-2 text-sm"
            >
              Solmaz Grup&apos;u Tanıyın

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED PROJECTS
      ===================================================== */}
      <section
        id="projeler"
        className="bg-white px-6 py-28 lg:px-16 lg:py-40"
      >

        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-neutral-500">
              Seçili Projeler
            </p>

            <h2 className="text-4xl font-light leading-tight tracking-[-0.02em] md:text-6xl">
              Yaşama dönüşen
              <br />
              projeler.
            </h2>
          </div>

          <Link
            href="/projeler"
            className="group inline-flex w-fit items-center gap-3 border-b border-black pb-2 text-sm"
          >
            Tüm Projeleri Gör

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* PROJELER ARTIK projects.ts DOSYASINDAN GELİYOR */}
        <div className="space-y-28 lg:space-y-36">

          {featuredProjects.slice(0, 3).map((project, index) => (
            <Project
              key={project.slug}
              image={project.coverImage}
              title={project.title}
              location={
                project.location
                  ? `${project.location}${
                      project.district
                        ? ` / ${project.district}`
                        : ""
                    }`
                  : "Milas / Muğla"
              }
              category={project.category || "Proje"}
              href={`/projeler/${project.slug}`}
              reverse={index % 2 === 1}
            />
          ))}

        </div>

      </section>


      {/* =====================================================
          EXPERIENCE
      ===================================================== */}
      <section className="border-t border-neutral-200 bg-white px-6 py-24 sm:px-8 lg:px-16">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          <Stat
            value="2002"
            label="Kuruluş"
          />

          <Stat
            value="20+"
            label="Yıllık Deneyim"
          />

          <Stat
            value="Milas"
            label="Merkez"
          />

          <Stat
            value="Muğla"
            label="Faaliyet Bölgesi"
          />

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section
        id="hizmetler"
        className="bg-[#171717] px-6 py-28 text-white sm:px-8 lg:px-16 lg:py-36"
      >

        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40">
              Uzmanlıklarımız
            </p>

            <h2 className="text-4xl font-light tracking-[-0.02em] md:text-6xl">
              Neler Yapıyoruz?
            </h2>
          </div>

          <Link
            href="/hizmetler"
            className="group inline-flex w-fit items-center gap-3 border-b border-white/40 pb-2 text-sm text-white"
          >
            Tüm Hizmetler

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>

        <div className="grid gap-px bg-white/10 md:grid-cols-3">

          <Service
            number="01"
            icon={<Building2 strokeWidth={1.3} />}
            title="Konut Projeleri"
            description="Modern mimari ve yaşam ihtiyaçlarını bir araya getiren nitelikli konut projeleri."
          />

          <Service
            number="02"
            icon={<Ruler strokeWidth={1.3} />}
            title="Kat Karşılığı"
            description="Arsanızın potansiyelini doğru planlama ve mühendislikle değerli bir projeye dönüştürüyoruz."
          />

          <Service
            number="03"
            icon={<Compass strokeWidth={1.3} />}
            title="Mimarlık & Mühendislik"
            description="Tasarımdan uygulamaya bütüncül mimarlık ve mühendislik çözümleri."
          />

        </div>

      </section>


      {/* =====================================================
          LAND OWNERS
      ===================================================== */}
      <section
        id="arsa"
        className="relative min-h-[80vh] overflow-hidden"
      >

        <Image
          src="/images/land-owner.jpg"
          alt="Solmaz Grup arsa değerlendirme ve kat karşılığı inşaat"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />

        <div className="relative z-10 flex min-h-[80vh] items-center px-6 py-24 sm:px-8 lg:px-16">

          <div className="max-w-2xl text-white">

            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/60">
              Arsa Sahipleri İçin
            </p>

            <h2 className="text-4xl font-light leading-[1.08] tracking-[-0.025em] md:text-6xl">
              Arsanızın potansiyelini
              <br />
              birlikte değerlendirelim.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/70 md:text-lg">
              Arsanızın konumu, imar durumu ve yapı potansiyelini
              değerlendirerek uygun proje yaklaşımını birlikte
              ele alalım.
            </p>

            <Link
              href="/arsa-sahipleri"
              className="group mt-10 inline-flex items-center gap-4 border-b border-white/70 pb-2 text-sm"
            >
              Arsamı Değerlendirin

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="flex min-h-[65vh] items-center justify-center bg-[#f7f6f2] px-6 py-24 text-center sm:px-8 lg:px-16">

        <div>

          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-neutral-500">
            Yeni Bir Proje
          </p>

          <h2 className="text-4xl font-light tracking-[-0.025em] md:text-6xl">
            Birlikte inşa edelim.
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-neutral-600">
            Projeniz, arsanız veya yatırımınız hakkında
            ekibimizle görüşebilirsiniz.
          </p>

          <Link
            href="/iletisim"
            className="group mt-10 inline-flex items-center gap-4 bg-black px-9 py-4 text-sm text-white transition hover:bg-neutral-800"
          >
            Bizimle İletişime Geçin

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   PROJECT
========================================================= */

function Project({
  image,
  title,
  location,
  category,
  href,
  reverse = false,
}: {
  image?: string;
  title: string;
  location: string;
  category: string;
  href: string;
  reverse?: boolean;
}) {
  return (
    <article
      className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
        reverse
          ? "lg:[&>*:first-child]:order-2"
          : ""
      }`}
    >

      <Link
        href={href}
        className="group relative block aspect-[16/10] overflow-hidden bg-neutral-200 lg:col-span-8"
      >

        {image ? (
          <Image
            src={image}
            alt={`${title} - Solmaz Grup`}
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[#e8e5df]">
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              Solmaz Grup
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

        <div className="absolute bottom-6 right-6 flex h-14 w-14 translate-y-2 items-center justify-center bg-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowRight size={20} />
        </div>

      </Link>

      <div className="lg:col-span-4">

        <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
          {category}
        </p>

        <h3 className="mt-4 text-4xl font-light tracking-[-0.02em] md:text-5xl">
          {title}
        </h3>

        <div className="mt-5 flex items-center gap-2 text-sm text-neutral-500">
          <MapPin size={15} />
          {location}
        </div>

        <Link
          href={href}
          className="group mt-9 inline-flex items-center gap-3 border-b border-black pb-2 text-sm"
        >
          Projeyi İncele

          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

      </div>

    </article>
  );
}


/* =========================================================
   SERVICE
========================================================= */

function Service({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#171717] p-9 lg:p-12">

      <div className="mb-20 flex items-center justify-between text-white/40">
        <span className="text-xs">
          {number}
        </span>

        {icon}
      </div>

      <h3 className="text-2xl font-light">
        {title}
      </h3>

      <p className="mt-5 max-w-sm leading-7 text-white/50">
        {description}
      </p>

    </div>
  );
}


/* =========================================================
   STAT
========================================================= */

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border-t border-neutral-200 pt-7">

      <p className="text-5xl font-light tracking-[-0.03em] md:text-6xl">
        {value}
      </p>

      <p className="mt-4 text-sm text-neutral-500">
        {label}
      </p>

    </div>
  );
}