export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  coverImage: string;
  images: string[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "chennai-tamilnadu-1",
    title: "Urban Sanctuary",
    location: "Chennai, Tamil Nadu",
    category: "Residential",
    coverImage: "/projects/chennai_tamilnadu_1/1.webp",
    images: [
      "/projects/chennai_tamilnadu_1/1.webp",
      "/projects/chennai_tamilnadu_1/2.webp"
    ]
  },
  {
    id: "chennai-tamilnadu-2",
    title: "Modern Haven",
    location: "Chennai, Tamil Nadu",
    category: "Residential",
    coverImage: "/projects/chennai_tamilnadu_2/1.webp",
    images: [
      "/projects/chennai_tamilnadu_2/1.webp",
      "/projects/chennai_tamilnadu_2/2.webp",
      "/projects/chennai_tamilnadu_2/3.webp",
    ]
  },
  {
    id: "bangalore-karnataka-1",
    title: "Project Alpha",
    location: "Bangalore, Karnataka",
    category: "Commercial",
    coverImage: "/projects/bangalore_karnataka_1/1.webp",
    images: [
      "/projects/bangalore_karnataka_1/1.webp",
      "/projects/bangalore_karnataka_1/2.webp",
      "/projects/bangalore_karnataka_1/3.webp"
    ]
  },
  {
    id: "bangalore-karnataka-2",
    title: "Project Beta",
    location: "Bangalore, Karnataka",
    category: "Commercial",
    coverImage: "/projects/bangalore_karnataka_2/1.webp",
    images: [
      "/projects/bangalore_karnataka_2/1.webp",
      "/projects/bangalore_karnataka_2/2.webp",
      "/projects/bangalore_karnataka_2/3.webp",
      "/projects/bangalore_karnataka_2/4.webp",
      "/projects/bangalore_karnataka_2/5.webp"
    ]
  },
  {
    id: "bangalore-karnataka-3",
    title: "Project Gamma",
    location: "Bangalore, Karnataka",
    category: "Commercial",
    coverImage: "/projects/bangalore_karnataka_3/1.webp",
    images: [
      "/projects/bangalore_karnataka_3/1.webp",
      "/projects/bangalore_karnataka_3/2.webp"
    ]
  },
  {
    id: "yercaud-tamilnadu",
    title: "Hilltop Retreat",
    location: "Yercaud, Tamil Nadu",
    category: "Residential",
    coverImage: "/projects/yercaud_tamilnadu/1.webp",
    images: [
      "/projects/yercaud_tamilnadu/1.webp",
      "/projects/yercaud_tamilnadu/2.webp",
      "/projects/yercaud_tamilnadu/3.webp"
    ]
  }
];
