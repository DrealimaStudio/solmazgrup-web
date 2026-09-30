import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111] px-8 pb-10 pt-24 text-white lg:px-16">

      <div className="grid gap-16 border-b border-white/15 pb-20 lg:grid-cols-12">

        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Solmaz Grup
          </p>

          <h2 className="mt-6 max-w-lg text-4xl font-light leading-tight md:text-5xl">
            Geleceğin yaşam alanlarını birlikte inşa edelim.
          </h2>
        </div>

        <div className="lg:col-span-3 lg:col-start-7">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-white/40">
            Menü
          </p>

          <div className="flex flex-col gap-4 text-white/70">
            <Link href="/kurumsal">Kurumsal</Link>
            <Link href="/projeler">Projeler</Link>
            <Link href="/hizmetler">Hizmetler</Link>
            <Link href="/arsa-sahipleri">Arsa Sahipleri</Link>
            <Link href="/iletisim">İletişim</Link>
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-white/40">
            İletişim
          </p>

          <p className="text-white/70">
            Milas / Muğla
          </p>

          <Link
            href="/iletisim"
            className="mt-6 inline-flex items-center gap-2 border-b border-white/30 pb-1"
          >
            Bize Ulaşın
            <ArrowUpRight size={15} />
          </Link>
        </div>

      </div>

      <div className="flex flex-col justify-between gap-5 pt-8 text-xs text-white/35 md:flex-row">
        <p>
          © {new Date().getFullYear()} Solmaz Grup. Tüm hakları saklıdır.
        </p>

        <div className="flex gap-6">
          <Link href="/kvkk">KVKK</Link>
          <Link href="/gizlilik">Gizlilik Politikası</Link>
        </div>
      </div>

    </footer>
  );
}