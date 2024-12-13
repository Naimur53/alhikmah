"use client";

import { useRouter } from "next/navigation";

import BlogsTable from "@/features/blogs/BlogsTable";
import { Book } from "@/features/types";
import { useGetBooksQuery } from "@/redux/features/books/books-api";
import { useAppDispatch } from "@/redux/hook";

import { useTable } from "@/hooks/useTable";
import { ErrorComponent } from "@/components/table/ErrorComponent";
import { TableLoadingSkeleton } from "@/components/table/TableLoadingSkeleton";

const Page = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const {
        isLoading,
        error,
        data,
        onPageChange,
        onPageSizeChange,
        onFilterChange,
        clearFilter,
        onSearch,
        appliedFilters,
        refetch,
    } = useTable<Book>({
        useQueryHook: useGetBooksQuery,
        keys: ["state", "difficulty", "search", "page", "page_size", "section", "module"],
        mode: "queryParams",
    });

    const queryProps = {
        state: appliedFilters.find((filter) => filter.key === "state")?.value || "",
        difficulty: appliedFilters.find((filter) => filter.key === "difficulty")?.value || "",
        search: appliedFilters.find((filter) => filter.key === "search")?.value || "",
        page: parseInt(appliedFilters.find((filter) => filter.key === "page")?.value || "1"),
        pageSize: parseInt(appliedFilters.find((filter) => filter.key === "page_size")?.value || "10"),
        section: appliedFilters.find((filter) => filter.key === "section")?.value || "",
        module: appliedFilters.find((filter) => filter.key === "module")?.value || "",
    };

    if (isLoading) {
        return <TableLoadingSkeleton columns={6} />;
    }

    if (error) {
        return <ErrorComponent onRetry={() => router.refresh()} />;
    }

    if (!data) {
        return <ErrorComponent onRetry={() => router.refresh()} title={"No Data Found"} />;
    }

    return (
        <BlogsTable
            data={data}
            queryProps={queryProps}
            onPageChange={onPageChange}
            onPageSizeChange={onPageSizeChange}
            onSearch={onSearch}
            appliedFilter={appliedFilters}
            onFilterChange={onFilterChange}
            clearFilter={clearFilter}
            onCreatePress={() => {}}
            refetch={refetch}
        />
    );
};

export default Page;