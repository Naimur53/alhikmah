import { SingleAuthor } from "@/features/types";
import { api } from "@/redux/api";
import { METHOD, TagType } from "@/redux/types";
import { PaginatedResponse, QueryParams } from "@/types";

export const authorApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAuthors: builder.query<PaginatedResponse<SingleAuthor>, QueryParams>({
            query: (query) => ({
                url: `/authors`,
                method: METHOD.GET,
                params: query,
            }),
            providesTags: [TagType.Author],
        }),
        getAuthorById: builder.query<SingleAuthor, string>({
            query: (id) => `/authors/${id}`,
        }),
        addAuthor: builder.mutation<SingleAuthor, SingleAuthor>({
            query: (info) => {
                return {
                    url: "/authors",
                    method: "POST",
                    body: info,
                };
            },
        }),
        editAuthor: builder.mutation<void, SingleAuthor>({
            query: (info) => {
                return {
                    url: `/authors/${info.id}`,
                    method: "PATCH",
                    body: info,
                };
            },
        }),
        deleteAuthor: builder.mutation<SingleAuthor, string>({
            query: (id) => {
                return {
                    url: `/authors/${id}`,
                    method: "DELETE",
                };
            },
        }),
        bulkDeleteAuthors: builder.mutation<SingleAuthor, string[]>({
            query: (ids) => {
                return {
                    url: `/authors/bulk-delete`,
                    method: "DELETE",
                    body: ids,
                };
            },
        }),
        bulkUpdateAuthors: builder.mutation<SingleAuthor, SingleAuthor[]>({
            query: (info) => {
                return {
                    url: `/authors/bulk-update`,
                    method: "PATCH",
                    body: info,
                };
            },
        }),
    }),
});

export const {
    useGetAuthorsQuery,
    useAddAuthorMutation,
    useDeleteAuthorMutation,
    useEditAuthorMutation,
    useGetAuthorByIdQuery,
    useBulkDeleteAuthorsMutation,
    useBulkUpdateAuthorsMutation,
} = authorApi;
