import React from "react";

import { allbooks } from "@/data/allbooks";

import SingleBook from "./SingleBook";

console.log(allbooks);

function ShowAllBooks() {
    return (
        <>
            <div className="container mx-auto pt-[50px] grid grid-cols-1 gap-[40px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {allbooks.map((ele) => (
                    <SingleBook key={ele.id} book={ele} />
                ))}
            </div>
        </>
    );
}

export default ShowAllBooks;
