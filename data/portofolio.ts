export interface PortofolioItem {
    id: number;
    name: string;
    image: string;
    description: string;
    category: string;
  }
  
  export const arrayPorto: PortofolioItem[] = [
    {
      id: 1,
      name: "Travel App",
      image: "/images/travelApp.svg",
      description: "Desain UI/UX Aplikasi Booking Tiket Pesawat.",
      category: "uiux",
    },
    {
      id: 2,
      name: "Concert App",
      image: "/images/Konser.jpg",
      description: "Desain UI/UX Aplikasi Pembelian Tiket Konser.",
      category: "uiux",
    },
    {
      id: 3,
      name: "Protech Website",
      image: "/images/web1.png",
      description: "Platform Pelatihan Keterampilan.",
      category: "website",
    },
    {
      id: 4,
      name: "Ecommerce Fashion Sports App",
      image: "/images/ecommerceApp.png",
      description: "Desain UI/UX Aplikasi E-Commerce Fashion Sports.",
      category: "uiux",
    },
    {
      id: 5,
      name: "ExploreNusa Website",
      image: "/images/exploreNusa.png",
      description:
        "Menjelajahi Semua Yang Ada di Indonesia, Hanya di ExploreNusa.",
      category: "website",
    },
    {
      id: 6,
      name: "ExploreNusa Website",
      image: "/images/travelApp.jpg",
      description: "Desain UI/UX Aplikasi Travel.",
      category: "uiux",
    },
    {
      id: 7,
      name: "Ecommerce Fashion Website",
      image: "/images/ecommerce.png",
      description: "Belanja Fashion Dengan Online.",
      category: "website",
    },
    {
      id: 8,
      name: "Agency Website",
      image: "/images/agency.png",
      description: "Website Agency.",
      category: "website",
    },
    {
      id: 9,
      name: "Bookself Website",
      image: "/images/library.png",
      description: "List buku untuk membaca.",
      category: "website",
    },
    {
      id: 10,
      name: "Travel Website",
      image: "/images/travel.png",
      description: "Website Travel.",
      category: "website",
    },
  ];