import React from 'react';
import SocialLinks from './SocialLinks';
import ImportantLinks from './ImportantLinks';
import ContactInfo from './ContactInfo';

const Footer = () => {
  return (
    <footer className="bg-[#0F1F31] pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-white"></div>
              <h2 className="text-white text-[28px] md:text-[40px]">আল হিকমাহ</h2>
            </div>
            <p className=" text-[18px] md:text-[24px] text-[#98B6CB]">
              আমাদের লক্ষ্য ও উদ্দেশ্য হল সবচেয়ে উন্নত উন্নয় থেকে বিশুদ্ধ দ্বীনি সকলের জন্য উন্মুক্ত করে দেয়া।
            </p>
            <SocialLinks />
          </div>

          {/* Important Links */}
          <ImportantLinks />

          {/* Contact Info */}
          <ContactInfo />
        </div>

        {/* Copyright */}
        <div className="mt-12 py-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            কপিরাইট © আল-হিকমাহ ২০২৪
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;