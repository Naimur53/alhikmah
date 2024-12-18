import Image from "next/image";
import { TestimonialSlider } from "./TestimonialSlider";


const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex   xl:h-screen ">
      {/* Left Column */}
      <div className="w-full relative pr-5">
        <div className="p-4 md:pt-10 md:pl-20 w-full ml-auto  relative z-40">{children}</div>

        <div className="size-[170px] absolute roundded-full bg-blue-700 top-0 left-0 blur-[160px]"></div>
        <div className="size-[190px] absolute roundded-full bg-blue-700 bottom-14 left-[30%] blur-[170px]"></div>

        <Image className="absolute size-4 top-[10%] right-[40%]" src="/images/bgStar.png" height={30} width={30} alt="star"></Image>
        <Image className="absolute size-7 top-[42%] left-[4%]" src="/images/bgStar.png" height={30} width={30} alt="star"></Image>
        <Image className="absolute size-5 bottom-24 right-[35%]" src="/images/bgStar.png" height={30} width={30} alt="star"></Image>
      </div>

      {/* Right Column */}
      <div  className="center w-full overflow-hidden max-w-[700px]  signup-right-bg col-span-5 relative  h-auto bg-primary-900 text-2xl font-bold text-white">
        

        {/* Content */}
        <div className="lg:px-14 px-3 sm:px-6 w-full flex h-full py-5 flex-col justify-between">
          {/* Heading */}
          <div className="md:my-8 my-5  top-4 flex items-center gap-4 mx-6">
            <div className="h-14 w-14 bg-[#FFFFFF] rounded-md"></div>
            <h2 className="text-[20px] md:text-[24px] text-white lg:text-[28px]">আল হিকমাহ </h2>
          </div>
          {/* center content */}
          <div className=" text-center  md:text-start ">
            <h1 className="lg:text-[36px] md:text-[30px] leading-[42px] pb-[12px] text-[22px] font-semibold  md:leading-[62px]  text-white ">
              ওয়েবসাইটটি{" "}
              <span className="text-yellow-500">ব্যবহারকারীদের</span> পাঠ
              অভিজ্ঞতা প্রদান করবে
            </h1>
            <p className="text-[12px] sm:text-[14px] md:text-[16px] text-[#98B6CB] text-primary-200 font-normal">
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
