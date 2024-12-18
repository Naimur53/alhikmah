import Image from "next/image";
import { TestimonialSlider } from "./TestimonialSlider";
import Link from "next/link";


const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex xl:items-center justify-center xl:h-full ">
      {/* Left Column */}
      <div className="min-w-[92%] md:pl-32 ml-auto max-w-[670px] md:min-w-[665px]    xl:w-auto relative p-2 md:p-6 md:pb-0 lg:pr-5 mx-auto">
        <div className="p-4 md:pt- w-full ml-auto  relative z-40">{children}</div>
        
        <div className="size-[170px] absolute roundded-full bg-blue-700 top-0 left-0 blur-[160px]"></div>
        <div className="size-[190px] absolute roundded-full -z-50 bg-blue-700 bottom-5 left-[30%] blur-[170px]"></div>

        <Image className="absolute blur-[1px] top-[10%] right-[40%]" src="/images/bgStar.png" height={20} width={20} alt="star"></Image>
        <Image className="absolute -rotate-[25deg] top-[42%] left-[4%]" src="/images/bgStar.png" height={30} width={30} alt="star"></Image>
        <Image className="absolute rotate-12 bottom-2 right-[15%]" src="/images/bgStar.png" height={30} width={25} alt="star"></Image>
      </div>

      {/* Right Column */}
      <div  className="center hidden  none xl:block w-full overflow-hidden min-w-[600px] max-w-[700px]  signup-right-bg col-span-5 relative h-full bg-primary-900   text-white">
        

        {/* Content */}
        <div className="lg:px-20 px-3 sm:px-6 w-full flex h-full py-5 flex-col justify-between">
          {/* Heading */}
          <Link href="/" className="md:my-8 my-5  top-4 flex items-center gap-4 mx-">
            <div className="h-12 w-12 bg-[#FFFFFF] rounded-md"></div>
            <h2 className="text-[18px] md:text-[20px] text-white lg:text-[24px]">আল হিকমাহ </h2>
          </Link>
          {/* center content */}
          <div className=" text-center my-[19%] mt-[22%] h-full  md:text-start ">
            <h1 className="lg:text-[28px] md:text-[24px] leading-[40px] pb-[12px]  text-[18px] font-semibold  md:leading-[42px]  text-white ">
              ওয়েবসাইটটি{" "}
              <span className="text-yellow-500">ব্যবহারকারীদের</span> পাঠ
              অভিজ্ঞতা প্রদান করবে
            </h1>
            <p className="text-[14px] noto-font   text-[#98B6CB] text-primary-200 font-normal">
              ওয়েবসাইটটি ব্যবহারকারীদের একটি সমৃদ্ধ পাঠ অভিজ্ঞতা প্রদান করবে
              যেখানে তারা বিভিন্ন বিষয়বস্তুর উপর ভিত্তি করে বই পড়তে।
            </p>
          </div>

          {/* Testimonial Slider */}
          <TestimonialSlider />
          

          {/* Indicator Dots */}
          {/* <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
            <div className="w-6 md:w-8 h-1 rounded-full bg-yellow-400" />
            <div className="w-6 md:w-8 h-1 rounded-full bg-white/20" />
            <div className="w-6 md:w-8 h-1 rounded-full bg-white/20" />
            <div className="w-6 md:w-8 h-1 rounded-full bg-white/20" />
            <div className="w-6 md:w-8 h-1 rounded-full bg-white/20" />
          </div> */}
        </div>
      </div>
      
    </div>
  );
};

export default AuthWrapper;
