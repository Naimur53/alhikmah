import React from 'react';

interface PrimaryButtonProps {
  text: string; // Button text
  onClick?: () => void; // Optional click handler
  className?: string; // Optional custom className
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClick,
  className = '', // Default empty string for dynamic classes
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-[8px] bg-gradient-to-r from-[#FFDD00] to-[#FFC641] px-[32px] py-[15px] font-bold text-[#3B4856] 
                  transition-all duration-300 ease-in-out hover:from-[#FFC641] hover:to-[#FFDD00] hover:text-[#2A3440] 
                  shadow-md hover:shadow-lg ${className}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
