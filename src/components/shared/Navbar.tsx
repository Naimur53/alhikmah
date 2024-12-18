"use client";

import { useState } from "react";
import Link from "next/link";

import { navLinks } from "@/data/navLinks";
import { Menu } from "lucide-react";

import Logo from "@/components/shared/Logo";
import { NavLink } from "@/components/shared/NavLink";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="container mx-auto bg-white">
            <div className="flex h-16 items-center justify-between">
                {/* Logo and Desktop Navigation */}

                <Logo />

                <div className="ml-10 hidden md:block">
                    <div className="flex space-x-4">
                        {navLinks.map((link) => (
                            <NavLink key={link.id} href={link.href}>
                                {link.title}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Auth Buttons */}
                <div className="hidden items-center space-x-4 md:flex">
                    <button className="rounded-md bg-[#1F618D] px-[20px] py-[10px] text-sm font-medium text-white transition-colors hover:bg-[#4C81A4]">
                        ডোনেট করুন
                    </button>
                    <Link href="/auth/sign-in">
                        <button className="rounded-md border border-[#1F618D] px-[20px] py-[10px] text-sm font-medium text-[#1F618D] transition-colors hover:bg-gray-50">
                            লগইন / রেজিস্টার
                        </button>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navLinks.map((link) => (
                            <NavLink key={link.id} href={link.href}>
                                {link.title}
                            </NavLink>
                        ))}
                    </div>
                    <div className="border-t border-gray-200 pb-3 pt-4">
                        <div className="flex flex-col space-y-2 px-2">
                            <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                                লগইন করুন
                            </button>
                            <button className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                                নতুন / রেজিস্টার
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
