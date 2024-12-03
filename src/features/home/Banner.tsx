"use client";

import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
        imageUrl: "/book-cover.jpg", // Replace with your actual image
    },
    {
        id: 1,
        title: "উসমানি সালতানাতের ইতিহাস (৪ খন্ড)",
        author: "ড. রাগিব সারজানি",
        publisher: "মাকতাবাতুল হাসান",
        imageUrl: "/book-cover.jpg", // Replace with your actual image
    },
    {
        id: 1,
        title: "উসমানি সালতানাতের ইতিহাস (৪ খন্ড)",
        author: "ড. রাগিব সারজানি",
        publisher: "মাকতাবাতুল হাসান",
        imageUrl: "/book-cover.jpg", // Replace with your actual image
    },
    // Add more books as needed
];

export function Banner() {
    return (
        <div className="min-h-[80vh]  flex items-center w-full bg-primary-900 py-16">
            <div className="relative mx-auto container px-4">
                {/* <div className="absolute right-4 top-4">
                    <button className="rounded-[8px] bg-[#193C53] px-[20px] py-[10px] text-[#BACEDC] transition-colors hover:bg-[#2a5c7d]">
                        রিডার্স বই
                    </button>
                </div> */}

                <Carousel className="w-full">
                    <CarouselContent>
                        {books.map((book) => (
                            <CarouselItem key={book.id}>
                                <div className="flex lg:flex-row flex-col-reverse items-center justify-between text-center lg:text-start mx-auto max-w-[1100px]">
                                  
                                    <div>
                                    <h2 className="mb-4 h1 text-white">{book.title}</h2>
                                    <div className="space-y-2 text-dark-200">
                                        <p>লেখক : {book.author}</p>
                                        <p>প্রকাশনী : {book.publisher}</p>
                                    </div>
                                    <button className="mt-8 rounded-md bg-[#E7F54E] px-8 py-3 font-semibold text-black transition-colors hover:bg-[#d4e23a]">
                                        বইটি পড়ুন
                                    </button>
                                    </div>
                                    
                                    <div className="mb-8">
                                        <Image
                                            src={`/images/newbook1.jpg`}
                                            alt={book.title}
                                            height={500}
                                            quality={100}
                                            width={500}
                                            className="md:h-[400px] h-[250px] w-[200px] md:w-[320px] rounded-lg object-cover shadow-lg"
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between px-4">
                        <CarouselPrevious className="static size-[30px] rounded-sm border-none bg-[#193C53] p-[20px] text-white hover:bg-gray-700 hover:text-white" />
                        <CarouselNext className="static rounded-sm border-none bg-[#193C53] p-[20px] text-[30px] text-white hover:bg-gray-700 hover:text-white" />
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
