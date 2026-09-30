import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",

  description:
    "Solmaz Grup kişisel verilerin korunması ve işlenmesine ilişkin aydınlatma metni.",

  alternates: {
    canonical: "/kvkk",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function KvkkPage() {
  return (
    <main className="bg-[#f7f6f2] text-[#171717]">

      {/* HERO */}
      <section className="border-b border-black/10 px-6 pb-20 pt-40 sm:px-8 lg:px-16 lg:pb-28 lg:pt-48">
        <div className="mx-auto max-w-[1450px]">

          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Yasal
          </p>

          <h1 className="mt-7 max-w-4xl text-5xl font-light leading-[1.05] tracking-[-0.035em] md:text-7xl">
            KVKK
            <br />
            Aydınlatma Metni
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-600">
            Kişisel verilerinizin korunmasına önem veriyoruz.
          </p>

        </div>
      </section>


      {/* CONTENT */}
      <section className="px-6 py-20 sm:px-8 lg:px-16 lg:py-28">

        <div className="mx-auto grid max-w-[1450px] gap-14 lg:grid-cols-12">

          <aside className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              Solmaz Grup
            </p>
          </aside>

          <article className="max-w-3xl space-y-14 lg:col-span-7">

            <LegalSection title="1. Veri Sorumlusu">
              <p>
                6698 sayılı Kişisel Verilerin Korunması Kanunu
                (“KVKK”) kapsamında, kişisel verileriniz Solmaz Grup
                İnşaat Mimarlık Mühendislik Ltd. Şti. tarafından veri
                sorumlusu sıfatıyla işlenebilir.
              </p>
            </LegalSection>

            <LegalSection title="2. İşlenebilecek Kişisel Veriler">
              <p>
                İnternet sitesi üzerinden bizimle iletişime geçmeniz
                halinde ad-soyad, telefon numarası, e-posta adresi ve
                tarafınızca iletişim sırasında paylaşılan diğer bilgiler
                işlenebilir.
              </p>

              <p>
                Arsa değerlendirme talebinde bulunmanız halinde ayrıca
                arsanın konumu, yaklaşık büyüklüğü, ada/parsel bilgileri
                ve tarafınızca açıklama alanında paylaşılan bilgiler
                işlenebilir.
              </p>
            </LegalSection>

            <LegalSection title="3. Kişisel Verilerin İşlenme Amaçları">
              <p>
                Kişisel verileriniz; iletişim taleplerinin
                değerlendirilmesi, talep ettiğiniz konularda sizinle
                iletişime geçilmesi, proje ve hizmetler hakkında bilgi
                verilmesi ve şirket faaliyetlerinin yürütülmesi
                amaçlarıyla işlenebilir.
              </p>
            </LegalSection>

            <LegalSection title="4. Kişisel Verilerin Toplanma Yöntemi">
              <p>
                Kişisel veriler, internet sitesindeki iletişim
                kanalları, WhatsApp yönlendirmeleri, telefon, e-posta
                veya tarafınızca doğrudan gerçekleştirilen iletişim
                yoluyla elektronik ya da fiziki ortamda elde edilebilir.
              </p>
            </LegalSection>

            <LegalSection title="5. Kişisel Verilerin Aktarılması">
              <p>
                Kişisel verileriniz, ilgili mevzuatın gerektirdiği
                durumlarda yetkili kamu kurum ve kuruluşları ile ve
                hizmetlerin yürütülmesi için gerekli olduğu ölçüde
                hizmet sağlayıcılarla, KVKK&apos;da öngörülen şartlara
                uygun olarak paylaşılabilir.
              </p>
            </LegalSection>

            <LegalSection title="6. KVKK Kapsamındaki Haklarınız">
              <p>
                KVKK&apos;nın 11. maddesi kapsamında kişisel
                verilerinizin işlenip işlenmediğini öğrenme, işlenmişse
                buna ilişkin bilgi talep etme, işlenme amacını ve amacına
                uygun kullanılıp kullanılmadığını öğrenme ve kanunda
                belirtilen diğer haklara sahipsiniz.
              </p>
            </LegalSection>

            <LegalSection title="7. Başvuru ve İletişim">
              <p>
                Kişisel verilerinize ilişkin talepleriniz için Solmaz
                Grup ile aşağıdaki iletişim bilgileri üzerinden
                iletişime geçebilirsiniz.
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
                  E-posta:{" "}
                  <a
                    href="mailto:iletisim@solmazgrup.com"
                    className="border-b border-black/30"
                  >
                    iletisim@solmazgrup.com
                  </a>
                </p>

                <p>
                  Telefon:{" "}
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


      {/* BOTTOM */}
      <section className="border-t border-black/10 px-6 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto flex max-w-[1450px] flex-col justify-between gap-6 md:flex-row">

          <p className="text-sm text-neutral-500">
            Solmaz Grup
          </p>

          <Link
            href="/gizlilik"
            className="border-b border-black pb-1 text-sm"
          >
            Gizlilik Politikası
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