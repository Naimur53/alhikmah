export interface Books {
    id: number;
    title: string;
    imageUrl: string;
    readMoreLink: string;
  }
  
  export const Books: Books[] = [
    {
      id: 1,
      title: "বৈষম্য বিরোধী...",
      imageUrl: "/images/newbook1.jpg",
      readMoreLink: "এখনি পড়ুন",
    },
    {
      id: 2,
      title: "সহীহ মুসলিম শরীফ",
      imageUrl: "/images/newbook2.jpg",
      readMoreLink: "এখনি পড়ুন",
    },
    {
      id: 3,
      title: "রিয়াদুস সালেহীন",
      imageUrl: "/images/newbook3.jpg",
      readMoreLink: "এখনি পড়ুন",
    },
    {
      id: 4,
      title: "তাফসীর ইবনে কাসীর",
      imageUrl: "/images/newbook4.jpg",
      readMoreLink: "এখনি পড়ুন",
    },
    {
      id: 5,
      title: "ফাজায়েলে আমল",
      imageUrl: "https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&w=1920",
      readMoreLink: "এখনি পড়ুন",
    },
  ];
  