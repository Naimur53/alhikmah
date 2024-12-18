import React from "react";
import booksSectionBg from "../../../public/images/booksSectionBg.png";
import { Books } from "@/data/Books";
import { DynamicBooks } from "@/features/home/DynamicBooks";

function NewBooks() {
  return (
    <div
      className="bg-[url('/images/booksSectionBg.png')] bg-top bg-cover bg-no-repeat bg-[rgba(255,255,255,0.19)] lg:pb-[150px]"
    >
      {/* Content Section */}
      <div className="p-10">
        <DynamicBooks
          books={Books}
          heading1={"নূতন "}
          heading2={" বই সমূহ"}
          highlight={"প্রকাশিত"}
          description={
            "ওয়েবসাইটটি ব্যবহারকারীদের একটি সমৃদ্ধ পাঠ অভিজ্ঞতা প্রদান করবে যেখানে তারা বিভিন্ন বিষয়বস্তুর উপর ভিত্তি করে বই পড়তে।"
          }
        />
      </div>
    </div>
  );
}

export default NewBooks;
