"use client";

import { useRouter } from "next/navigation";

import { FileUploadComponent } from "@/features/dashboard/FileUploadComponent";
import { MediaType } from "@/features/types";
import { useAddAuthorMutation } from "@/redux/features/author/author-api";
import { useAppDispatch } from "@/redux/hook";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormInput from "@/components/custom-ui/CustomFormInput";

const formSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),
});

const AddAuthorPage = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    const [addAuthor, { isLoading }] = useAddAuthorMutation();

    const uploadMedia = (file: File, type: MediaType) => {
        console.log(file, type);
    };

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        addAuthor({
            ...data,
            id: 0,
            name: "",
            image: "",
        })
            .unwrap()
            .then((res) => {
                toast.success("Author added successfully");
                const searchParams = new URLSearchParams(window.location.search);
                const redirectUrl = searchParams.get("redirect") || "/dashboard";
                router.replace(redirectUrl);
            })
            .catch((error) => {
                toast.error(error.data.detail);
            });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <h3 className="pb-8 text-2xl 2xl:pb-10 2xl:text-3xl">Add Author</h3>
                <div className="space-y-4">
                    <CustomFormInput
                        label="Email"
                        name="email"
                        placeholder="Email"
                        control={form.control}
                        type="email"
                    />

                    <FileUploadComponent
                        type={MediaType.IMAGE}
                        uploadMedia={uploadMedia}
                        isLoading={isLoading}
                        isError={false}
                    />

                    <Button type="submit" className="w-full" isLoading={isLoading} disabled={isLoading}>
                        Add Author
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default AddAuthorPage;