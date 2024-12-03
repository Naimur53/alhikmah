"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormInput from "@/components/custom-ui/CustomFormInput";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),
    password: z
        .string()
        .min(1, { message: "Password is required" })
        .min(8, { message: "Password must be at least 8 characters long" }),
});

const SignUpForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data);
    };

    return (
        <div className="min-w-[350px] max-w-[670px] md:min-w-[665px]">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <h1 className="h1 pb-[25px]">
                        সাইন <span className="text-light-blue-600">আপ</span>{" "}
                    </h1>
                    <CustomFormInput
                        name="name"
                        placeholder="আপনার নাম লিখুন
"
                        label="সম্পূর্ণ নাম"
                        control={form.control}
                        type="text"
                    />
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
                    <div className="flex items-start space-x-2 pt-[15px]">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-[16px] text-grey-800 leading-[25px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            আপনি একটি অ্যাকাউন্ট তৈরি করে <span className="text-light-blue-600">আমাদের শর্তাবলী</span> <br /> এবং <span className="text-light-blue-600">গোপনীয়তা নীতিতে</span>  সম্মত হন।
                        </label>
                    </div>
                    <Button
                        className="mt-[30px] w-full bg-primary-500 py-[15px] text-[20px] hover:bg-primary-600"
                        type="submit"
                    >
                        সাইন আপ
                    </Button>

                    <p className="text-[20px] text-dark-500 pt-[30px]">অথবা</p>
                </form>
            </Form>
        </div>
    );
};

export default SignUpForm;
