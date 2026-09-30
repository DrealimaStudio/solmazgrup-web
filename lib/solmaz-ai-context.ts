import { projects } from "@/lib/projects";

export function getSolmazAIContext() {
  const projectContext = projects
    .map((project) => {
      const details = [
        `Proje adı: ${project.title}`,
        project.location && `Konum: ${project.location}`,
        project.district && `İlçe: ${project.district}`,
        project.city && `İl: ${project.city}`,
        project.category && `Kategori: ${project.category}`,
        project.unitTypes?.length &&
          `Daire tipleri: ${project.unitTypes.join(", ")}`,
        project.shortDescription &&
          `Kısa açıklama: ${project.shortDescription}`,
        project.description &&
          `Açıklama: ${project.description}`,
      ].filter(Boolean);

      return details.join("\n");
    })
    .join("\n\n---\n\n");

  return `
SOLMAZ GRUP HAKKINDA DOĞRULANMIŞ BİLGİLER

Şirket:
Solmaz Grup İnşaat Mimarlık Mühendislik Ltd. Şti.

Faaliyet başlangıcı:
2002

Merkez:
Milas / Muğla

Faaliyet alanları:
- İnşaat
- Konut projeleri
- Mimarlık
- Mühendislik
- Kat karşılığı proje geliştirme

İletişim:

Telefon:
0 252 513 11 19

E-posta:
iletisim@solmazgrup.com

Adres:
İsmet Paşa, Atatürk Blv. No:58/1,
48200 Milas / Muğla

ARSA SAHİPLERİ

Solmaz Grup, arsa sahiplerinin arsalarının proje potansiyelinin
değerlendirilmesi konusunda iletişim taleplerini kabul etmektedir.

Arsa değerlendirmesinde kullanıcıdan şu bilgiler istenebilir:
- Ad soyad
- Telefon
- E-posta
- Arsanın konumu
- Yaklaşık büyüklüğü
- Ada / parsel bilgisi
- Ek açıklama

PROJELER

${projectContext}
`;
}