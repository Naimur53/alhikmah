import React from "react";

export function DynamicHeader({
  heading1,
  heading2,
  highlight,
  description
}: {
  heading1: string;
  heading2: string;
  highlight: string;
  description: string;
}) {
  return (
    <div className="text-center pb-8">
      <h2 className="text-[32px] md:text-[48px]  leading-[42px] sm:leading-[52px] md:leading-[62px] font-semibold text-[#3B4856] pb-[16px]">
        {heading1} <span className="text-[#6AB6E8]">{highlight} </span>
        {heading2}{" "}
      </h2>
      <p className="text-[18px] md:text-[24px] lg:text-[28px] text-[#838383] max-w-[950px] mx-auto pb-[30px] md:pb-[55px]">
        {description}
      </p>
    </div>
  );
}
