import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Compass,
  DraftingCompass,
  Ruler,
} from "lucide-react";


export const metadata: Metadata = {
  title: "Kurumsal",

  description:
    "2002 yılından bu yana Milas'ta faaliyet gösteren Solmaz Grup hakkında bilgi edinin.",

  alternates: {
    canonical: "/kurumsal",
  },

  openGraph: {
    title: "Kurumsal | Solmaz Grup",
    description:
      "Solmaz Grup'un yaklaşımını, deneyimini ve faaliyet alanlarını keşfedin.",
    url: "/kurumsal",
    type: "website",
  },
};

export default function CorporatePage() {
  return (
    <main className="bg-[#f7f5f1] text-[#171717]">

      {/* HERO */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-[#171717]">
        <Image
          src="/images/corporate-hero_new.jpg"
          alt="Solmaz Grup mimari proje"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 w-full px-6 pb-16 pt-36 md:px-10 lg:px-16 lg:pb-24">
          <div className="max-w-6xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/65">
              Solmaz Grup
            </p>

            <h1 className="max-w-5xl text-5xl font-light leading-[0.98] tracking-[-0.035em] text-white md:text-7xl lg:text-[88px]">
              Yapının ötesinde,
              <br />
              yaşam tasarlıyoruz.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/75 md:text-lg">
              Mimarlık, mühendislik ve uygulama disiplinlerini aynı çatı
              altında buluşturan bütüncül bir yapı anlayışı.
            </p>
          </div>
        </div>
      </section>


      {/* HİKAYEMİZ */}
      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-[1450px] gap-14 lg:grid-cols-12">

          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">
              Hakkımızda
            </p>

            <p className="mt-8 text-[72px] font-light leading-none tracking-[-0.05em] text-[#1669a8] md:text-[100px]">
              2002
            </p>

            <p className="mt-3 text-sm text-neutral-500">
              Milas · Muğla
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <h2 className="text-4xl font-light leading-[1.1] tracking-[-0.025em] md:text-5xl lg:text-6xl">
              Deneyim, mimari ve mühendisliğin buluştuğu noktada.
            </h2>

            <div className="mt-10 grid gap-8 text-base leading-8 text-neutral-600 md:grid-cols-2">
              <p>
                Solmaz Grup, 2002 yılından bu yana Milas merkezli olarak
                inşaat sektöründe faaliyet göstermektedir. Konut projelerinden
                mimari ve mühendislik çalışmalarına kadar farklı disiplinleri
                bir araya getiren bir yaklaşım benimser.
              </p>

              <p>
                Her projeyi yalnızca bir yapı olarak değil; bulunduğu çevre,
                kullanıcı ihtiyaçları ve uzun vadeli yaşam kalitesiyle birlikte
                değerlendiriyoruz. Tasarımdan uygulamaya kadar sürecin her
                aşamasında bütüncül bir bakış açısı hedefliyoruz.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* BÜYÜK GÖRSEL */}
      <section className="px-4 md:px-8 lg:px-12">
        <div className="relative mx-auto h-[55vh] max-w-[1500px] overflow-hidden md:h-[70vh]">
          <Image
            src="/images/corporate-project.jpg"
            alt="Solmaz Grup proje ve yaşam alanı"
            fill
            className="object-cover"
          />
        </div>
      </section>


      {/* YAKLAŞIM */}
      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-[1450px]">

          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">
                Yaklaşımımız
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="text-4xl font-light leading-[1.1] tracking-[-0.03em] md:text-5xl lg:text-6xl">
                İyi bir yapı,
                <br />
                iyi düşünülmüş bir süreçle başlar.
              </h2>
            </div>
          </div>


          <div className="mt-20 grid border-t border-black/10 md:grid-cols-2 lg:grid-cols-4">

            <Approach
              number="01"
              icon={<DraftingCompass size={24} strokeWidth={1.4} />}
              title="Mimari"
              description="Estetik, işlev ve çevre ilişkisini birlikte ele alan tasarım yaklaşımı."
            />

            <Approach
              number="02"
              icon={<Ruler size={24} strokeWidth={1.4} />}
              title="Mühendislik"
              description="Projenin teknik gereksinimlerini güvenilir ve sürdürülebilir çözümlerle ele alıyoruz."
            />

            <Approach
              number="03"
              icon={<Building2 size={24} strokeWidth={1.4} />}
              title="Uygulama"
              description="Tasarlanan yapının uygulama sürecini kalite ve detay odağıyla yönetiyoruz."
            />

            <Approach
              number="04"
              icon={<Compass size={24} strokeWidth={1.4} />}
              title="Yaşam"
              description="Yapının ötesine geçerek kullanıcı deneyimini ve yaşam kalitesini önemsiyoruz."
            />

          </div>
        </div>
      </section>


      {/* 2002 VURGUSU */}
      <section className="bg-[#171717] px-6 py-24 text-white md:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-[1450px] gap-16 lg:grid-cols-12">

          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Deneyim
            </p>

            <div className="mt-8 text-[100px] font-light leading-none tracking-[-0.07em] md:text-[150px] lg:text-[180px]">
              20+
            </div>

            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-white/45">
              Yıllık sektör deneyimi
            </p>
          </div>


          <div className="flex items-end lg:col-span-6 lg:col-start-7">
            <div>
              <h2 className="max-w-2xl text-4xl font-light leading-tight tracking-[-0.025em] md:text-5xl">
                Geçmişin deneyimiyle bugünün ihtiyaçlarını buluşturuyoruz.
              </h2>

              <p className="mt-8 max-w-xl leading-8 text-white/55">
                Her yeni projede edinilen deneyimi bir sonraki yapıya
                taşıyarak, bulunduğu bölgeyle uyumlu ve uzun yıllar değerini
                koruyacak yaşam alanları oluşturmayı amaçlıyoruz.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* PROJELERE GEÇİŞ */}
      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1450px]">

          <div className="flex flex-col justify-between gap-10 border-b border-black/10 pb-16 md:flex-row md:items-end">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">
                Projeler
              </p>

              <h2 className="mt-6 max-w-3xl text-4xl font-light leading-tight tracking-[-0.03em] md:text-6xl">
                Deneyimimizin yapıya dönüşmüş halini keşfedin.
              </h2>
            </div>

            <Link
              href="/projeler"
              className="group flex shrink-0 items-center gap-4 text-sm font-semibold"
            >
              Tüm Projeler
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 transition duration-300 group-hover:bg-black group-hover:text-white">
                <ArrowUpRight size={17} />
              </span>
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}


function Approach({
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
    <div className="group border-b border-black/10 py-10 md:border-r md:px-8 md:first:pl-0 lg:border-b-0">
      <div className="flex items-center justify-between">
        <span className="text-xs text-neutral-400">{number}</span>
        <span className="text-neutral-400 transition-colors group-hover:text-[#1669a8]">
          {icon}
        </span>
      </div>

      <h3 className="mt-14 text-2xl font-medium">
        {title}
      </h3>

      <p className="mt-5 max-w-xs text-sm leading-7 text-neutral-500">
        {description}
      </p>
    </div>
  );
}