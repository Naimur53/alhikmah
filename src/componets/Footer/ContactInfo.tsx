import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="space-y-3">
      <h3 className="text-white font-semibold text-[24px] mb-4">যোগাযোগ</h3>
      <div className="flex items-center text-white text-[20px] pb-[20px] hover:text-gray-300 transition-colors">
        <FaPhone className="text-gray-400" />
        <span>০১৩০-৫৫৯৭-১০১৫</span>
      </div>
      <div className="flex items-center text-white text-[20px] pb-[20px] hover:text-gray-300 transition-colors">
        <FaEnvelope className="text-gray-400" />
        <span>support@alhikmha.com</span>
      </div>
      <div className="flex items-center text-white text-[20px] pb-[20px] hover:text-gray-300 transition-colors">
        <FaMapMarkerAlt className="text-gray-400" />
        <span>মহাখালী ডিওএইচএস, ঢাকা</span>
      </div>
    </div>
  );
};

export default ContactInfo;