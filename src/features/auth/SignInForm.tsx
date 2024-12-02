"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormInput from "@/components/custom-ui/CustomFormInput";

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
        <div className="center">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <h1>Sign In Form</h1>
                    <CustomFormInput name="email" placeholder="Email" control={form.control} type="email" />
                    <CustomFormInput name="password" placeholder="Password" control={form.control} type="password" />
                    <Button type="submit">Sign In</Button>
                </form>
            </Form>
        </div>
    );
};

export default SignInForm;
