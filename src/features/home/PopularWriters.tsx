import React from "react";
import Image from "next/image";

import { Writers } from "@/data/Writers";
import { Publishers } from "@/data/Publishers";

import { Card, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { DynamicHeader } from "@/components/shared/DynamicHeader";
import PrimaryButton from "@/components/shared/PrimaryButton";

const PopularWriters = () => {
    return (
        <div className="w-full bg-[url('/images/writterBg.png')] bg-cover bg-center bg-no-repeat px-4 py-12 pb-[50px] lg:pb-[100px]">
            <div className="container mx-auto lg:pb-[100px] lg:pt-[50px] ">
                {/* Carousel for Writers */}
                <Carousel className="w-full">
                    {/* Dynamic Header */}
                    <div className="flex items-center justify-between">
                        <DynamicHeader
                            heading1={"জনপ্রিয় "}
                            highlight={"লেখক"}
                            heading2={"সমূহ"}
                            description={
                                "ওয়েবসাইটটি ব্যবহারকারীদের একটি সমৃদ্ধ পাঠ অভিজ্ঞতা প্রদান করবে যেখানে তারা বিভিন্ন বিষয়বস্তুর উপর ভিত্তি করে বই পড়তে।"
                            }
                        />
                        <div className="flex gap-[20px]">
                            <CarouselPrevious className="static h-12 w-12 rounded-full border border-[#007CE3] bg-white hover:bg-[#007CE3] hover:text-white" />
                            <CarouselNext className="static h-12 w-12 rounded-full border border-[#007CE3] bg-white hover:bg-[#007CE3] hover:text-white" />
                        </div>
                    </div>
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {Writers?.length > 0 ? (
                            Writers.map((writer) => (
                                <CarouselItem key={writer.id} className="pl-2 md:basis-1/4 md:pl-4 lg:basis-1/5">
                                    <div className="group h-full rounded-[10px] p-[20px]">
                                        <Card className="flex h-full flex-col border-none bg-inherit shadow-none">
                                            {/* Image Row */}
                                            <div className="relative h-48 w-full overflow-hidden rounded-[8px]">
                                                <Image
                                                    src={writer.imageUrl}
                                                    alt={writer.name}
                                                    className="h-[200px] w-full object-cover transition-transform duration-300 md:h-[250px]"
                                                    height={148}
                                                    width={148}
                                                />
                                            </div>
                                            {/* Name Row */}

                                            <CardTitle className="line-clamp-2 cursor-pointer pt-[20px] text-[20px] font-semibold text-[#3A76B6]">
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
                        <PrimaryButton text="সকল লেখক" />
                    </div>
                </Carousel>
            </div>

            <div className="container mx-auto lg:pb-[100px] pb-[60px]">
                {/* Carousel for Writers */}
                <Carousel className="w-full">
                    {/* Dynamic Header */}
                    <div className="flex items-center justify-between">
                        <DynamicHeader
                            heading1={"জনপ্রিয় "}
                            highlight={"প্রকাশক"}
                            heading2={" সমূহ"}
                            description={
                                "ওয়েবসাইটটি ব্যবহারকারীদের একটি সমৃদ্ধ পাঠ অভিজ্ঞতা প্রদান করবে যেখানে তারা বিভিন্ন বিষয়বস্তুর উপর ভিত্তি করে বই পড়তে।"
                            }
                        />
                        <div className="flex gap-[20px]">
                            <CarouselPrevious className="static h-12 w-12 rounded-full border border-[#007CE3] bg-white hover:bg-[#007CE3] hover:text-white" />
                            <CarouselNext className="static h-12 w-12 rounded-full border border-[#007CE3] bg-white hover:bg-[#007CE3] hover:text-white" />
                        </div>
                    </div>
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {Publishers?.length > 0 ? (
                            Publishers.map((Publisher) => (
                                <CarouselItem key={Publisher.id} className="pl-2 md:basis-1/5 md:pl-4">
                                    <div className="group rounded-[8px] bg-[#F7F7F7] p-[20px]">
                                        <Card className="flex h-full flex-col border-none bg-inherit shadow-none">
                                            {/* Image Row */}
                                            <div className="relative  flex items-center justify-center overflow-hidden ">
                                                <Image
                                                    src={Publisher.imageUrl}
                                                    alt={Publisher.name}
                                                    className="h-[150px] w-[150px] object-contain"
                                                    height={150}
                                                    width={150}
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
                        <PrimaryButton text="সকল প্রকাশক" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default PopularWriters;
