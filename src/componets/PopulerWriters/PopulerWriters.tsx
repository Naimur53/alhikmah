import React from "react";
import { Writers } from "@/data/Writers";
import { Card, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { DynamicHeader } from "@/shared/DynamicHeader";

export function PopulerWriters() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Header Section */}
      <DynamicHeader
        heading1={"জনপ্রিয় "}
        highlight={"লেখক"}
        heading2={"সমূহ"}
        description={
          "ওয়েবসাইটটি ব্যবহারকারীদের একটি সমৃদ্ধ পাঠ অভিজ্ঞতা প্রদান করবে যেখানে তারা বিভিন্ন বিষয়বস্তুর উপর ভিত্তি করে বই পড়তে।"
        }
      />

      {/* Carousel for Writers */}
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {Writers?.length > 0 ? (
            Writers.map((writer) => (
              <CarouselItem
                key={writer.id}
                className="pl-2 md:pl-4 md:basis-1/4 lg:basis-1/5"
              >
                <div className="group h-full  rounded-[10px] p-[20px]">
                  <Card className="h-full flex flex-col border-none shadow-none bg-inherit">
                    {/* Image Row */}
                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                      <img
                        src={writer.imageUrl}
                        alt={writer.name}
                        className="w-full h-[200px] md:h-[250px] object-cover transition-transform duration-300 "
                      />
                    </div>
                    {/* Name Row */}

                    <CardTitle className="line-clamp-2 cursor-pointer text-[18px] pt-[20px] font-semibold text-[#3B4856]">
                      {writer.name}
                    </CardTitle>
                  </Card>
                </div>
              </CarouselItem>
            ))
          ) : (
            <p className="text-center text-gray-500">কোন লেখক পাওয়া যায়নি।</p>
          )}
        </CarouselContent>

        {/* Navigation and Button */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <CarouselPrevious className="static mt-[40px] bg-gray-800 rounded-sm hover:bg-gray-700 p-[20px] hover:text-white text-white" />
          <button className="px-6 py-[10px] bg-[#E7F54E] text-black font-semibold rounded-md hover:bg-[#d4e23a] transition-colors">
            সকল লেখক
          </button>
          <CarouselNext className="static mt-[40px] bg-gray-800 hover:bg-gray-700 p-[20px] rounded-sm hover:text-white text-white" />
        </div>
      </Carousel>
    </div>
  );
}
