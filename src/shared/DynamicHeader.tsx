import React from "react";

export function DynamicHeader({
    heading1,
    heading2,
    highlight,
    description,
}: {
    heading1: string;
    heading2: string;
    highlight: string;
    description: string;
}) {
    return (
        <div className="pb-8 text-center">
            <h2 className="pb-[16px] text-[32px] font-semibold leading-[42px] text-[#3B4856] sm:leading-[52px] md:text-[48px] md:leading-[62px]">
                {heading1} <span className="text-[#6AB6E8]">{highlight} </span>
                {heading2}{" "}
            </h2>
            <p className="mx-auto max-w-[950px] pb-[30px] text-[18px] text-[#838383] md:pb-[55px] md:text-[24px] lg:text-[28px]">
                {description}
            </p>
        </div>
    );
}
