"use client";
import React, { useState } from "react";

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitted email:", email);
  };

  return (
    <div className="md:min-h-[250px] min-h-[300px] my-[50px] md:my-[140px] bg-[#0D293B] rounded-[12px] flex items-center mx-[10px] md:mx-0 p-4">
      <div className="w-full max-w-[1000px] mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <h1 className="text-white text-[32px] md:text-[48px] lg:text-[48px] leading-[42px] sm:leading-[50px] md:leading-[62px] font-semibold">
            নিউজলেটার <br />
            <span className="text-[#E7F54E]">সাবস্ক্রাইব</span> করুন
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 mt-6 lg:mt-0 lg:w-[400px] w-full"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ইমেইল ঠিকানা লিখুন"
            className="w-full px-4 py-3 rounded bg-[#11354E] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E7F54E]"
          />
          <button
            type="submit"
            className="md:self-start self-center px-6 py-3 bg-[#E7F54E] text-black font-semibold rounded hover:bg-[#d4e23a] transition-colors"
          >
            সাবস্ক্রাইব করুন
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;
