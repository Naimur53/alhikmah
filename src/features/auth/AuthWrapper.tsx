import { TestimonialSlider } from "./TestimonialSlider";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid place-items-center xl:h-screen w-full grid-cols-1 xl:grid-cols-2 gap-[1%]">
      {/* Left Column */}
      <div className="p-4 md:p-6">{children}</div>

      {/* Right Column */}
      <div className="center relative md:max-w-[820px] m-4 md:m-6 h-auto md:h-[95%] rounded-lg bg-primary-900 text-2xl font-bold text-white">
        {/* Heading */}
        <div className="absolute top-4 left-4 md:top-8 md:left-12">
          <h2 className="text-[24px] md:text-[28px] lg:text-[32px]">আল হিকমাহ</h2>
        </div>

        {/* Content */}
        <div className="px-6 md:px-[50px] flex flex-col justify-start">
          <div className="text-center md:text-start pb-[30px] sm:pb-[50px] md:pb-[70px] lg:pb-[100px]">
            <h1 className="lg:text-[56px] md:text-[40px] leading-[42px] pb-[16px] text-[32px] font-semibold sm:leading-[52px] md:leading-[62px] pt-[80px] md:pt-[80px] text-white ">
              ওয়েবসাইটটি{" "}
              <span className="text-yellow-500">ব্যবহারকারীদের</span> পাঠ
              অভিজ্ঞতা প্রদান করবে
            </h1>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-primary-200 font-normal mt-4">
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
