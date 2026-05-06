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
    id: "chennai-tamilnadu",
    title: "Urban Sanctuary",
    location: "Chennai, Tamil Nadu",
    category: "Residential",
    coverImage: "/projects/chennai_tamilnadu/1.webp",
    images: [
      "/projects/chennai_tamilnadu/1.webp",
      "/projects/chennai_tamilnadu/2.webp"
    ]
  },
  {
    id: "bangalore-karnataka",
    title: "Modern Workspace",
    location: "Bangalore, Karnataka",
    category: "Commercial",
    coverImage: "/projects/bangalore_karnataka/1.webp",
    images: [
      "/projects/bangalore_karnataka/1.webp",
      "/projects/bangalore_karnataka/2.webp",
      "/projects/bangalore_karnataka/3.webp",
      "/projects/bangalore_karnataka/4.webp",
      "/projects/bangalore_karnataka/5.webp",
      "/projects/bangalore_karnataka/6.webp",
      "/projects/bangalore_karnataka/7.webp",
      "/projects/bangalore_karnataka/8.webp",
      "/projects/bangalore_karnataka/9.jpeg",
      "/projects/bangalore_karnataka/10.webp"
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
