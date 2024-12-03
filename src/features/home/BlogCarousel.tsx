import { BlogPost } from "@/data/BlogPost";
import { BlogCard } from "@/features/home/BlogCard";
import { DynamicHeader } from "@/components/shared/DynamicHeader";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const BlogCarousel = () => {
    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-12">
            <DynamicHeader
                heading1="আমাদের"
                heading2=" সমূহ"
                highlight="ব্লগ"
                description="ওয়েবসাইটটি ব্যবহারকারীদের একটি সমৃদ্ধ পাঠ অভিজ্ঞতা প্রদান করবে যেখানে তারা বিভিন্ন বিষয়বস্তুর উপর ভিত্তি করে বই পড়তে।"
            />
            <Carousel className="w-full">
                <CarouselContent className="-ml-2 md:-ml-4">
                    {BlogPost.map((post) => (
                        <CarouselItem key={post.id} className="pl-2 md:basis-1/2 md:pl-4">
                            <BlogCard post={post} />
                        </CarouselItem>
                    ))}
                </CarouselContent>

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
};

export default BlogCarousel;
