"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form";
import CustomFormInput from "@/components/custom-ui/CustomFormInput";
import SocialAuth from "./SocialAuth";

const formSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),
    password: z
        .string()
        .min(1, { message: "Password is required" })
        .min(8, { message: "Password must be at least 8 characters long" }),
});

const SignInForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data);
    };

    return (
        <div >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <h1 className="text-[30px]  pb-[8px]">
                        সাইন <span className="text-[#64AFE5]">ইন</span>{" "}
                    </h1>
                    <CustomFormInput
                        name="email"
                        placeholder="আপনার ইমেইল লিখুন
"
                        label="ইমেইল"
                        control={form.control}
                        type="email"
                    />
                    <CustomFormInput
                        name="password"
                        placeholder="পাসওয়ার্ড"
                        label="পাসওয়ার্ড"
                        control={form.control}
                        type="password"
                    />
                    <div className="flex items-center justify-between">
                        <div className="flex items-start space-x-2 pt-[10px]">
                            <Checkbox id="terms" className="mt-[3px]" />
                            <label
                                htmlFor="terms"
                                className="text-[16px] leading-[25px] text-gray-800 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                আমাকে মনে রাখেন
                            </label>
                        </div>
                        <div>
                            <Link href="/auth/forgot-password">
                                <p className="text-gray-700 underline">পাসওয়ার্ড ভুলে গেছেন</p>
                            </Link>
                        </div>
                    </div>

                    <Button
                        className="mt-[30px] sign-up-btn w-full bg-primary-500 py-[15px] text-[20px] hover:bg-primary-600"
                        type="submit"
                    >
                        সাইন ইন
                    </Button>

                    <p className="text-[17px] text-dark-500 pt-[15px] text-center">অথবা</p>
                    <SocialAuth />
                    <p className="my-3 mx-auto text-center text-sm"> অ্যাকাউন্ট নাই ?
                        <span className="text-blue-600 underline text-base"> সাইন-আপ করুন</span>
                    </p>
                </form>
            </Form>
        </div>
    );
};

export default SignInForm;
