"use client";

import React, { useState } from "react";

const Donation: React.FC = () => {
    const [ammount, setAmmount] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Submitted ammount:", ammount);
    };

    return (
        <div className="mx-[10px] my-[50px] flex min-h-[300px] items-center rounded-[12px] bg-[#0D293B] p-4 md:mx-0 md:my-[140px] md:min-h-[250px]">
            <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center justify-between lg:flex-row">
                <div className="mb-6 text-center lg:mb-0 lg:text-left">
                    <h1 className="text-[32px] font-semibold leading-[42px] text-white sm:leading-[50px] md:text-[48px] md:leading-[62px] lg:text-[48px]">
                        ডোনেশন করে <br />
                        <span className="text-[#E7F54E]">সহযোগিতা</span> করুন
                    </h1>
                </div>
                <form onSubmit={handleSubmit} className="mt-6 flex w-full flex-col space-y-4 lg:mt-0 lg:w-[400px]">
                    <input
                        type="number"
                        value={ammount}
                        onChange={(e) => setAmmount(e.target.value)}
                        placeholder="এমাউন্ট লিখুন"
                        className="w-full rounded bg-[#11354E] px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E7F54E]"
                    />
                    <button
                        type="submit"
                        className="self-center rounded bg-[#E7F54E] px-6 py-3 font-semibold text-black transition-colors hover:bg-[#d4e23a] md:self-start"
                    >
                        ডোনেট করুন
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Donation;
