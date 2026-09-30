import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",

  description:
    "Solmaz Grup internet sitesi gizlilik politikası ve kişisel verilerin korunmasına ilişkin bilgiler.",

  alternates: {
    canonical: "/gizlilik",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="bg-[#f7f6f2] text-[#171717]">

      {/* HERO */}
      <section className="border-b border-black/10 px-6 pb-20 pt-40 sm:px-8 lg:px-16 lg:pb-28 lg:pt-48">

        <div className="mx-auto max-w-[1450px]">

          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Yasal
          </p>

          <h1 className="mt-7 max-w-4xl text-5xl font-light leading-[1.05] tracking-[-0.035em] md:text-7xl">
            Gizlilik
            <br />
            Politikası
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-600">
            İnternet sitemizi kullanırken paylaşılan bilgilerin
            gizliliğine önem veriyoruz.
          </p>

        </div>

      </section>


      {/* CONTENT */}
      <section className="px-6 py-20 sm:px-8 lg:px-16 lg:py-28">

        <div className="mx-auto grid max-w-[1450px] gap-14 lg:grid-cols-12">

          <aside className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              solmazgrup.com
            </p>
          </aside>

          <article className="max-w-3xl space-y-14 lg:col-span-7">

            <LegalSection title="1. Genel">
              <p>
                Bu Gizlilik Politikası, Solmaz Grup internet sitesinin
                kullanımı sırasında kişisel bilgilerin nasıl ele
                alınabileceğine ilişkin genel bilgilendirme amacı
                taşımaktadır.
              </p>
            </LegalSection>

            <LegalSection title="2. İletişim Bilgileri">
              <p>
                İnternet sitesi üzerinden veya sitede yer alan iletişim
                kanalları aracılığıyla bizimle iletişime geçtiğinizde
                ad-soyad, telefon numarası, e-posta adresi ve
                tarafınızca paylaşılan mesaj içeriği gibi bilgiler
                işlenebilir.
              </p>
            </LegalSection>

            <LegalSection title="3. WhatsApp Üzerinden İletişim">
              <p>
                İnternet sitesinde bulunan bazı iletişim butonları
                WhatsApp uygulamasına yönlendirme yapabilir.
                WhatsApp&apos;a yönlendirildikten sonraki veri işleme
                faaliyetleri ilgili hizmet sağlayıcının kendi
                politikalarına tabi olabilir.
              </p>
            </LegalSection>

            <LegalSection title="4. Harici Bağlantılar">
              <p>
                İnternet sitemizde harita, gayrimenkul ilanı veya diğer
                üçüncü taraf internet sitelerine yönlendiren bağlantılar
                bulunabilir. Bu bağlantılar üzerinden erişilen üçüncü
                taraf hizmetlerin gizlilik uygulamalarından ilgili
                hizmet sağlayıcılar sorumludur.
              </p>
            </LegalSection>

            <LegalSection title="5. Bilgi Güvenliği">
              <p>
                Kişisel bilgilerin yetkisiz erişim, kullanım veya
                açıklamaya karşı korunması amacıyla uygun teknik ve
                idari tedbirlerin uygulanması hedeflenmektedir.
              </p>
            </LegalSection>

            <LegalSection title="6. Politika Değişiklikleri">
              <p>
                İnternet sitesinin özelliklerinde veya ilgili
                mevzuatta meydana gelebilecek değişiklikler
                doğrultusunda bu politika güncellenebilir.
              </p>
            </LegalSection>

            <LegalSection title="7. İletişim">
              <p>
                Gizlilik ve kişisel verilerinizle ilgili sorularınız
                için bizimle iletişime geçebilirsiniz.
              </p>

              <div className="mt-6 border-l border-black/20 pl-6">
                <p className="font-medium">
                  Solmaz Grup İnşaat Mimarlık Mühendislik Ltd. Şti.
                </p>

                <p className="mt-3">
                  İsmet Paşa, Atatürk Blv. No:58/1
                  <br />
                  48200 Milas / Muğla
                </p>

                <p className="mt-3">
                  <a
                    href="mailto:iletisim@solmazgrup.com"
                    className="border-b border-black/30"
                  >
                    iletisim@solmazgrup.com
                  </a>
                </p>

                <p className="mt-2">
                  <a
                    href="tel:+902525131119"
                    className="border-b border-black/30"
                  >
                    0 252 513 11 19
                  </a>
                </p>
              </div>
            </LegalSection>

          </article>

        </div>

      </section>


      <section className="border-t border-black/10 px-6 py-16 sm:px-8 lg:px-16">

        <div className="mx-auto flex max-w-[1450px] flex-col justify-between gap-6 md:flex-row">

          <p className="text-sm text-neutral-500">
            Solmaz Grup
          </p>

          <Link
            href="/kvkk"
            className="border-b border-black pb-1 text-sm"
          >
            KVKK Aydınlatma Metni
          </Link>

        </div>

      </section>

    </main>
  );
}


function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>

      <h2 className="text-2xl font-light tracking-[-0.02em] md:text-3xl">
        {title}
      </h2>

      <div className="mt-6 space-y-5 text-[15px] leading-8 text-neutral-600 md:text-base">
        {children}
      </div>

    </section>
  );
}