"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MoveLeft, MoveRight } from "lucide-react";

type Book = {
  id: number;
  title: string;
  imageUrl: string;
};

const books: Book[] = [
  {
    id: 1,
    title: "সহিহ বুখারী",
    imageUrl:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1776&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "সুনান ইবনে মাজাহ",
    imageUrl:
      "https://images.unsplash.com/photo-1591728652796-c7cc4719c533?q=80&w=1776&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "মুয়াত্তা ইমাম মালিক",
    imageUrl:
      "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=1770&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "সুনান আবু দাউদ",
    imageUrl:
      "https://images.unsplash.com/photo-1633008808000-ce86bff6c1ed?q=80&w=1776&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "সুনান আবু দাউদ",
    imageUrl:
      "https://images.unsplash.com/photo-1633008808000-ce86bff6c1ed?q=80&w=1776&auto=format&fit=crop",
  },
];

export function HadisBooks() {
  return (
    <div className="bg-[#0D293B] container mx-auto rounded-[20px]">
      <div className="w-full max-w-6xl mx-auto px-4 bg-[#0D293B] py-16">
        <div className="w-full px-4">
          <div className="mb-12 md:max-w-[950px]">
            <h2 className="text-[32px] md:text-[48px]  leading-[42px] sm:leading-[52px] md:leading-[62px] font-semibold text-white pb-[16px]">
              <span className="text-[#6AB6E8]">হাদিসের </span>
              বই সমূহ
            </h2>
            <p className="text-[18px] md:text-[24px] lg:text-[28px] text-[#A5ABB1] pb-[30px] md:pb-[55px]">
              ওয়েবসাইটটি ব্যবহারকারীদের একটি সমৃদ্ধ পাঠ অভিজ্ঞতা প্রদান করবে
              যেখানে তারা বিভিন্ন বিষয়বস্তুর উপর ভিত্তি করে বই পড়তে।
            </p>
          </div>

          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {books.map((book) => (
                <CarouselItem
                  key={book.id}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
                >
                  <Card className="border-none bg-[#153B54] p-4 transition-all duration-300 hover:bg-[#1d4a69]">
                    <div className="aspect-[3/4] mb-4 overflow-hidden rounded-lg">
                      <img
                        src={book.imageUrl}
                        alt={book.title}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white text-center">
                      {book.title}
                    </h3>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="static mt-[40px] bg-gray-800 rounded-sm hover:bg-gray-700 p-[20px] hover:text-white text-white" />
              <button className="px-6 py-[10px] bg-[#E7F54E] text-black font-semibold rounded-md hover:bg-[#d4e23a] transition-colors">
                সকল বই
              </button>
              <CarouselNext className="static mt-[40px] bg-gray-800 hover:bg-gray-700 p-[20px] rounded-sm hover:text-white text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
