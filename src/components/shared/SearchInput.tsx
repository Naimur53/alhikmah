"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BsFilterSquare } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormInput from "@/components/custom-ui/CustomFormInput";

// Define the schema for search input validation
const formSchema = z.object({
    search: z.string().min(1, { message: "Search field cannot be empty" }),
});

const SearchInput = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            search: "",
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log("Search Query:", data.search);
        // You can add additional functionality here, such as making an API call with the search term.
    };

    return (
        <div className="container mx-auto my-[50px]">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex items-center justify-center gap-[20px] rounded-[8px] bg-grey-200 p-[5px] px-[20px]">
                        <div className="w-full">
                            {/* Search Input */}
                            <CustomFormInput
                                name="search"
                                placeholder="বইয়ের নাম ও লেখকের নাম দিয়ে সার্চ"
                                control={form.control}
                                type="text"
                                icon={<IoSearch className="size-[25px] text-grey-800" />}
                                iconPosition="end"
                            />
                        </div>

                        {/* Submit Button */}
                        <Button className="bg-primary-500 py-[15px] text-[20px] hover:bg-primary-600" type="submit">
                            <BsFilterSquare className="size-[25px]" />
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default SearchInput;
