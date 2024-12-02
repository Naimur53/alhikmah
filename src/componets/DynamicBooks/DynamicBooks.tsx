import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { DynamicHeader } from "@/shared/DynamicHeader";
import { FaHeart } from "react-icons/fa6";

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

export function DynamicBooks({
  heading1,
  heading2,
  highlight,
  description,
  books,
}: DynamicBooksProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Dynamic Header */}
      <DynamicHeader
        heading1={heading1}
        heading2={heading2}
        highlight={highlight}
        description={description}
      />

      {/* Carousel */}
      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          {books.map((book) => (
            <CarouselItem
              key={book.id}
              className="pl-4 md:basis-1/2 lg:basis-1/4"
            >
              <div className="relative group">
                <Card className="border-2 border-gray-100 overflow-hidden bg-gray-50 transition-all duration-500 hover:bg-[#0D293B]">
                  <div className="p-4">
                    <div className="relative h-64 mb-4">
                      <img
                        src={book.imageUrl}
                        alt={book.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                        <FaHeart className="w-5 h-5" />
                      </button>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-white">
                      {book.title}
                    </h3>
                    <div className="flex justify-between items-center">
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
        <div className="flex items-center justify-center gap-4 mt-8">
          <CarouselPrevious className="static mt-[40px] bg-gray-800 rounded-sm hover:bg-gray-700 p-[20px] hover:text-white text-white" />
          <button className="px-6 py-[10px] bg-[#E7F54E] text-black font-semibold rounded-md hover:bg-[#d4e23a] transition-colors">
            সকল বই
          </button>
          <CarouselNext className="static mt-[40px] bg-gray-800 hover:bg-gray-700 p-[20px] rounded-sm hover:text-white text-white" />
        </div>
      </Carousel>
    </div>
  );
}
