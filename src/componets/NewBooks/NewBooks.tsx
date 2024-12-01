import React from "react";
import { Books } from "@/data/Books";
import { DynamicBooks } from "../DynamicBooks/DynamicBooks";

function NewBooks() {
    console.log(Books)
  return (
    <div>
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
  );
}

export default NewBooks;
