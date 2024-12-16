import React from "react";
import Image from "next/image";

import { FaHeart } from "react-icons/fa";

type SingleBookProps = {
    book: {
        imageUrl: string;
        title: string;
        readMoreLink: string;
    };
};

const SingleBook: React.FC<SingleBookProps> = ({ book }) => {
    return (
        <div className="group relative">
            <div className="overflow-hidden rounded-[8px] mx-[20px] md:mx-0 border-2 border-gray-100 bg-gray-50 transition-all duration-500 hover:bg-primary-900">
                <div className="p-4">
                    {/* Image Container */}
                    <div className="relative mb-4  h-[300px] md:h-[350px] lg:h-[400px]">
                        <Image
                            src={book.imageUrl}
                            alt={book.title}
                            className="h-full w-full rounded-lg object-cover"
                            height={400}
                            width={400}
                        />
                        <button className="absolute right-2 top-2 rounded-full bg-white/80 p-2 transition-colors hover:bg-white">
                            <FaHeart className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Title */}
                    <h3 className="mb-4 text-lg font-semibold text-gray-900 transition-all duration-500 group-hover:text-white sm:text-xl lg:text-2xl">
                        {book.title}
                    </h3>

                    {/* Read More Link */}
                    <div className="flex items-center justify-between">
                        <a
                            href={book.readMoreLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 transition-all duration-500 group-hover:text-yellow-500 md:text-base"
                        >
                            {book.readMoreLink}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;
