import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Calendar, User } from "lucide-react";
import { BlogPost } from "@/data/BlogPost";
import { DynamicHeader } from "@/shared/DynamicHeader";

export function BlogCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <DynamicHeader heading1={"আমাদের"} heading2={" সমূহ"} highlight={"ব্লগ"} description={"ওয়েবসাইটটি ব্যবহারকারীদের একটি সমৃদ্ধ পাঠ অভিজ্ঞতা প্রদান করবে যেখানে তারা বিভিন্ন বিষয়বস্তুর উপর ভিত্তি করে বই পড়তে।"} />
      <Carousel className="w-full">
        {/* Carousel Content */}
        <CarouselContent className="-ml-2 md:-ml-4">
          {BlogPost.map((post) => (
            <CarouselItem
              key={post.id}
              className="pl-2 md:pl-4 md:basis-1/2" // Basis controls how many cards to show
            >
              <div className="h-full bg-[#F7F7F7] rounded-[10px] p-[30px]">
                <Card className="h-full flex flex-col border-none shadow-none bg-inherit">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2 hover:text-primary cursor-pointer">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 mt-2">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {post.date}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation and Button */}
        <div className="flex items-center justify-center space-x-4 mt-6">
          <CarouselPrevious className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors" />
          <button
            type="submit"
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
