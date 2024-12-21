import React from "react";

import { allbooks } from "@/data/allbooks";

import SingleBook from "./SingleBook";
import SearchInput from "@/components/shared/SearchInput";

console.log(allbooks);

function ShowAllBooks() {
    return (
        <div className="flex px-4 lg:px-0 container gap-3 mx-auto">
            <div className="w-[35%] lg:w-[26%]  p-3">
                <div className=" my-[50px] space-y-1 mx-auto w-auto">
                    <h1 className="text-[26px] text-[#3B4856] md:text-[38px] pb-1">বই সমূহ</h1>
                    <p className="text-[14px] text-[#1F618D]">{"৮০"} টির মধ্যে ০১-১২ টি ফলাফল দেখানো হচ্ছে</p>
                </div>
            </div>
            <div className="">
                <SearchInput></SearchInput>

                <div className="w-full mx-auto pt-[50px] grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    {allbooks.map((ele) => (
                        <SingleBook key={ele.id} book={ele} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ShowAllBooks;
