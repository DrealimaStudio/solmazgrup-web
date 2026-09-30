"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /*
    Ana sayfa ve proje detaylarında header görselin üzerinde.
    /projeler gibi açık renk sayfalarda ise başlangıçtan itibaren koyu yazı.
  */
  const isOverlayPage =
    pathname === "/" ||
    /^\/projeler\/[^/]+$/.test(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const transparent = isOverlayPage && !scrolled;

  return (
    <>
      <header
        className={`
          fixed left-0 top-0 z-50 w-full
          transition-all duration-500
          ${
            transparent
              ? "bg-transparent"
              : "border-b border-black/5 bg-white/90 shadow-sm backdrop-blur-xl"
          }
        `}
      >
        <div className="flex h-24 items-center justify-between px-6 lg:px-16">

          {/* LOGO */}
          <Link
  href="/"
  className="relative h-[82px] w-[220px] shrink-0"
>
  <Image
    src="/images/solmaz-grup-logo_new.jpg"
    alt="Solmaz Grup"
    fill
    priority
    className="object-contain object-left"
  />
</Link>

          {/* DESKTOP MENU */}
          <nav
  className={`
    hidden items-center gap-8 text-[15px] font-semibold lg:flex
              transition-colors duration-500
             ${transparent ? "text-white drop-shadow-[0_1px_5px_rgba(0,0,0,0.55)]" : "text-neutral-800"}
            `}
          >
            <NavLink href="/kurumsal">
              Kurumsal
            </NavLink>

            <NavLink href="/projeler">
              Projeler
            </NavLink>

            <NavLink href="/hizmetler">
              Hizmetler
            </NavLink>

            <NavLink href="/arsa-sahipleri">
              Arsa Sahipleri
            </NavLink>

            <NavLink href="/iletisim">
              İletişim
            </NavLink>

            {/* Dil butonunu şimdilik görsel olarak bırakıyoruz */}
            <span
  className={`
    ml-2 border px-4 py-2 text-xs font-semibold tracking-wider
    transition
    ${
      transparent
        ? "border-white/50 bg-black/15 text-white"
        : "border-black/20 text-neutral-800"
    }
  `}
>
  TR
</span>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Menüyü aç"
            className={`
              transition-colors lg:hidden
              ${transparent ? "text-white" : "text-black"}
            `}
          >
            <Menu size={28} />
          </button>

        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-[100]
          bg-[#151515] text-white
          transition-transform duration-500 ease-out
          ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        <div className="flex h-24 items-center justify-between px-6">

          <Link
  href="/"
  className="relative h-[82px] w-[220px] shrink-0"
>
  <Image
    src="/images/solmaz-grup-logo_new.jpg"
    alt="Solmaz Grup"
    fill
    priority
    className="object-contain object-left"
  />
</Link>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Menüyü kapat"
          >
            <X size={29} />
          </button>

        </div>

        <nav className="flex flex-col px-7 pt-12">

          <MobileLink href="/">
            Ana Sayfa
          </MobileLink>

          <MobileLink href="/kurumsal">
            Kurumsal
          </MobileLink>

          <MobileLink href="/projeler">
            Projeler
          </MobileLink>

          <MobileLink href="/hizmetler">
            Hizmetler
          </MobileLink>

          <MobileLink href="/arsa-sahipleri">
            Arsa Sahipleri
          </MobileLink>

          <MobileLink href="/iletisim">
            İletişim
          </MobileLink>

          <div className="mt-12 text-xs tracking-[0.25em] text-white/40">
            TÜRKÇE
          </div>

        </nav>
      </div>
    </>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const active =
    pathname === href ||
    (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      className="group relative py-2"
    >
      {children}

      <span
        className={`
          absolute bottom-0 left-0 h-px
          bg-current transition-all duration-300
          ${active ? "w-full" : "w-0 group-hover:w-full"}
        `}
      />
    </Link>
  );
}

function MobileLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        border-b border-white/10
        py-5 text-3xl font-light
        transition
        hover:pl-2 hover:text-white/60
      "
    >
      {children}
    </Link>
  );
}