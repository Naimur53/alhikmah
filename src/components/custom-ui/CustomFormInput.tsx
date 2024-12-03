import { useState } from "react";

import { Eye, EyeOff } from "lucide-react";
import { Control, FieldValues, Path, PathValue } from "react-hook-form";

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type TCustomFormInput<T extends FieldValues> = {
    name: Path<T>;
    label?: string;
    placeholder: string;
    description?: string;
    disabled?: boolean;
    defaultValue?: PathValue<T, Path<T>>;
    type?: "email" | "password" | "text" | "number" | "url";
    control: Control<T>;
    required?: boolean;
    min?: number;
};

const CustomFormInput = <T extends FieldValues>({
    label,
    disabled,
    name,
    placeholder,
    type,
    description,
    control,
    defaultValue,
    required,
    min,
}: TCustomFormInput<T>) => {
    const [show, setShow] = useState(false);

    return (
        <FormField
            control={control}
            name={name}
            rules={{
                required: required ? `${label || name} is required` : false,
            }}
            defaultValue={defaultValue}
            render={({ field, fieldState: { error } }) => (
                <FormItem className="space-y-1">
                    <FormLabel className="text-[20px]  leading-[32px] text-dark-500">{label}</FormLabel>
                    <FormControl>
                        <div className="relative pt-[10px] pb-[10px]">
                            <Input
                                placeholder={placeholder}
                                type={(type === "password" ? (show ? "text" : "password") : type) || "text"}
                                {...field}
                                value={type === "number" ? (field.value ? Number(field.value) : "") : field.value}
                                onChange={(e) =>
                                    field.onChange(type === "number" ? Number(e.target.value) : e.target.value)
                                }
                                disabled={disabled}
                                min={min} 
                            />
                            {type === "password" &&
                                (show ? (
                                    <Eye
                                        onClick={() => setShow((prev) => !prev)}
                                        className="absolute right-4 top-[40%] cursor-pointer"
                                        size={16}
                                    />
                                ) : (
                                    <EyeOff
                                        onClick={() => setShow((prev) => !prev)}
                                        className="absolute right-4 top-[40%] cursor-pointer"
                                        size={16}
                                    />
                                ))}
                        </div>
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage>{error?.message}</FormMessage>
                </FormItem>
            )}
        />
    );
};

export default CustomFormInput;
