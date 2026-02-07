import React from 'react';

const HeroSection: React.FC = () => {
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
              />
              <span className="material-icons-outlined absolute left-3 top-3 text-gray-500">search</span>
            </div>
            <button className="bg-primary hover:bg-primary_hover text-black font-bold py-3 px-6 rounded-lg transition shadow-md shadow-primary/20 text-sm">
              عرض جميع الأنظمة
            </button>
          </div>
        </div>

        {/* Quick Mini Stats in Hero */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10 mt-auto">
          <div className="bg-gray-50 dark:bg-[#0F172A] p-4 rounded-xl border border-gray-200 dark:border-slate-700 flex items-center justify-between group cursor-pointer hover:border-primary/50 transition">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">الرخص</p>
              <p className="text-xs text-gray-400">حالات وتنبيهات</p>
            </div>
            <span className="material-icons-outlined text-primary group-hover:scale-110 transition">account_balance</span>
          </div>
          <div className="bg-gray-50 dark:bg-[#0F172A] p-4 rounded-xl border border-gray-200 dark:border-slate-700 flex items-center justify-between group cursor-pointer hover:border-primary/50 transition">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">الزوار</p>
              <p className="text-xs text-gray-400">تقارير دورية</p>
            </div>
            <span className="material-icons-outlined text-primary group-hover:scale-110 transition">groups</span>
          </div>
          <div className="bg-gray-50 dark:bg-[#0F172A] p-4 rounded-xl border border-gray-200 dark:border-slate-700 flex items-center justify-between group cursor-pointer hover:border-primary/50 transition">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">القاعات</p>
              <p className="text-xs text-gray-400">منع التعارض</p>
            </div>
            <span className="material-icons-outlined text-primary group-hover:scale-110 transition">meeting_room</span>
          </div>
        </div>
      </div>

      {/* Quick Actions & Stats Panel */}
      <div className="lg:col-span-4 bg-surface-light dark:bg-surface-dark rounded-2xl p-6 border border-gray-200 dark:border-border-dark shadow-lg flex flex-col h-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-gray-900 dark:text-white">إجراءات سريعة</h3>
          <span className="text-[10px] bg-gray-200 dark:bg-slate-700 px-2 py-0.5 rounded text-gray-600 dark:text-gray-300">جاهزية الخدمة: 99.9%</span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">أهم الإجراءات اليومية في مكان واحد.</p>
        
        <div className="space-y-3 mb-8">
          <ActionButton icon="add_business" label="إضافة رخصة/عقد" />
          <ActionButton icon="person_add" label="تسجيل زائر/مورد" />
          <ActionButton icon="event_available" label="حجز قاعة اجتماع" />
        </div>

        <div className="mt-auto">
          <h4 className="text-xs font-bold text-gray-400 mb-3">مؤشرات مختصرة</h4>
          <div className="grid grid-cols-3 gap-2">
            <StatBox label="معلقة" value="12" />
            <StatBox label="اليوم" value="7" />
            <StatBox label="تقارير" value="3" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ActionButton: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
  <button className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-[#0F172A] border border-gray-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition group">
    <div className="flex items-center gap-3">
      <span className="material-icons-outlined text-primary">{icon}</span>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-primary transition">{label}</span>
    </div>
    <span className="material-icons-outlined text-gray-400 text-sm">arrow_back</span>
  </button>
);

const StatBox: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="bg-[#0F172A] p-3 rounded-lg text-center border border-slate-700">
    <span className="block text-[10px] text-gray-400 mb-1">{label}</span>
    <span className="text-xl font-bold text-white">{value}</span>
  </div>
);

export default HeroSection;