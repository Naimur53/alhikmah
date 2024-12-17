import React from "react";

import { SlidersHorizontal } from "lucide-react"; // For the filter icon
import { FiSearch } from "react-icons/fi"; // For the search icon

const BannerSearchBar: React.FC = () => {
    return (
        <div className="flex items-center justify-center py-4">
            <div className="flex w-full max-w-3xl items-center rounded-[8px] bg-white px-[20px] py-[10px] shadow-md">
                {/* Input Field */}
                <input
                    type="text"
                    placeholder="আপনার প্রয়োজনীয় | কোন বইটি খুঁজছেন?"
                    className="flex-grow rounded-[8px] px-4 py-[8px] text-[#3B4856] placeholder-[#838383] focus:outline-none"
                />
                <div className="flex gap-[30px]">
                    {/* Filter Icon */}
                    <button className="flex items-center justify-center rounded-[8px] bg-[#F4F4F4] p-[15px]">
                        <SlidersHorizontal size={20} className="text-[#838383] hover:text-[#007CE3]" />
                    </button>
                    {/* Search Button */}
                    <button className="flex items-center justify-center gap-2 rounded-[8px] bg-[#007CE3] px-5 py-3 font-semibold text-white transition hover:bg-[#005FB8]">
                        <FiSearch size={20} />
                        <span>সার্চ করুন</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BannerSearchBar;
