"use client";

import Image from "next/image";
import hadis from "../../../public/images/hadis.png";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type Book = {
    id: number;
    title: string;
    imageUrl: string;
};

const books: Book[] = [
    {
        id: 1,
        title: "সহিহ বুখারী",
        imageUrl: "/images/hadis1.jpg",
    },
    {
        id: 2,
        title: "সুনান ইবনে মাজাহ",
        imageUrl: "/images/hadis2.jpg",
    },
    {
        id: 3,
        title: "মুয়াত্তা ইমাম মালিক",
        imageUrl: "/images/hadis3.jpg",
    },
    {
        id: 4,
        title: "সুনান আবু দাউদ",
        imageUrl: "/images/hadis4.jpg",
    },
    {
        id: 5,
        title: "সুনান আবু দাউদ",
        imageUrl: "/images/hadis2.jpg",
    },
];

export function HadisBooks() {
    return (
        <div className=" relative z-20  mt-[100px] flex  items-center overflow-hidden rounded-[12px] bg-gradient-to-r from-[#007CE3] to-[#072253] p-4 lg:mb-[100px] lg:mt-[-150px] lg:py-[90px]">
            <div className="absolute inset-0 z-0 rounded-[12px]">
                <div>
                    <Image src={hadis} alt="" className="w-full" />
                </div>
            </div>
            <div className="mx-auto w-full max-w-6xl px-4 py-16">
                <div className="w-full px-4">
                    <div className="mb-12 md:max-w-[950px]">
                        <h2 className="pb-[16px] text-[32px] font-semibold leading-[42px] text-white sm:leading-[52px] md:text-[48px] md:leading-[62px]">
                            <span className="text-[#6AB6E8]">হাদিসের </span>
                            বই সমূহ
                        </h2>
                        <p className="pb-[30px] text-[18px] text-[#A5ABB1] md:pb-[55px] md:text-[24px] lg:text-[28px]">
                            ওয়েবসাইটটি ব্যবহারকারীদের একটি সমৃদ্ধ পাঠ অভিজ্ঞতা প্রদান করবে যেখানে তারা বিভিন্ন
                            বিষয়বস্তুর উপর ভিত্তি করে বই পড়তে।
                        </p>
                    </div>

                    <Carousel className="w-full">
                        <CarouselContent className="-ml-4">
                            {books.map((book) => (
                                <CarouselItem key={book.id} className="basis-full pl-4 sm:basis-1/2 lg:basis-1/4">
                                    <Card className="border-none bg-[#153B54] p-4 transition-all duration-300 hover:bg-[#1d4a69]">
                                        <div className="mb-4 aspect-[3/4] overflow-hidden rounded-lg">
                                            <Image
                                                src={book.imageUrl}
                                                alt={book.title}
                                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                                height={256}
                                                width={256}
                                            />
                                        </div>
                                        <h3 className="text-center text-xl font-semibold text-white">{book.title}</h3>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <div className="mt-8 flex items-center justify-center gap-4">
                            <CarouselPrevious className="static mt-[40px] rounded-sm bg-gray-800 p-[20px] text-white hover:bg-gray-700 hover:text-white" />
                            <button className="rounded-md bg-[#E7F54E] px-6 py-[10px] font-semibold text-black transition-colors hover:bg-[#d4e23a]">
                                সকল বই
                            </button>
                            <CarouselNext className="static mt-[40px] rounded-sm bg-gray-800 p-[20px] text-white hover:bg-gray-700 hover:text-white" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
