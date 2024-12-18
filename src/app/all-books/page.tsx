import React from "react";

import ShowAllBooks from "@/features/books/ShowAllBooks";

import { DynamicBanner } from "@/components/shared/DynamicBanner";
import { PaginationDemo } from "@/components/shared/PaginationDemo";
import SearchInput from "@/components/shared/SearchInput";

function AllBooks() {
    return (
        <div>
            <DynamicBanner heading="বই সমূহ" />
            <SearchInput />
            <ShowAllBooks />
            <PaginationDemo />
        </div>
    );
}

export default AllBooks;
