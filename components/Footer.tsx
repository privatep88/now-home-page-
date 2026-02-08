import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-6 px-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 dark:border-white/5 bg-surface-light/90 dark:bg-[#0F172A]/60 backdrop-blur-xl transition-all duration-300 text-xs text-gray-500 dark:text-gray-400">
      <p>© {currentYear} شركة الخدمات الذكية</p>
      <p>إعداد وتصميم / خالد الجفري</p>
    </footer>
  );
};

export default Footer;