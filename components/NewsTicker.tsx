import React from 'react';

const NEWS_ITEMS = [
  "ساعد للأنظمة المرورية تطلق الجيل الجديد من دوريات الضبط الذكي",
  "توقيع مذكرة تفاهم مع وزارة الداخلية لتعزيز السلامة على الطرق",
  "إطلاق خدمة تخطيط الحوادث البسيطة عبر التطبيق الذكي في إمارات جديدة",
  "ساعد تفوز بجائزة التميز الرقمي لعام 2025 عن فئة الخدمات الحكومية",
  "تحديث أوقات عمل مراكز خدمة العملاء خلال شهر رمضان المبارك",
  "اعتماد أنظمة الذكاء الاصطناعي في تحليل البيانات المرورية لتقليل الازدحام"
];

const NewsTicker: React.FC = () => {
  return (
    <div className="bg-[#020617] border border-gray-800 rounded-2xl h-12 flex items-center relative overflow-hidden shrink-0 shadow-lg mx-1 md:mx-0">
      {/* Label Section - Fixed on the right (RTL default) */}
      <div className="bg-primary h-full flex items-center px-6 relative z-20 shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
        <span className="text-[#020617] font-bold text-xs md:text-sm flex items-center gap-2">
          <span className="material-icons-outlined text-base">campaign</span>
          أخبار ساعد
        </span>
        {/* Slanted Separator */}
        <div className="absolute top-0 left-0 w-6 h-full bg-primary -skew-x-12 -translate-x-3"></div>
      </div>

      {/* Scrolling Content */}
      <div className="flex-1 overflow-hidden relative h-full flex items-center bg-[#0F172A]/50 backdrop-blur-sm">
        <div className="animate-ticker absolute whitespace-nowrap flex items-center gap-12 w-max">
          {NEWS_ITEMS.map((item, index) => (
            <div key={index} className="flex items-center gap-3 group cursor-pointer">
               <span className="text-xs md:text-sm text-gray-300 font-medium group-hover:text-primary transition-colors duration-300">
                 {item}
               </span>
               <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); } /* Use 100% of container width */
        }
        .animate-ticker {
          animation: ticker 45s linear infinite;
          left: 0;
          min-width: 100%;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default NewsTicker;