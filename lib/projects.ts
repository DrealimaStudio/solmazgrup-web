export type Project = {
  slug: string;
  title: string;

  location?: string;
  district?: string;
  city?: string;

  category?: string;
  unitTypes?: string[];

  status?: "completed" | "ongoing" | "planned";

  shortDescription?: string;
  description?: string;

  coverImage?: string;
  images?: string[];

  featured?: boolean;
  order?: number;
};

export const projects: Project[] = [
  {
    slug: "orkide-2",
    title: "Orkide 2 Sitesi",

    location: "Aydınlıkevler Mahallesi",
    district: "Milas",
    city: "Muğla",

    category: "Konut",

    coverImage: "/projects/orkide-2/cover_v2.jpg",

    images: [
      "/projects/orkide-2/01.jpg",
      "/projects/orkide-2/02.jpg",
      "/projects/orkide-2/03.jpg",
      "/projects/orkide-2/04.jpg",
      "/projects/orkide-2/05.jpg",
      "/projects/orkide-2/06.jpg",
    ],

    featured: true,
    order: 1,
  },

  {
    slug: "elit-park",
    title: "Elit Park Sitesi",

    location: "Cumhuriyet Mahallesi",
    district: "Milas",
    city: "Muğla",

    category: "Konut",
    unitTypes: ["2+1", "3+1"],

    coverImage: "/projects/elit-park/cover_v2.jpg",

    images: [
      "/projects/elit-park/01.jpg",
      "/projects/elit-park/02.jpg",
      "/projects/elit-park/03.jpg",
      "/projects/elit-park/04.jpg",
      "/projects/elit-park/05.jpg",
      "/projects/elit-park/06.jpg",
    ],

    featured: true,
    order: 2,
  },

  {
    slug: "orkide-3",
    title: "Orkide 3 Sitesi",

    location: "Aydınlıkevler Mahallesi",
    district: "Milas",
    city: "Muğla",

    category: "Konut",

    coverImage: "/projects/orkide-3/cover.jpg",

    images: [
      "/projects/orkide-3/01.jpg",
      "/projects/orkide-3/02.jpg",
      "/projects/orkide-3/03.jpg",
      "/projects/orkide-3/04.jpg",
      "/projects/orkide-3/05.jpg",
      "/projects/orkide-3/06.jpg",
    ],

    featured: true,
    order: 3,
  },

  {
    slug: "akasya-sitesi",
    title: "Akasya Sitesi",
    coverImage: "/projects/akasya-sitesi/cover.jpg",
  },

  {
    slug: "deniz-apartmani",
    title: "Deniz Apartmanı",
    coverImage: "/projects/deniz-apartmani/cover.jpg",
  },

  {
    slug: "ahmet-kilbey",
    title: "Ahmet Kılbey",
    coverImage: "/projects/ahmet-kilbey/cover.jpg",
  },

  {
    slug: "sari-konaklar",
    title: "Sarı Konaklar",
    coverImage: "/projects/sari-konaklar/cover.jpg",
  },

  {
    slug: "solmaz-grup-konaklari",
    title: "Solmaz Grup Konakları",
    coverImage: "/projects/solmaz-grup-konaklari/cover.jpg",
  },

  {
    slug: "buket-evleri",
    title: "Buket Evleri",

    location: "Hacıabti Mahallesi",
    district: "Milas",
    city: "Muğla",

    unitTypes: ["2+1", "3+1"],

    coverImage: "/projects/buket-evleri/cover.jpg",
  },

  {
    slug: "serenty-sitesi",
    title: "Serenty Sitesi",
    coverImage: "/projects/serenty-sitesi/cover.jpg",
  },

  {
    slug: "helvacioglu-apartmani",
    title: "Helvacıoğlu Apartmanı",
    coverImage: "/projects/helvacioglu-apartmani/cover.jpg",
  },

  {
    slug: "irmak-residence",
    title: "Irmak Residence",

    location: "İsmetpaşa Mahallesi",
    district: "Milas",
    city: "Muğla",

    unitTypes: ["3+1"],

    coverImage: "/projects/irmak-residence/cover.jpg",
  },

  {
    slug: "mavisehir-residence",
    title: "Mavişehir Residence",

    location: "Cumhuriyet Mahallesi",
    district: "Milas",
    city: "Muğla",

    unitTypes: ["3+1", "4+1"],

    coverImage: "/projects/mavisehir-residence/cover.jpg",
  },

  {
    slug: "bahcesehir-residence",
    title: "Bahçeşehir Residence",
    coverImage: "/projects/bahcesehir-residence/cover.jpg",
  },

  {
    slug: "bahcesehir-2-etap",
    title: "Bahçeşehir 2. Etap",
    coverImage: "/projects/bahcesehir-2-etap/cover.jpg",
  },

  {
    slug: "basaksehir-sitesi",
    title: "Başakşehir Sitesi",
    coverImage: "/projects/basaksehir-sitesi/cover.jpg",
  },

  {
    slug: "ege-kent-sitesi",
    title: "Ege Kent Sitesi",
    coverImage: "/projects/ege-kent-sitesi/cover.jpg",
  },

  {
    slug: "umut-apartmani",
    title: "Umut Apartmanı",
    coverImage: "/projects/umut-apartmani/cover.jpg",
  },

  {
    slug: "palmiye-park-sitesi",
    title: "Palmiye Park Sitesi",

    location: "Emek Mahallesi",
    district: "Milas",
    city: "Muğla",

    unitTypes: ["3+1", "4+1"],

    coverImage: "/projects/palmiye-park-sitesi/cover.jpg",
  },

  {
    slug: "eren-apartmani",
    title: "Eren Apartmanı",
    coverImage: "/projects/eren-apartmani/cover.jpg",
  },

  {
    slug: "aydin-apartmani",
    title: "Aydın Apartmanı",
    coverImage: "/projects/aydin-apartmani/cover.jpg",
  },

  {
    slug: "orkide-1-apartmani",
    title: "Orkide 1 Apartmanı",
    coverImage: "/projects/orkide-1-apartmani/cover.jpg",
  },

  {
    slug: "kardelen-1-apartmani",
    title: "Kardelen 1 Apartmanı",
    coverImage: "/projects/kardelen-1-apartmani/cover.jpg",
  },

  {
    slug: "kardelen-2-apartmani",
    title: "Kardelen 2 Apartmanı",
    coverImage: "/projects/kardelen-2-apartmani/cover.jpg",
  },

  {
    slug: "papatya-apartmani",
    title: "Papatya Apartmanı",
    coverImage: "/projects/papatya-apartmani/cover.jpg",
  },

  {
    slug: "serkan-apartmani",
    title: "Serkan Apartmanı",
    coverImage: "/projects/serkan-apartmani/cover.jpg",
  },

  {
    slug: "yesil-vadi",
    title: "Yeşil Vadi",
    coverImage: "/projects/yesil-vadi/cover.jpg",
  },

  {
    slug: "ufuk-parildar",
    title: "Ufuk Parıldar",
    coverImage: "/projects/ufuk-parildar/cover.jpg",
  },

  {
    slug: "defne-2-apartmani",
    title: "Defne 2 Apartmanı",

    location: "Emek Mahallesi",
    district: "Milas",
    city: "Muğla",

    unitTypes: ["2+1", "3+1"],

    coverImage: "/projects/defne-2-apartmani/cover.jpg",
  },

  {
    slug: "atakent-sitesi",
    title: "Atakent Sitesi",
    coverImage: "/projects/atakent-sitesi/cover.jpg",
  },
];


/* =========================================================
   PROJECT HELPERS
========================================================= */

export function getProject(slug: string) {
  return projects.find(
    (project) => project.slug === slug
  );
}

export function getFeaturedProjects() {
  return projects
    .filter((project) => project.featured)
    .sort(
      (a, b) =>
        (a.order ?? 999) - (b.order ?? 999)
    );
}