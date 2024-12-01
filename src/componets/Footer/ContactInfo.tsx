import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="space-y-3">
      <h3 className="text-white text-xl mb-4">যোগাযোগ</h3>
      <div className="flex items-center gap-2 text-white">
        <FaPhone className="text-gray-400" />
        <span>০১৩০-৫৫৯৭-১০১৫</span>
      </div>
      <div className="flex items-center gap-2 text-white">
        <FaEnvelope className="text-gray-400" />
        <span>support@alhikmha.com</span>
      </div>
      <div className="flex items-center gap-2 text-white">
        <FaMapMarkerAlt className="text-gray-400" />
        <span>মহাখালী ডিওএইচএস, ঢাকা</span>
      </div>
    </div>
  );
};

export default ContactInfo;