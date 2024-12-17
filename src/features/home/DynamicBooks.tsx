import * as React from "react";
import Image from "next/image";

import { FaHeart } from "react-icons/fa6";

import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { DynamicHeader } from "@/components/shared/DynamicHeader";
import { Star } from "lucide-react";
import PrimaryButton from "@/components/shared/PrimaryButton";

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
        rating: number;
    }[];
};

export function DynamicBooks({ heading1, heading2, highlight, description, books }: DynamicBooksProps) {
    return (
        <div className="mx-auto w-full container px-4 py-12">


            {/* Carousel */}
            <Carousel className="w-full">
                {/* Dynamic Header */}
                <div className="flex justify-between items-center">
                    <DynamicHeader heading1={heading1} heading2={heading2} highlight={highlight} description={description} />
                    <div className=" flex gap-[20px]">
                        <CarouselPrevious className="static h-12 w-12 rounded-full border border-[#007CE3] bg-white hover:text-white hover:bg-[#007CE3]" />
                        <CarouselNext className="static h-12 w-12 rounded-full border border-[#007CE3] bg-white hover:text-white hover:bg-[#007CE3]" />
                </div>
                    
                </div>
                    <CarouselContent className="-ml-4">
                        {books.map((book) => (
                            <CarouselItem key={book.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                            <Card className="overflow-hidden rounded-[8px] border-none bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                                <div className="relative aspect-[3/4] w-full group">
                                    {/* Image */}
                                    <Image
                                        src={book.imageUrl}
                                        alt={book.title}
                                        fill
                                        className="object-cover "
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-[#164564E3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center text-white">
                                        <h3 className="mb-2 text-[20px] md:text-[24px] lg:text-[28px] font-bold">{book.title}</h3>
                                        <a
                                            href={book.readMoreLink}
                                            className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold text-[#F3F630] hover:text-yellow-500 transition-colors duration-200"
                                        >
                                            {book.readMoreLink}
                                        </a>
                                         {/* Book Rating */}
                                    {book.rating && (
                                        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full px-3 py-1">
                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            <span className="text-sm font-medium ">{book.rating}</span>
                                        </div>
                                    )}
                                    </div>
                        
                                   
                                </div>
                            </Card>
                        </CarouselItem>
                        
                        ))}
                    </CarouselContent>
                    
                    <div className="mt-8 flex items-center justify-center pt-[40px]">
                        <PrimaryButton text="সকল বই"/>
                    </div>
                </Carousel>
        </div>
    );
}
