import { SystemCardProps, TableItem } from './types';

export const SYSTEM_CARDS_DATA: SystemCardProps[] = [
  {
    title: "نظام تسجيل الزوار والموردين",
    description: "تسجيل دخول الزوار والموردين مع تفاصيل المرفق، وقت الدخول والخروج، وتقارير دورية.",
    icon: "people_alt",
    link: "https://vistor-vindor.vercel.app/",
    tags: [
      "بيانات الزائر والمرفق والغرض",
      "وقت الدخول والخروج",
      "تقارير يومية وشهرية"
    ]
  },
  {
    title: "نظام حجز قاعات الاجتماعات",
    description: "عرض شهري وجدولي للحجوزات مع منع التعارض الزمني وتحديد الوقت من/إلى والجهة الحاجزة.",
    icon: "calendar_today",
    link: "https://hall-nu.vercel.app/",
    tags: [
      "تقويم شهري + جدول يومي",
      "تحديد الوقت من / إلى",
      "منع التعارض الزمني"
    ]
  },
  {
    title: "نظام تسجيل أسماء مستلمي بطاقات الزوار",
    description: "إدارة استلام بطاقات الزوار: اسم المستلم، رقم البطاقة، التاريخ، الجهة، وتوقيع/ملاحظة.",
    icon: "badge",
    link: "https://card-recipients.vercel.app/",
    tags: [
      "سجل تاريخي كامل",
      "توقيع أو ملاحظة",
      "بحث سريع"
    ]
  },
  {
    title: "نظام تسجيل بيانات الرخص التجارية والعقود",
    description: "إدارة الرخص والعقود، متابعة الانتهاء، والتنبيهات التلقائية مع حفظ المرفقات بسهولة.",
    icon: "account_balance",
    link: "https://license-jet.vercel.app/",
    tags: [
      "حالات: نشط / قريب الانتهاء / منتهي",
      "تحميل المرفقات وإدارة السجلات",
      "تنبيهات تلقائية قبل الانتهاء"
    ],
    statusLabels: [
      { text: "نشط", colorClass: "bg-green-900/30 text-green-400 border-green-800" },
      { text: "قريب الانتهاء", colorClass: "bg-yellow-900/30 text-yellow-400 border-yellow-800" },
      { text: "منتهي", colorClass: "bg-gray-700 text-gray-300 border-gray-600" }
    ]
  },
  {
    title: "نظام تسجيل المبالغ المصروفة من قبل الدعم اللوجيستي (Petty Cash)",
    description: "تسجيل المصروفات مع المبلغ والسبب والقسم والمرفقات، وحساب الإجمالي وإعداد التقارير.",
    icon: "attach_money",
    link: "https://petty-cash-eta.vercel.app/",
    tags: [
      "إجمالي المصروفات",
      "مرفقات",
      "تقارير مالية"
    ]
  },
  {
    title: "نظام تسجيل استهلاك الماء والكهرباء",
    description: "تسجيل القراءات ومقارنتها شهرياً مع رسوم بيانية وتنبيهات عند تجاوز حدود الاستهلاك.",
    icon: "bolt",
    link: "https://record-water-elc.vercel.app/",
    tags: [
      "تسجيل القراءات",
      "مقارنة شهرية",
      "تنبيهات تجاوز الاستهلاك"
    ]
  }
];

export const TABLE_DATA: TableItem[] = [
  {
    id: "OP-2026-901",
    item: "إضافة رخصة جديدة (مجموعة القمة)",
    department: "إدارة التراخيص",
    status: "تمت الإضافة",
    statusColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    lastUpdate: "منذ 2 ساعة"
  },
  {
    id: "OP-2026-902",
    item: "تجديد عقد صيانة (الشركة المتحدة)",
    department: "قسم العقود",
    status: "قيد الاعتماد",
    statusColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    lastUpdate: "05/02/2026"
  },
  {
    id: "OP-2026-903",
    item: "تسجيل مورد جديد (تكنو سوفت)",
    department: "المشتريات",
    status: "مكتمل",
    statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    lastUpdate: "04/02/2026"
  },
  {
    id: "OP-2026-904",
    item: "تحديث مرفقات رخصة (آفاق للمحاماة)",
    department: "الأرشيف الرقمي",
    status: "مكتمل",
    statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    lastUpdate: "04/02/2026"
  },
  {
    id: "OP-2026-905",
    item: "أرشفة عقد منتهي (خدمات النظافة)",
    department: "إدارة المرافق",
    status: "مؤرشف",
    statusColor: "bg-gray-500/10 text-gray-400 border-gray-500/20",
    lastUpdate: "03/02/2026"
  }
];