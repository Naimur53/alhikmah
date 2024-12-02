import React from "react";

function Bukhari() {
  return (
    <div
      className="container h-[355px] flex items-center justify-center bg-cover bg-center bg-no-repeat my-[50px] md:my-[140px]"
      style={{
        backgroundImage: `url('/images/bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Content */}
      <div className="text-center px-4 lg:max-w-[1050px] text-black">
        <p className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] leading-[30px] sm:leading-[36px] md:leading-[42px] text-[#3B4856] font-medium">
          কসম খোদার! তোমার মাধ্যমে একজন মানুষের হেদায়েত হওয়াটা তোমার জন্য অনেকগুলি 
          ‘লাল উটের’ মালিক হওয়ার চেও অধিক সৌভাগ্যের বিষয়।
        </p>
        <h3 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] leading-[30px] sm:leading-[36px] md:leading-[42px] text-[#3B4856] font-bold mt-4">
          বুখারী, ২৯৪২
        </h3>
      </div>
    </div>
  );
}

export default Bukhari;
