"use client";
import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "./NavLink";
import { navLinks } from "@/data/navLinks";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white  container mx-auto">
      <div className="flex items-center justify-between h-16">
        {/* Logo and Desktop Navigation */}
        
          <div className="flex-shrink-0">
            <span className="text-[28px] text-[#838383] ">আল হিকমাহ</span>
          </div>
          <div className="hidden md:block ml-10">
            <div className="flex space-x-4 ">
              {navLinks.map((link) => (
                <NavLink key={link.id} href={link.href}>
                  {link.title}
                </NavLink>
              ))}
            </div>
          </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-[#1F618D] text-white px-[20px] py-[10px] rounded-md text-sm font-medium hover:bg-[#4C81A4] transition-colors">
            ডোনেট করুন
          </button>
          <button className="text-[#1F618D] border border-[#1F618D] px-[20px] py-[10px] rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
            লগইন / রেজিস্টার
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink key={link.id} href={link.href}>
                {link.title}
              </NavLink>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex flex-col space-y-2 px-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors w-full">
                লগইন করুন
              </button>
              <button className="text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors w-full">
                নতুন / রেজিস্টার
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
