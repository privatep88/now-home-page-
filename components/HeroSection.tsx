import React from 'react';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ searchQuery, setSearchQuery }) => {
  // Get current date dynamically
  const today = new Date();
  const day = today.getDate().toString().padStart(2, '0');
  // Use ar-EG to ensure "فبراير" style naming (Gregorian)
  const month = new Intl.DateTimeFormat('ar-EG', { month: 'long' }).format(today);
  const year = today.getFullYear().toString();

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Welcome & Search Area */}
      <div className="lg:col-span-8 bg-surface-light dark:bg-surface-dark rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-border-dark relative overflow-hidden shadow-lg flex flex-col justify-between min-h-[300px]">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-gradient-to-br from-primary via-transparent to-transparent"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-highlight/50 border border-slate-600 mb-4 w-fit">
            <span className="material-icons-outlined text-primary text-sm">verified_user</span>
            <span className="text-xs text-gray-300">منصة موحدة للأنظمة الإدارية</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-snug">
            مرحباً بك في منصة الأنظمة الإدارية <br />
            <span className="text-primary">المتكاملة</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-sm leading-relaxed mb-8">
            تجمع المنصة عدة أنظمة تشغيلية وإدارية في مكان واحد ، وخصائص واضحة للتقارير والتنبيهات والعمل اليومي
          </p>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <input
                className="w-full bg-gray-50 dark:bg-[#0F172A] border border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white rounded-lg py-3 px-4 pl-10 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition placeholder-gray-500 text-sm"
                placeholder="ابحث عن نظام..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="material-icons-outlined absolute left-3 top-3 text-gray-500">search</span>
            </div>
            <button className="bg-primary hover:bg-primary_hover text-black font-bold py-3 px-6 rounded-lg transition shadow-md shadow-primary/20 text-sm">
              أبحث
            </button>
          </div>
        </div>

        {/* Quick Navigation Cards (Updated) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10 mt-auto">
          <div className="bg-gray-50 dark:bg-[#0F172A] p-4 rounded-xl border border-gray-200 dark:border-slate-700 flex items-center justify-between group cursor-pointer hover:border-primary/50 transition">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">الرئيسية</p>
              <p className="text-xs text-gray-400">لوحة المعلومات</p>
            </div>
            <span className="material-icons-outlined text-primary group-hover:scale-110 transition">home</span>
          </div>
          <div className="bg-gray-50 dark:bg-[#0F172A] p-4 rounded-xl border border-gray-200 dark:border-slate-700 flex items-center justify-between group cursor-pointer hover:border-primary/50 transition">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">تواصل معنا</p>
              <p className="text-xs text-gray-400">الدعم الفني</p>
            </div>
            <span className="material-icons-outlined text-primary group-hover:scale-110 transition">headset_mic</span>
          </div>
          <div className="bg-gray-50 dark:bg-[#0F172A] p-4 rounded-xl border border-gray-200 dark:border-slate-700 flex items-center justify-between group cursor-pointer hover:border-primary/50 transition">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">English</p>
              <p className="text-xs text-gray-400">Language</p>
            </div>
            <span className="material-icons-outlined text-primary group-hover:scale-110 transition">language</span>
          </div>
        </div>
      </div>

      {/* Quick Actions & Stats Panel */}
      <div className="lg:col-span-4 bg-surface-light dark:bg-surface-dark rounded-2xl p-6 border border-gray-200 dark:border-border-dark shadow-lg flex flex-col h-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-gray-900 dark:text-white">إجراءات سريعة</h3>
          <span className="text-[10px] bg-gray-200 dark:bg-slate-700 px-2 py-0.5 rounded text-gray-600 dark:text-gray-300">الخدمات الأكثر إستخداماً</span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">أهم الإجراءات اليومية في مكان واحد.</p>
        
        <div className="space-y-3 mb-8">
          <ActionButton 
            icon="add_business" 
            label="إضافة رخصة/عقد" 
            url="https://license-jet.vercel.app/"
          />
          <ActionButton 
            icon="person_add" 
            label="تسجيل زائر/مورد" 
            url="https://vistor-vindor.vercel.app/"
          />
          <ActionButton 
            icon="event_available" 
            label="حجز قاعة اجتماع" 
            url="https://hall-nu.vercel.app/"
          />
        </div>

        <div className="mt-auto">
          <h4 className="text-xs font-bold text-gray-400 mb-3">تاريخ اليوم</h4>
          <div className="grid grid-cols-3 gap-2">
            <StatBox label="التاريخ" value={day} />
            <StatBox label="الشهر" value={month} />
            <StatBox label="السنة" value={year} />
          </div>
        </div>
      </div>
    </section>
  );
};

const ActionButton: React.FC<{ icon: string; label: string; url: string }> = ({ icon, label, url }) => (
  <a 
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-[#0F172A] border border-gray-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition group block"
  >
    <div className="flex items-center gap-3">
      <span className="material-icons-outlined text-primary">{icon}</span>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-primary transition">{label}</span>
    </div>
    <span className="material-icons-outlined text-gray-400 text-sm rtl:rotate-180">arrow_back</span>
  </a>
);

const StatBox: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="bg-[#0F172A] p-3 rounded-lg text-center border border-slate-700">
    <span className="block text-[10px] text-gray-400 mb-1">{label}</span>
    <span className="text-xl font-bold text-white">{value}</span>
  </div>
);

export default HeroSection;