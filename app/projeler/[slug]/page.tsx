import ProjectGallery from "@/components/ProjectGallery";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProjectWhatsAppButton from "@/components/ProjectWhatsAppButton";
import { notFound } from "next/navigation";

import ProjectSchema from "@/components/ProjectSchema";

import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) {
    return {
      title: "Proje Bulunamadı",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const location = [
    project.location,
    project.district,
    project.city,
  ]
    .filter(Boolean)
    .join(", ");

  const description =
    project.shortDescription ||
    `${project.title}${
      location ? ` - ${location}` : ""
    }. Solmaz Grup tarafından hayata geçirilen projeyi inceleyin.`;

  const canonicalUrl = `/projeler/${project.slug}`;

  return {
    title: project.title,

    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: "website",
      locale: "tr_TR",
      url: canonicalUrl,
      siteName: "Solmaz Grup",
      title: `${project.title} | Solmaz Grup`,
      description,
      images: project.coverImage
        ? [
            {
              url: project.coverImage,
              alt: `${project.title} - Solmaz Grup`,
            },
          ]
        : undefined,
    },

    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Solmaz Grup`,
      description,
      images: project.coverImage
        ? [project.coverImage]
        : undefined,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-[#f7f5f1] text-[#171717]">

      {/* HERO */}
     <section className="relative min-h-[82vh] overflow-hidden bg-neutral-900">
  {project.coverImage ? (
    <Image
      src={project.coverImage}
      alt={`${project.title} - Solmaz Grup`}
      fill
      priority
      sizes="100vw"
      className="object-cover"
    />
  ) : (
    <div className="absolute inset-0 flex items-center justify-center bg-[#242424]">
      <span className="text-xs uppercase tracking-[0.3em] text-white/30">
        Solmaz Grup
      </span>
    </div>
  )}

  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

        <div className="absolute inset-x-0 bottom-0 px-6 pb-12 md:px-10 lg:px-16 lg:pb-16">
          <div className="mx-auto max-w-[1450px]">

            <Link
              href="/projeler"
              className="mb-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/65 transition hover:text-white"
            >
              <ArrowLeft size={15} />
              Tüm Projeler
            </Link>

            <div className="grid items-end gap-10 lg:grid-cols-12">

              <div className="lg:col-span-8">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  Solmaz Grup
                </p>

                <h1 className="text-5xl font-light leading-[0.95] tracking-[-0.045em] text-white md:text-7xl lg:text-[88px]">
                  {project.title}
                </h1>
              </div>

              {project.location && (
                <div className="lg:col-span-3 lg:col-start-10">
                  <div className="flex items-start gap-3 text-white/75">
                    <MapPin
                      size={18}
                      strokeWidth={1.4}
                      className="mt-1 shrink-0"
                    />

                    <p className="text-sm leading-7">
                      {project.location}

                      {project.district && (
                        <>
                          <br />
                          {project.district}
                          {project.city && ` / ${project.city}`}
                        </>
                      )}
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* PROJECT INFORMATION */}
      <section className="bg-white px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1450px] gap-16 lg:grid-cols-12">

          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">
              Proje Bilgileri
            </p>

            <div className="mt-9 border-t border-black/10">

              {project.location && (
                <ProjectInfo
                  label="Konum"
                  value={`${project.location}${
                    project.district
                      ? `, ${project.district}`
                      : ""
                  }`}
                />
              )}

              {project.category && (
                <ProjectInfo
                  label="Proje Türü"
                  value={project.category}
                />
              )}

              {project.unitTypes &&
                project.unitTypes.length > 0 && (
                  <ProjectInfo
                    label="Konut Tipleri"
                    value={project.unitTypes.join(" / ")}
                  />
                )}

              {project.status && (
                <ProjectInfo
                  label="Durum"
                  value={getStatusLabel(project.status)}
                />
              )}

            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">
              Proje Hakkında
            </p>

            <h2 className="mt-7 text-3xl font-light leading-tight tracking-[-0.03em] md:text-5xl">
              {project.title}
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-500">
              {project.description ||
                `${project.title}, Solmaz Grup tarafından hayata geçirilen projelerden biridir.`}
            </p>

            <a
              href="#galeri"
              className="group mt-10 inline-flex items-center gap-3 border-b border-black/20 pb-2 text-sm font-semibold transition hover:border-black"
            >
              Proje Galerisini İncele

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </div>
        </div>
      </section>

      {/* GALLERY */}
{project.images && project.images.length > 0 && (
  <section
    id="galeri"
    className="px-6 py-24 md:px-10 lg:px-16 lg:py-32"
  >
    <div className="mx-auto max-w-[1450px]">

      <div className="mb-14 flex items-end justify-between gap-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">
            Galeri
          </p>

          <h2 className="mt-6 text-4xl font-light tracking-[-0.035em] md:text-6xl">
            Projeden kareler.
          </h2>
        </div>

        <p className="hidden text-sm text-neutral-400 md:block">
          {project.images.length} Fotoğraf
        </p>
      </div>

      <ProjectGallery
        images={project.images}
        projectTitle={project.title}
      />

    </div>
  </section>
)}

      {/* CONTACT CTA */}
      <section className="bg-[#171717] px-6 py-24 text-white md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1450px] items-end gap-12 lg:grid-cols-12">

          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              {project.title}
            </p>

            <h2 className="mt-7 text-4xl font-light leading-tight tracking-[-0.035em] md:text-6xl">
              Proje hakkında
              <br />
              bilgi alın.
            </h2>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
           <ProjectWhatsAppButton
  projectTitle={project.title}
/>
          </div>

        </div>
      </section>

    </main>
  );
}

function ProjectInfo({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[130px_1fr] gap-6 border-b border-black/10 py-6">
      <span className="text-xs uppercase tracking-[0.16em] text-neutral-400">
        {label}
      </span>

      <span className="text-sm font-medium text-neutral-700">
        {value}
      </span>
    </div>
  );
}

function getStatusLabel(
  status: "completed" | "ongoing" | "planned"
) {
  switch (status) {
    case "completed":
      return "Tamamlandı";

    case "ongoing":
      return "Devam Ediyor";

    case "planned":
      return "Planlanıyor";
  }
}