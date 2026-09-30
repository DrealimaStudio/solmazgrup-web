import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import { projects } from "@/lib/projects";



export const metadata: Metadata = {
  title: "Projeler",

  description:
    "Solmaz Grup tarafından Milas ve Muğla bölgesinde hayata geçirilen konut projelerini keşfedin.",

  alternates: {
    canonical: "/projeler",
  },

  openGraph: {
    title: "Projeler | Solmaz Grup",
    description:
      "Solmaz Grup'un Milas ve Muğla bölgesinde hayata geçirdiği projeleri inceleyin.",
    url: "/projeler",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <main className="bg-[#f7f5f1] text-[#171717]">

      {/* HERO */}
      <section className="px-6 pb-20 pt-40 md:px-10 lg:px-16 lg:pb-28 lg:pt-48">
        <div className="mx-auto max-w-[1450px]">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Projelerimiz
          </p>

          <div className="mt-8 grid gap-12 lg:grid-cols-12">

            <div className="lg:col-span-8">
              <h1 className="text-5xl font-light leading-[0.98] tracking-[-0.045em] md:text-7xl lg:text-[92px]">
                Yaşama dönüşen
                <br />
                projeler.
              </h1>
            </div>

            <div className="flex items-end lg:col-span-3 lg:col-start-10">
              <p className="max-w-sm text-base leading-8 text-neutral-500">
                2002'den bu yana Milas'ta hayata geçirdiğimiz
                yaşam alanlarını keşfedin.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECT COUNT */}
      <section className="border-y border-black/10 bg-white px-6 py-7 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1450px] items-center justify-between">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
            Proje Portföyü
          </p>

          <p className="text-sm font-medium">
            {projects.length} Proje
          </p>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1450px] gap-x-8 gap-y-20 md:grid-cols-2">

          {projects.map((project, index) => (
            <article
              key={project.slug}
              className={index % 2 === 1 ? "md:mt-24" : ""}
            >
              <Link
                href={`/projeler/${project.slug}`}
                className="group block"
              >
               <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
  {project.coverImage ? (
    <Image
      src={project.coverImage}
      alt={`${project.title} - Solmaz Grup`}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="
        object-cover
        transition-transform
        duration-700
        ease-out
        group-hover:scale-[1.035]
      "
    />
  ) : (
    <div className="absolute inset-0 flex items-center justify-center bg-[#e8e5df]">
      <span className="text-xs uppercase tracking-[0.25em] text-neutral-400">
        Solmaz Grup
      </span>
    </div>
  )}

  <div className="absolute inset-0 bg-black/5 transition group-hover:bg-black/10" />

  <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center bg-white text-black opacity-0 transition-all duration-300 group-hover:opacity-100">
    <ArrowUpRight size={18} />
  </div>
</div>





                <div className="mt-6 flex items-start justify-between gap-6">

                  <div>
                    <p className="text-xs tracking-[0.18em] text-neutral-400">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h2 className="mt-2 text-2xl font-medium tracking-[-0.025em] md:text-3xl">
                      {project.title}
                    </h2>

                    {project.location && (
                      <div className="mt-3 flex items-center gap-2 text-sm text-neutral-500">
                        <MapPin size={14} strokeWidth={1.5} />

                        <span>
                          {project.location}
                          {project.district && `, ${project.district}`}
                        </span>
                      </div>
                    )}

                    {project.unitTypes &&
                      project.unitTypes.length > 0 && (
                        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-neutral-400">
                          {project.unitTypes.join(" · ")}
                        </p>
                      )}
                  </div>

                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.4}
                    className="mt-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </article>
          ))}

        </div>
      </section>

      {/* BOTTOM */}
      <section className="bg-[#171717] px-6 py-24 text-white md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1450px] gap-12 lg:grid-cols-12">

          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              2002'den bugüne
            </p>

            <h2 className="mt-7 text-4xl font-light leading-tight tracking-[-0.035em] md:text-6xl">
              Milas'ta yaşam alanları
              <br />
              inşa ediyoruz.
            </h2>
          </div>

          <div className="flex items-end lg:col-span-3 lg:col-start-10">
            <Link
              href="/iletisim"
              className="group inline-flex items-center gap-3 border-b border-white/30 pb-2 text-sm font-semibold"
            >
              Bizimle İletişime Geçin

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}