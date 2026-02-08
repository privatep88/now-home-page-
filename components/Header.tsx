import React from 'react';

interface HeaderProps {
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  return (
    <header className="relative w-full px-6 py-4 flex justify-between items-center border-b border-gray-200 dark:border-white/5 bg-surface-light/90 dark:bg-[#0F172A]/60 backdrop-blur-xl transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-sm font-bold text-primary border border-slate-700 shadow-lg">
          Z
        </div>
        <div className="hidden md:block">
          <h1 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">شركة الخدمات الذكية</h1>
          <p className="text-xs text-gray-500 dark:text-gray-400">منصة الأنظمة الإدارية الذكية</p>
        </div>
      </div>

      {/* Center (Department Info) */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center justify-center text-center">
          <span className="text-xl font-bold text-primary tracking-wide">إدارة الخدمات العامة</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">قسم إدارة المرافق</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 bg-gray-100 dark:bg-white/5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10 backdrop-blur-sm">
          <span className="material-icons-outlined text-primary text-sm">event_note</span>
          <span className="text-xs font-medium text-gray-600 dark:text-gray-300">الخميس، 5 فبراير 2026</span>
        </div>
        
        <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition group">
          <span className="material-icons-outlined text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors">notifications</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full border-2 border-[#0F172A]"></span>
        </button>

        <div className="h-6 w-px bg-gray-200 dark:bg-white/10 mx-1 hidden md:block"></div>

        <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-white/5 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition text-xs font-medium dark:text-gray-200 border border-transparent dark:border-white/10">
          <span>مدير النظام</span>
          <span className="material-icons-outlined text-sm">expand_more</span>
        </button>

        <button 
          onClick={onLogout}
          className="group flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm"
          title="تسجيل خروج"
        >
          <span className="material-icons-outlined text-gray-500 dark:text-gray-400 group-hover:text-primary text-lg rtl:rotate-180 transition-colors">logout</span>
        </button>
      </div>
    </header>
  );
};

export default Header;