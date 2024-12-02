import * as React from "react";
import Image from "next/image";

import { DynamicHeader } from "@/shared/DynamicHeader";
import { FaHeart } from "react-icons/fa6";

import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type DynamicBooksProps = {
    heading1: string;
    heading2: string;
    highlight: string;
    description: string;
    books: {
        id: number;
        title: string;
        imageUrl: string;
        readMoreLink: string;
    }[];
};

export function DynamicBooks({ heading1, heading2, highlight, description, books }: DynamicBooksProps) {
    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-12">
            {/* Dynamic Header */}
            <DynamicHeader heading1={heading1} heading2={heading2} highlight={highlight} description={description} />

            {/* Carousel */}
            <Carousel className="w-full">
                <CarouselContent className="-ml-4">
                    {books.map((book) => (
                        <CarouselItem key={book.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                            <div className="group relative">
                                <Card className="overflow-hidden border-2 border-gray-100 bg-gray-50 transition-all duration-500 hover:bg-[#0D293B]">
                                    <div className="p-4">
                                        <div className="relative mb-4 h-64">
                                            <Image
                                                src={book.imageUrl}
                                                alt={book.title}
                                                className="h-full w-full rounded-lg object-cover"
                                                height={256}
                                                width={256}
                                            />
                                            <button className="absolute right-2 top-2 rounded-full bg-white/80 p-2 transition-colors hover:bg-white">
                                                <FaHeart className="h-5 w-5" />
                                            </button>
                                        </div>
                                        <h3 className="mb-4 text-xl font-semibold group-hover:text-white">
                                            {book.title}
                                        </h3>
                                        <div className="flex items-center justify-between">
                                            <a
                                                href={book.readMoreLink}
                                                className="text-blue-600 group-hover:text-[#F3F630]"
                                            >
                                                {book.readMoreLink}
                                            </a>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* Navigation and Button */}
                <div className="mt-8 flex items-center justify-center gap-4">
                    <CarouselPrevious className="static mt-[40px] rounded-sm bg-gray-800 p-[20px] text-white hover:bg-gray-700 hover:text-white" />
                    <button className="rounded-md bg-[#E7F54E] px-6 py-[10px] font-semibold text-black transition-colors hover:bg-[#d4e23a]">
                        সকল বই
                    </button>
                    <CarouselNext className="static mt-[40px] rounded-sm bg-gray-800 p-[20px] text-white hover:bg-gray-700 hover:text-white" />
                </div>
            </Carousel>
        </div>
    );
}
