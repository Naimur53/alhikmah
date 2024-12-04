import Image from "next/image";

import { BlogPost } from "@/data/BlogPost";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    return (
        <div className="h-full rounded-[10px] bg-[#F7F7F7] p-[30px]">
            <Card className="flex h-full flex-col border-none bg-inherit shadow-none">
                <div className="h-[300px] w-full overflow-hidden rounded-t-lg">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        className="h-full w-full object-cover "
                        height={250}
                        width={384}
                    />
                </div>
                <CardHeader className="px-0">
                    <div className="rounded-full py-1 text-[16px] font-semibold text-[#838383]">
                        {post.category}
                    </div>
                    <CardTitle className="line-clamp-2 cursor-pointer text-[20px] font-semibold hover:text-primary">
                        {post.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-0">
                    <div className="text-muted-foreground flex justify-between text-sm">
                        <div className="flex items-center text-[16px] text-[#838383]">{post.author}</div>
                        <div className="flex items-center text-[16px] text-[#838383]">{post.date}</div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
