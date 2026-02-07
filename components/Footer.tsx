import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-border-dark py-6 px-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-400">
      <p>© 2026 شركة الخدمات الذكية</p>
      <p>تصميم واجهة تجريبي قابل للتطوير</p>
    </footer>
  );
};

export default Footer;