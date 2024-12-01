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
        <CarouselContent className="-ml-2 md:-ml-4">
          {books?.length > 0 ? (
            books.map((book) => (
              <CarouselItem key={book.id} className="pl-2 md:pl-4 md:basis-1/4">
                <div className="group h-full bg-[#F7F7F7] hover:bg-[#0D293B] transition duration-500 rounded-[10px] p-[20px]">
                  <Card className="h-full flex flex-col border-none shadow-none bg-inherit">
                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                      <img
                        src={book.imageUrl}
                        alt={book.title}
                        className="lg:w-[220px] w-full h-[500px] md:h-[335px] object-contain transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-2 cursor-pointer text-[24px] font-semibold transition-colors group-hover:text-white">
                        {book.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex justify-between text-sm transition-colors group-hover:text-white">
                        <Link
                          href={book.readMoreLink}
                          className="transition-colors group-hover:text-[#F3F630] text-[#1F618D] text-[20px]"
                        >
                          এখনি পড়ুন
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))
          ) : (
            <p className="text-center text-gray-500">কোন বই পাওয়া যায়নি।</p>
          )}
        </CarouselContent>

        {/* Navigation and Button */}
        <div className="flex items-center justify-center space-x-4 mt-6">
          <CarouselPrevious className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors" />
          <button
            type="button"
            className="self-start px-6 py-3 bg-[#E7F54E] text-black font-semibold rounded hover:bg-[#d4e23a] transition-colors"
          >
            সকল বই
          </button>
          <CarouselNext className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors" />
        </div>
      </Carousel>
    </div>
  );
}
