import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPost } from "@/data/BlogPost";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="h-full bg-[#F7F7F7] rounded-[10px] p-[30px]">
      <Card className="h-full flex flex-col border-none shadow-none bg-inherit">
        <div className=" h-48 w-full overflow-hidden rounded-t-lg">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <CardHeader>
          <div className=" text-[#838383] px-3 py-1 rounded-full font-semibold text-[16px]">
            {post.category}
          </div>
          <CardTitle className="line-clamp-2 hover:text-primary cursor-pointer font-semibold text-[20px]">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex justify-between text-sm text-muted-foreground">
            <div className="flex items-center text-[16px] text-[#838383]">
              {post.author}
            </div>
            <div className="flex items-center text-[16px] text-[#838383]">
              {post.date}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
