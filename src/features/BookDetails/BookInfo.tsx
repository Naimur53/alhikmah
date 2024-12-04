import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa6";

function BookInfo() {
    return (
        <>
            <div className="mx-auto container pt-[50px] md:pt-[100px]">
                <div className="rounded-lg bg-white p-6 shadow-lg">
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Left Column - Book Cover */}
                        <div className="flex flex-col items-center">
                            <Image height={350} width={250} src="/images/hadis1.jpg" alt="Book Cover" className="w-full max-w-md rounded-lg shadow-md" />
                            <button className="mt-6 w-full max-w-md rounded-md bg-primary-500 px-6 py-3 text-white transition-colors hover:bg-primary-400">
                                ডাউনলোড করুন
                            </button>
                        </div>

                        {/* Right Column - Book Details */}
                        <div className="space-y-4">
                            <h2 className="">আর-রাহিকুল মাখতুম</h2>

                            <div className="space-y-2">
                                <div className="flex gap-2">
                                    <span className="text-gray-600">লেখক:</span>
                                    <span>সাফিউর রহমান মুবারকপুরী (রহ.)</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-gray-600">প্রকাশনী:</span>
                                    <span>সমকালীন প্রকাশন</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-gray-600">বিষয়:</span>
                                    <span>সীরাতে রাসূল (সা.)</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-gray-600">মোট পৃষ্ঠায়:</span>
                                    <span>৬৯৮</span>
                                </div>
                            </div>

                            <p className="mt-4 text-justify text-gray-700">
                                মুহাম্মদ সাল্লাল্লাহু আলাইহি ওয়া সাল্লামের জীবনী নিয়ে লিখিত একটি মহান গ্রন্থ।
                                মানবজাতির সর্বশ্রেষ্ঠ আদর্শ মুহাম্মদ সাল্লাল্লাহু আলাইহি ওয়া সাল্লামের জীবনের প্রতিটি
                                অধ্যায়কে লেখক অত্যন্ত সাবলীল ভাষায়, ব্যাপক তথ্য উপাত্ত সহ তুলে ধরেছেন। এটি একটি
                                এনসাইক্লোপিডিয়া—যাই নিজেকে প্রস্তুত করে নিতে সহায়তা করবে।
                            </p>

                            <div className="mt-6">
                                <h3 className="mb-2 text-xl font-semibold">শেয়ার করুন</h3>
                                <div className="flex gap-4">
                                    <a href="#" className="text-[#1a4977] hover:text-[#153a5f]">
                                        <FaFacebookF size={20} />
                                    </a>
                                    <a href="#" className="text-[#1a4977] hover:text-[#153a5f]">
                                        <FaInstagram size={20} />
                                    </a>
                                    <a href="#" className="text-[#1a4977] hover:text-[#153a5f]">
                                        <FaTwitter size={20} />
                                    </a>
                                    <a href="#" className="text-[#1a4977] hover:text-[#153a5f]">
                                        <FaPinterestP size={20} />
                                    </a>
                                    <button className="text-[#1a4977] hover:text-[#153a5f]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookInfo;
