import React from "react";

function Bukhari() {
  return (
    <div
      className="container md:h-[355px] bg-[length:100%_160px] h-[200px] flex items-center md:bg-contain justify-center   bg-no-repeat my-[50px] md:my-[140px]"
      style={{
        backgroundImage: `url('/images/bg.jpg')`,
        // backgroundSize: "10px",
        backgroundPosition: "center"
      }}
    >
      {/* Content */}
      <div className="text-center px-4 max-w-[90%]  xl:max-w-[1050px] text-black">
        <p className="text-[14px]  md:text-[20px] leading-[20px] xl:text-[30px] xl:leading-[42px] md:leading-[30px] text-[#3B4856] font-medium">
          কসম খোদার! তোমার মাধ্যমে একজন মানুষের হেদায়েত হওয়াটা তোমার জন্য
          অনেকগুলি ‘লাল উটের’ মালিক হওয়ার চেও অধিক সৌভাগ্যের বিষয়।
        </p>
        <h3 className="text-[12px] sm:text-[20px] md:text-[24px] lg:text-[30px] leading-[20px] sm:leading-[36px] md:leading-[42px] text-[#3B4856] font-bold mt-2 md:mt-4">
          বুখারী, ২৯৪২
        </h3>
      </div>
    </div>
  );
}

export default Bukhari;
