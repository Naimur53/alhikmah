import React from 'react';

const links = [
  { text: 'রুম', href: '#' },
  { text: 'প্রয়োজন', href: '#' },
  { text: 'সার্টিফাই', href: '#' },
  { text: 'প্রাইভেসি পলিসি', href: '#' }
];

const ImportantLinks = () => {
  return (
    <div className="space-y-3">
      <h3 className="text-white text-xl mb-4">প্রয়োজনীয় লিংক</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-white hover:text-gray-300 transition-colors">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImportantLinks;