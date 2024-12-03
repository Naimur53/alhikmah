import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  image: string;
}

export function TestimonialCard({ content, author, role, image }: TestimonialProps) {
  return (
    <div className="flex flex-col items-center lg:items-start space-y-6 text-center lg:text-start bg-primary-800 rounded-[8px] text-white p-6 lg:p-8">
      <div className="space-y-4">
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[24px] md:leading-[28px] lg:leading-[32px]">
          {content}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
        <Avatar className="h-[56px] w-[56px] md:h-[64px] md:w-[64px] lg:h-[71px] lg:w-[71px]">
          <AvatarImage src={image} alt={author} className="" />
          <AvatarFallback>{author[0]}</AvatarFallback>
        </Avatar>
        <div className="text-center lg:text-left">
          <h3 className="font-semibold text-[18px] md:text-[20px]">{author}</h3>
          <p className="text-[16px] md:text-[18px] text-primary-200 opacity-80">{role}</p>
        </div>
      </div>
    </div>
  );
}
