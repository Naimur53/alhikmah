import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BlogPost } from "@/data/BlogPost";
import { BlogCard } from "./BlogCard";
import { DynamicHeader } from "@/shared/DynamicHeader";

export function BlogCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <DynamicHeader 
        heading1="আমাদের"
        heading2=" সমূহ"
        highlight="ব্লগ"
        description="ওয়েবসাইটটি ব্যবহারকারীদের একটি সমৃদ্ধ পাঠ অভিজ্ঞতা প্রদান করবে যেখানে তারা বিভিন্ন বিষয়বস্তুর উপর ভিত্তি করে বই পড়তে।"
      />
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {BlogPost.map((post) => (
            <CarouselItem
              key={post.id}
              className="pl-2 md:pl-4 md:basis-1/2"
            >
              <BlogCard post={post} />
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
  );
}