import React from 'react';

const AnalyticsSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 mt-8">
      
      {/* 1. Weekly Activity Chart */}
      <div className="col-span-1 lg:col-span-2 bg-surface-light dark:bg-surface-dark rounded-2xl p-6 border border-gray-200 dark:border-border-dark shadow-lg relative overflow-hidden group">
         <div className="flex justify-between items-start mb-6 relative z-10">
            <div>
                <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="material-icons-outlined text-primary">bar_chart</span>
                    مؤشرات الأداء الأسبوعي
                </h3>
                <p className="text-xs text-gray-500 mt-1">مقارنة حجم المعاملات عبر الأنظمة المختلفة</p>
            </div>
            <select className="bg-gray-50 dark:bg-[#0F172A] border border-gray-200 dark:border-slate-700 text-xs rounded-lg px-2 py-1 outline-none text-gray-500">
                <option>هذا الأسبوع</option>
                <option>الشهر الماضي</option>
            </select>
         </div>

         {/* Custom CSS Bar Chart */}
         <div className="flex items-end justify-between h-48 gap-2 md:gap-4 px-2 relative z-10">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
                <div className="border-t border-gray-500 w-full h-0"></div>
                <div className="border-t border-gray-500 w-full h-0"></div>
                <div className="border-t border-gray-500 w-full h-0"></div>
                <div className="border-t border-gray-500 w-full h-0"></div>
            </div>

            {[
                { label: 'الزوار', value: '80%', color: 'bg-blue-500' },
                { label: 'الموردين', value: '45%', color: 'bg-indigo-500' },
                { label: 'القاعات', value: '95%', color: 'bg-primary' },
                { label: 'الرخص', value: '30%', color: 'bg-emerald-500' },
                { label: 'المصروفات', value: '60%', color: 'bg-rose-500' },
                { label: 'الصيانة', value: '25%', color: 'bg-amber-600' },
                { label: 'الكهرباء', value: '50%', color: 'bg-cyan-500' },
            ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 w-full group/bar cursor-pointer">
                    <div className="relative w-full md:w-8 bg-gray-100 dark:bg-slate-800 rounded-t-lg h-40 overflow-hidden">
                        <div 
                            className={`absolute bottom-0 left-0 w-full rounded-t-lg transition-all duration-1000 ease-out ${item.color} opacity-80 group-hover/bar:opacity-100`}
                            style={{ height: item.value }}
                        ></div>
                        {/* Tooltip */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap z-20">
                            {item.value}
                        </div>
                    </div>
                    <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400 truncate w-full text-center">{item.label}</span>
                </div>
            ))}
         </div>
      </div>

      {/* 2. Quick Stats & Alerts */}
      <div className="col-span-1 flex flex-col gap-6">
        
        {/* Circular Progress Cards */}
        <div className="grid grid-cols-2 gap-4">
            {/* Petty Cash Stat */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-4 border border-gray-200 dark:border-border-dark shadow-lg flex flex-col items-center justify-center relative overflow-hidden">
                 <svg className="w-20 h-20 transform -rotate-90">
                    <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-200 dark:text-slate-800" />
                    <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={36 * 2 * Math.PI} strokeDashoffset={36 * 2 * Math.PI * (1 - 0.75)} className="text-emerald-500 transition-all duration-1000" />
                 </svg>
                 <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">75%</span>
                 </div>
                 <p className="text-[10px] text-gray-500 mt-2 font-bold">ميزانية الصرف</p>
                 <p className="text-[10px] text-emerald-500">متوفر 2500 درهم</p>
            </div>

            {/* Meeting Rooms Stat */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-4 border border-gray-200 dark:border-border-dark shadow-lg flex flex-col items-center justify-center relative overflow-hidden">
                 <svg className="w-20 h-20 transform -rotate-90">
                    <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-200 dark:text-slate-800" />
                    <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={36 * 2 * Math.PI} strokeDashoffset={36 * 2 * Math.PI * (1 - 0.40)} className="text-primary transition-all duration-1000" />
                 </svg>
                 <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">40%</span>
                 </div>
                 <p className="text-[10px] text-gray-500 mt-2 font-bold">إشغال القاعات</p>
                 <p className="text-[10px] text-primary">3 قاعات متاحة</p>
            </div>
        </div>

        {/* Action List */}
        <div className="flex-1 bg-surface-light dark:bg-surface-dark rounded-2xl p-5 border border-gray-200 dark:border-border-dark shadow-lg">
            <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4 text-sm">
                <span className="material-icons-outlined text-rose-500">notifications_active</span>
                تنبيهات عاجلة
            </h3>
            <div className="space-y-3">
                <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition border-r-2 border-transparent hover:border-rose-500">
                    <div className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0 animate-pulse"></div>
                    <div>
                        <p className="text-xs font-bold text-gray-800 dark:text-gray-200">رخصة تجارية تنتهي قريباً</p>
                        <p className="text-[10px] text-gray-500">مجموعة القمة - تنتهي خلال 3 أيام</p>
                    </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition border-r-2 border-transparent hover:border-primary">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0"></div>
                    <div>
                        <p className="text-xs font-bold text-gray-800 dark:text-gray-200">طلب حجز قاعة معلق</p>
                        <p className="text-[10px] text-gray-500">قسم الموارد البشرية - القاعة الرئيسية</p>
                    </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition border-r-2 border-transparent hover:border-blue-500">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                    <div>
                        <p className="text-xs font-bold text-gray-800 dark:text-gray-200">تقرير استهلاك الماء</p>
                        <p className="text-[10px] text-gray-500">مطلوب إدخال قراءة شهر فبراير</p>
                    </div>
                </div>
            </div>
            <button className="w-full mt-4 text-[10px] text-center text-primary hover:underline">عرض كل التنبيهات</button>
        </div>

      </div>
    </section>
  );
};

export default AnalyticsSection;