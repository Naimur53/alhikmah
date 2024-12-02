"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

type Book = {
  id: number;
  title: string;
  author: string;
  publisher: string;
  imageUrl: string;
};

const books: Book[] = [
  {
    id: 1,
    title: "উসমানি সালতানাতের ইতিহাস (৪ খন্ড)",
    author: "ড. রাগিব সারজানি",
    publisher: "মাকতাবাতুল হাসান",
    imageUrl: "/book-cover.jpg" // Replace with your actual image
  },
  {
    id: 1,
    title: "উসমানি সালতানাতের ইতিহাস (৪ খন্ড)",
    author: "ড. রাগিব সারজানি",
    publisher: "মাকতাবাতুল হাসান",
    imageUrl: "/book-cover.jpg" // Replace with your actual image
  },
  {
    id: 1,
    title: "উসমানি সালতানাতের ইতিহাস (৪ খন্ড)",
    author: "ড. রাগিব সারজানি",
    publisher: "মাকতাবাতুল হাসান",
    imageUrl: "/book-cover.jpg" // Replace with your actual image
  }
  // Add more books as needed
];

export function Banner() {
  return (
    <div className="w-full h-[80vh] bg-[#0D293B] min-h-[500px] py-16">
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="absolute top-4 right-4">
          <button className="px-[20px] py-[10px] text-[#BACEDC] bg-[#193C53] rounded-[8px] hover:bg-[#2a5c7d] transition-colors">
            রিডার্স বই
          </button>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {books.map((book) => (
              <CarouselItem key={book.id}>
                <div className="flex flex-col items-center text-center px-4">
                  <div className="mb-8">
                    <img
                      src={book.imageUrl}
                      alt={book.title}
                      className="w-48 h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {book.title}
                  </h2>
                  <div className="text-gray-300 space-y-2">
                    <p>লেখক : {book.author}</p>
                    <p>প্রকাশনী : {book.publisher}</p>
                  </div>
                  <button className="mt-8 px-8 py-3 bg-[#E7F54E] text-black font-semibold rounded-md hover:bg-[#d4e23a] transition-colors">
                    বইটি পড়ুন
                  </button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
            <CarouselPrevious className="static  bg-[#193C53] rounded-sm hover:bg-gray-700 border-none p-[20px] hover:text-white size-[30px] text-white" />
            <CarouselNext className="static  bg-[#193C53] hover:bg-gray-700 p-[20px] border-none rounded-sm hover:text-white text-white text-[30px] " />
          </div>

          {/* <div className="flex justify-center gap-2 mt-8">
            {books.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full ${
                  i === 0 ? "w-8 bg-[#E7F54E]" : "w-2 bg-gray-500"
                }`}
              />
            ))}
          </div> */}
        </Carousel>
      </div>
    </div>
  );
}
