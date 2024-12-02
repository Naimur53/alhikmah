import React from "react";

import { FaFacebookF, FaInstagram, FaPinterestP, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
    { icon: <FaFacebookF />, href: "#", label: "Facebook" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaPinterestP />, href: "#", label: "Pinterest" },
    { icon: <FaWhatsapp />, href: "#", label: "WhatsApp" },
];

const SocialLinks = () => {
    return (
        <div className="flex gap-3">
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-md bg-[#1B3654] text-white"
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
