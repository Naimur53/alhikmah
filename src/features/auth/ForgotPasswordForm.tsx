"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircle } from "react-icons/bs";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormInput from "@/components/custom-ui/CustomFormInput";

// Define the schema for email validation
const formSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),
});

const ForgotPasswordForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data);
    };

    return (
        <div className="min-w-[350px] max-w-[670px] md:min-w-[665px]">
            <div className="pb-[30px]">
                <Link href="/auth/sign-in">
                    <BsArrowLeftCircle className="size-[50px] text-primary-500" />
                </Link>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    {/* Heading */}
                    <h1 className="h1 pb-[20px]">
                        পাসওয়ার্ড <span className="text-light-blue-600">ভুলে </span> গেছেন
                    </h1>

                    <p className="pb-[20px] text-[20px] text-grey-800">
                        নির্ধারিত ক্ষেত্রে আপনার অ্যাকাউন্টের সাথে যুক্ত ইমেল <br /> ঠিকানা প্রদান করুন
                    </p>

                    {/* Email Input */}
                    <CustomFormInput
                        name="email"
                        placeholder="আপনার ইমেইল লিখুন"
                        label="ইমেইল"
                        control={form.control}
                        type="email"
                    />

                    {/* Submit Button */}
                    <Button
                        className="mt-[30px] w-full bg-primary-500 py-[15px] text-[20px] hover:bg-primary-600"
                        type="submit"
                    >
                        পরবর্তী
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default ForgotPasswordForm;
