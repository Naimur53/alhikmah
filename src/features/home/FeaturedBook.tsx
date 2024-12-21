"use client";

import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";

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

export function FeaturedBook() {
    return (
        <div className="min-h-[80vh] relative flex items-center w-full bg-primary-900 py-16">
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
                                  
                                    <div className="">
                                        <h2 className="mb-4 lg:text-[46px] max-w-[660px] text-[#000000]">{book.title}</h2>
                                        <div className="space-y-2 text-dark-200 lg:mt-5">
                                            <p className="">লেখক : {book.author}</p>
                                            <p>প্রকাশনী : {book.publisher}</p>
                                        </div>
                                        <Link href="/details-book">
                                            <button className="mt-8 rounded-[6px] bg-[#FFDB07] px-10 py-3 font-semibold text-black transition-colors hover:bg-[#d4e23a]">
                                                বইটি পড়ুন
                                            </button>
                                        </Link>
                                    </div>
                                    
                                    <div className="mb-8 ">
                                        <Image
                                            src={`/images/newbook1.jpg`}
                                            alt={book.title}
                                            height={500}
                                            quality={100}
                                            width={500}
                                            className="md:h-[400px] h-[250px] w-[200px] md:w-[320px] rounded-[8px] object-cover shadow-lg"
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between px-4">
                    <CarouselPrevious className="static h-12 w-12 rounded-full border border-[#007CE3] bg-white hover:bg-[#007CE3] hover:text-white" />
                    <CarouselNext className="static h-12 w-12 rounded-full border border-[#007CE3] bg-white hover:bg-[#007CE3] hover:text-white" />
                    </div>

                </Carousel>

                    
                
            </div>
            {/* backgorunds */}
                <div className="bg-shade lg:!size-[200px] -top-10 left-0 xl:-left-10"></div>
                <div className="bg-shade lg:!size-[200px] xl:-right-10 bottom-0 md:top-[50%] right-[5%]"></div>

                <Image className="bg-star lg:top-[5%] right-4 xl:right-[10%] " src="/images/bgStar.png" height={40} width={40} alt="star"></Image>
                <Image className="bg-star top-[10%] left-[20%] " src="/images/bgStar.png" height={18} width={18} alt="star"></Image>
                <Image className="bg-star top-[50%] left-[60%] " src="/images/bgStar.png" height={15} width={15} alt="star"></Image>
                <Image className="bg-star bottom-0 left-[5%] -z-10" src="/images/bgStar.png" height={15} width={15} alt="star"></Image>
        </div>
    );
}
