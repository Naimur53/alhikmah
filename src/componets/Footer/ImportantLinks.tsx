import React from 'react';

const links = [
  { text: 'রুম', href: '#' },
  { text: 'প্রয়োজন', href: '#' },
  { text: 'সার্টিফাই', href: '#' },
  { text: 'প্রাইভেসি পলিসি', href: '#' }
];

const ImportantLinks = () => {
  return (
    <div className="lg:pl-[100px] space-y-3">
      <h3 className="text-white font-semibold text-[24px] mb-4">প্রয়োজনীয় লিংক</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-white text-[18px] md:text-[20px] pb-[20px] hover:text-gray-300 transition-colors">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImportantLinks;