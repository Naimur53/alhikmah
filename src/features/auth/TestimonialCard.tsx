import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps {
    content: string;
    author: string;
    role: string;
    image: string;
}

export function TestimonialCard({ content, author, role, image }: TestimonialProps) {
    return (
        <div className="flex flex-col items-center  backdrop-blur-[4px] bg-white/15 space-y-6 rounded-[8px] bg-primary-800 p-5 text-center text-white lg:items-start lg:p-8 lg:text-start">
            <div className="space-y-4">
                <p className="text-[16px] font-normal leading-[24px] md:text-[18px] md:leading-[28px] lg:text-[20px] lg:leading-[32px]">
                    {content}
                </p>
            </div>
            <div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                <Avatar className="h-[56px] w-[56px] md:h-[64px] md:w-[64px] lg:h-[71px] lg:w-[71px]">
                    <AvatarImage src={image} alt={author} className="" />
                    <AvatarFallback>{author[0]}</AvatarFallback>
                </Avatar>
                <div className="text-center lg:text-left">
                    <h3 className="text-[18px] font-semibold md:text-[20px]">{author}</h3>
                    <p className="text-[16px] text-primary-200 opacity-80 md:text-[18px]">{role}</p>
                </div>
            </div>
        </div>
    );
}
