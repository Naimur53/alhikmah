import React from "react";
import Image from "next/image";

import { Publishers } from "@/data/Publishers";
import { DynamicHeader } from "@/shared/DynamicHeader";

import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

function PopularPublishers() {
    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-12">
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
                <CarouselContent className="-ml-2 md:-ml-4">
                    {Publishers?.length > 0 ? (
                        Publishers.map((Publisher) => (
                            <CarouselItem key={Publisher.id} className="pl-2 md:basis-1/5 md:pl-4">
                                <div className="group rounded-[10px] bg-[#F7F7F7] p-[20px]">
                                    <Card className="flex h-full flex-col border-none bg-inherit shadow-none">
                                        {/* Image Row */}
                                        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                                            <Image
                                                src={Publisher.imageUrl}
                                                alt={Publisher.name}
                                                className="h-[200px] w-full object-contain transition-transform duration-300 hover:scale-110"
                                                height={200}
                                                width={200}
                                            />
                                        </div>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">কোন প্রকাশক পাওয়া যায়নি।</p>
                    )}
                </CarouselContent>

                {/* Navigation and Button */}
                <div className="mt-8 flex items-center justify-center gap-4">
                    <CarouselPrevious className="static mt-[40px] rounded-sm bg-gray-800 p-[20px] text-white hover:bg-gray-700 hover:text-white" />
                    <button className="rounded-md bg-[#E7F54E] px-6 py-[10px] font-semibold text-black transition-colors hover:bg-[#d4e23a]">
                        সকল প্রকাশক
                    </button>
                    <CarouselNext className="static mt-[40px] rounded-sm bg-gray-800 p-[20px] text-white hover:bg-gray-700 hover:text-white" />
                </div>
            </Carousel>
        </div>
    );
}

export default PopularPublishers;
