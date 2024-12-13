import { api } from "@/redux/api";
import { METHOD, TagType } from "@/redux/types";

export const blogApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: (query) => ({
                url: `/blogs?${query}`,
                method: METHOD.GET,
                params: query,
            }),
            providesTags: [TagType.Blog],
        }),
        getBlogById: builder.query({
            query: (id) => ({
                url: `/blogs/${id}`,
                method: METHOD.GET,
            }),
            providesTags: [TagType.Blog],
        }),
        addBlog: builder.mutation({
            query: (info) => ({
                url: "/blogs",
                method: METHOD.POST,
                body: info,
            }),
            invalidatesTags: [TagType.Blog],
        }),
        editBlog: builder.mutation({
            query: (info) => ({
                url: `/blogs/${info._id}`,
                method: METHOD.PATCH,
                body: info,
            }),
            invalidatesTags: [TagType.Blog],
        }),
        deleteBlog: builder.mutation({
            query: (id) => ({
                url: `/blogs/${id}`,
                method: METHOD.DELETE,
            }),
            invalidatesTags: [TagType.Blog],
        }),
        bulkDeleteBlogs: builder.mutation({
            query: (ids) => ({
                url: `/blogs/bulk-delete`,
                method: METHOD.DELETE,
                body: ids,
            }),
            invalidatesTags: [TagType.Blog],
        }),
        bulkUpdateBlogs: builder.mutation({
            query: (info) => ({
                url: `/blogs/bulk-update`,
                method: METHOD.PATCH,
                body: info,
            }),
            invalidatesTags: [TagType.Blog],
        }),
    }),
});

export const {
    useGetBlogsQuery,
    useAddBlogMutation,
    useGetBlogByIdQuery,
    useDeleteBlogMutation,
    useEditBlogMutation,
    useBulkDeleteBlogsMutation,
    useBulkUpdateBlogsMutation,
} = blogApi;
