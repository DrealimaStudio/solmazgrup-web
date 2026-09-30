import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolmazChat from "@/components/SolmazChat";
import OrganizationSchema from "@/components/OrganizationSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://solmazgrup.com"),

  title: {
    default: "Solmaz Grup | İnşaat, Mimarlık ve Mühendislik",
    template: "%s | Solmaz Grup",
  },

  description:
    "Solmaz Grup, 2002 yılından bu yana Milas ve Muğla bölgesinde konut projeleri, inşaat, mimarlık ve mühendislik hizmetleri sunmaktadır.",

  applicationName: "Solmaz Grup",

  keywords: [
    "Solmaz Grup",
    "Milas inşaat",
    "Muğla inşaat",
    "Milas konut projeleri",
    "Milas mimarlık",
    "Milas mühendislik",
    "Milas kat karşılığı",
    "Muğla konut projeleri",
  ],

  authors: [
    {
      name: "Solmaz Grup",
    },
  ],

  creator: "Solmaz Grup",
  publisher: "Solmaz Grup",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: "Solmaz Grup",
    title: "Solmaz Grup | İnşaat, Mimarlık ve Mühendislik",
    description:
      "2002 yılından bu yana Milas'ta yaşam alanları geliştiren Solmaz Grup'un projelerini ve hizmetlerini keşfedin.",
    images: [
      {
        url: "/images/hero_welcome.png",
        width: 1200,
        height: 630,
        alt: "Solmaz Grup",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Solmaz Grup | İnşaat, Mimarlık ve Mühendislik",
    description:
      "Solmaz Grup'un projelerini, mimarlık ve mühendislik hizmetlerini keşfedin.",
    images: ["/images/hero_welcome.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        {/* Google / Schema.org şirket bilgileri */}
        <OrganizationSchema />

        {/* Ana navigasyon */}
        <Header />

        {/* Sayfa içeriği */}
        {children}

        {/* Footer */}
        <Footer />

        {/* Solmaz AI - tüm sayfalarda sağ altta */}
        <SolmazChat />
      </body>
    </html>
  );
}