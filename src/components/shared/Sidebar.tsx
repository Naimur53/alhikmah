import React from "react";

import { InfoIcon, LayoutDashboardIcon, TableOfContentsIcon, UserIcon } from "lucide-react";

import { NavItem } from "@/components/shared/NavItem";

export type SidebarNavItemsType = {
    title: string;
    icon: React.JSX.Element;
    url: string;
    subItems?: { label: string; url: string }[];
};

const navItems: SidebarNavItemsType[] = [
    {
        title: "ড্যাশবোর্ড",
        url: "/dashboard",
        icon: <LayoutDashboardIcon />,
    },
    {
        title: "লেখক",
        url: "/authors",
        icon: <UserIcon />,
    },
    {
        title: "প্রকাশনী",
        url: "/publishers",
        icon: <TableOfContentsIcon />,
    },
    {
        title: "ব্লগ সমূহ",
        url: "/blogs",
        icon: <TableOfContentsIcon />,
    },
    {
        title: "বই",
        url: "/books",
        icon: <InfoIcon />,
    },
];

export const Sidebar = () => {
    return (
        <div className="no-scrollbar h-full space-y-2 overflow-auto border-r bg-white px-3 py-3 2xl:px-4 2xl:py-4">
            {navItems.map((item, index) => (
                <NavItem key={index} navItem={item} />
            ))}
        </div>
    );
};
