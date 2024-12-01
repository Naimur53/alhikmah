import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
  { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  { icon: <FaPinterestP />, href: '#', label: 'Pinterest' },
  { icon: <FaWhatsapp />, href: '#', label: 'WhatsApp' }
];

const SocialLinks = () => {
  return (
    <div className="flex gap-3">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          aria-label={link.label}
          className="w-10 h-10 bg-[#1B3654] text-white flex items-center justify-center rounded-full hover:bg-[#2d4a6d] transition-colors"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;