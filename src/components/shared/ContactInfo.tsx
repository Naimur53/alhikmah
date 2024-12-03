import React from "react";

import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const ContactInfo = () => {
    return (
        <div className="space-y-3">
            <h3 className="mb-4 text-[24px] font-semibold text-white">যোগাযোগ</h3>
            <div className="flex items-center pb-[20px] text-[20px] text-white transition-colors hover:text-gray-300">
                <FaPhone className="text-gray-400 text-[32px] pr-[15px]" />
                <span>০১৩০-৫৫৯৭-১০১৫</span>
            </div>
            <div className="flex items-center pb-[20px] text-[20px] text-white transition-colors hover:text-gray-300">
                <FaEnvelope className="text-gray-400 text-[32px] pr-[15px]" />
                <span>support@alhikmha.com</span>
            </div>
            <div className="flex items-center pb-[20px] text-[20px] text-white transition-colors hover:text-gray-300">
                <FaMapMarkerAlt className="text-gray-400 text-[32px] pr-[15px]" />
                <span> মহাখালী ডিওএইচএস, ঢাকা</span>
            </div>
        </div>
    );
};

export default ContactInfo;
