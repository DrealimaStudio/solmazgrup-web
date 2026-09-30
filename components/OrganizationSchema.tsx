export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],

    "@id": "https://solmazgrup.com/#organization",

    name: "Solmaz Grup İnşaat Mimarlık Mühendislik Ltd. Şti.",

    alternateName: "Solmaz Grup",

    url: "https://solmazgrup.com",

    email: "iletisim@solmazgrup.com",

    telephone: "+90 252 513 11 19",

    foundingDate: "2002",

    address: {
      "@type": "PostalAddress",
      streetAddress: "İsmet Paşa, Atatürk Blv. No:58/1",
      addressLocality: "Milas",
      addressRegion: "Muğla",
      postalCode: "48200",
      addressCountry: "TR",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}