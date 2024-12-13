import { config } from "@/config";

import getBlogs from "@/lib/actions/getBlogs";
import { team } from "@/lib/actions/getMember";

export default async function sitemap() {
    const baseUrl = config.baseUrl;
    const blogs = await getBlogs();

    const blogsUrls =
        blogs?.map((blog) => {
            return { url: `${baseUrl}/blogs/${blog.slug}`, lastModified: new Date() };
        }) ?? [];

    // Get team profile
    const teamsUrls =
        (await team.map((item) => {
            return {
                url: `${baseUrl}/team/${item.nickName}`,
                lastModified: new Date(),
            };
        })) ?? [];

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blogs`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/team`,
            lastModified: new Date(),
        },
        ...teamsUrls,
        ...blogsUrls,
    ];
}
