import React from "react";

export function DynamicHeader({ heading1, heading2, highlight, description }) {
  return (
    <div className="text-center pb-8">
      <h2 className="text-[48px] leading-[62px] font-semibold text-[#3B4856] pb-[16px]">
        {heading1}{" "}
        <span className="text-[#6AB6E8]">
          {highlight}
        </span>
        {heading2}
      </h2>
      <p className="text-[24px] text-[#838383] max-w-[750px] mx-auto pb-[55px]">
        {description}
      </p>
    </div>
  );
}
