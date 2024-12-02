import React from "react";
import Image from "next/image";

import { Writers } from "@/data/Writers";
import { DynamicHeader } from "@/shared/DynamicHeader";

import { Card, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const PopularWriters = () => {
    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-12">
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
                            <CarouselItem key={writer.id} className="pl-2 md:basis-1/4 md:pl-4 lg:basis-1/5">
                                <div className="group h-full rounded-[10px] p-[20px]">
                                    <Card className="flex h-full flex-col border-none bg-inherit shadow-none">
                                        {/* Image Row */}
                                        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                                            <Image
                                                src={writer.imageUrl}
                                                alt={writer.name}
                                                className="h-[200px] w-full object-cover transition-transform duration-300 md:h-[250px]"
                                                height={148}
                                                width={148}
                                            />
                                        </div>
                                        {/* Name Row */}

                                        <CardTitle className="line-clamp-2 cursor-pointer pt-[20px] text-[18px] font-semibold text-[#3B4856]">
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
                <div className="mt-8 flex items-center justify-center gap-4">
                    <CarouselPrevious className="static mt-[40px] rounded-sm bg-gray-800 p-[20px] text-white hover:bg-gray-700 hover:text-white" />
                    <button className="rounded-md bg-[#E7F54E] px-6 py-[10px] font-semibold text-black transition-colors hover:bg-[#d4e23a]">
                        সকল লেখক
                    </button>
                    <CarouselNext className="static mt-[40px] rounded-sm bg-gray-800 p-[20px] text-white hover:bg-gray-700 hover:text-white" />
                </div>
            </Carousel>
        </div>
    );
};

export default PopularWriters;
