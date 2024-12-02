import { Publishers } from "@/data/Publishers";
import React from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { DynamicHeader } from "@/shared/DynamicHeader";

function PopularPublishers() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Header Section */}
      <DynamicHeader
        heading1={"জনপ্রিয় "}
        highlight={"প্রকাশক"}
        heading2={" সমূহ"}
        description={
          "ওয়েবসাইটটি ব্যবহারকারীদের একটি সমৃদ্ধ পাঠ অভিজ্ঞতা প্রদান করবে যেখানে তারা বিভিন্ন বিষয়বস্তুর উপর ভিত্তি করে বই পড়তে।"
        }
      />

      {/* Carousel for Writers */}
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4 ">
          {Publishers?.length > 0 ? (
            Publishers.map((Publisher) => (
              <CarouselItem
                key={Publisher.id}
                className="pl-2 md:pl-4 md:basis-1/5"
              >
                <div className="group  bg-[#F7F7F7]  rounded-[10px] p-[20px]">
                  <Card className="h-full flex flex-col border-none shadow-none bg-inherit">
                    {/* Image Row */}
                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                      <img
                        src={Publisher.imageUrl}
                        alt={Publisher.name}
                        className="w-full h-[200px]  object-contain transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))
          ) : (
            <p className="text-center text-gray-500">
              কোন প্রকাশক পাওয়া যায়নি।
            </p>
          )}
        </CarouselContent>

        {/* Navigation and Button */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <CarouselPrevious className="static mt-[40px] bg-gray-800 rounded-sm hover:bg-gray-700 p-[20px] hover:text-white text-white" />
          <button className="px-6 py-[10px] bg-[#E7F54E] text-black font-semibold rounded-md hover:bg-[#d4e23a] transition-colors">
            সকল প্রকাশক
          </button>
          <CarouselNext className="static mt-[40px] bg-gray-800 hover:bg-gray-700 p-[20px] rounded-sm hover:text-white text-white" />
        </div>
      </Carousel>
    </div>
  );
}

export default PopularPublishers;
