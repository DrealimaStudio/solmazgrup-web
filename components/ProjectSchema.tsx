type ProjectSchemaProps = {
  title: string;
  slug: string;
  description?: string;
  image?: string;
};

export default function ProjectSchema({
  title,
  slug,
  description,
  image,
}: ProjectSchemaProps) {
  const projectUrl = `https://solmazgrup.com/projeler/${slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://solmazgrup.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projeler",
        item: "https://solmazgrup.com/projeler",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: projectUrl,
      },
    ],
  };

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",

    "@id": `${projectUrl}#project`,

    name: title,

    url: projectUrl,

    ...(description && {
      description,
    }),

    ...(image && {
      image: `https://solmazgrup.com${image}`,
    }),

    creator: {
      "@id": "https://solmazgrup.com/#organization",
    },

    publisher: {
      "@id": "https://solmazgrup.com/#organization",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectSchema),
        }}
      />
    </>
  );
}