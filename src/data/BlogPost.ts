export interface BlogPost {
    id: number;
    title: string;
    description: string;
    author: string;
    date: string;
    imageUrl: string;
    category: string;
  }
  
  export const BlogPost: BlogPost[] = [
    {
      id: 1,
      title: "The Art of Mindful Living",
      description: "Discover how mindfulness can transform your daily life and bring inner peace.",
      author: "Sarah Mitchell",
      date: "March 15, 2024",
      imageUrl: "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?q=80&w=1920",
      category: "Lifestyle"
    },
    {
      id: 2,
      title: "Sacred Spaces",
      description: "Exploring the world's most beautiful places of worship and meditation.",
      author: "David Chen",
      date: "March 16, 2024",
      imageUrl: "https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&w=1920",
      category: "Travel"
    },
    {
      id: 3,
      title: "Dawn of Spirituality",
      description: "Understanding the connection between nature and spiritual awakening.",
      author: "Emma Watson",
      date: "March 17, 2024",
      imageUrl: "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=1920",
      category: "Spirituality"
    },
    {
      id: 4,
      title: "Modern Meditation",
      description: "Incorporating meditation practices in our fast-paced digital world.",
      author: "Michael Brooks",
      date: "March 18, 2024",
      imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920",
      category: "Wellness"
    },
    {
      id: 5,
      title: "Inner Harmony",
      description: "Finding balance through ancient wisdom and modern practices.",
      author: "Lisa Zhang",
      date: "March 19, 2024",
      imageUrl: "https://images.unsplash.com/photo-1552503082-3e95ff957019?q=80&w=1920",
      category: "Health"
    }
  ];