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
            <h1 className="h1">
                {heading1} <span className="text-[#6AB6E8]">{highlight} </span>
                {heading2}{" "}
            </h1>
            <p className="mx-auto max-w-[950px] pb-[30px] text-[18px] text-[#838383] md:pb-[55px] md:text-[24px] lg:text-[28px]">
                {description}
            </p>
        </div>
    );
}
