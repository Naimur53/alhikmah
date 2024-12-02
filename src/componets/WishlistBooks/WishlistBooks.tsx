import React from "react";
import { Books } from "@/data/Books";
import { DynamicBooks } from "../DynamicBooks/DynamicBooks";

function WishlistBooks() {
  return (
    <div>
      <DynamicBooks
        books={Books}
        heading1={"উইশলিস্ট "}
        heading2={"সমূহ"}
        highlight={"বই"}
        description={
          "ওয়েবসাইটটি ব্যবহারকারীদের একটি সমৃদ্ধ পাঠ অভিজ্ঞতা প্রদান করবে যেখানে তারা বিভিন্ন বিষয়বস্তুর উপর ভিত্তি করে বই পড়তে।"
        }
      />
    </div>
  );
}

export default WishlistBooks;
