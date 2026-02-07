import { SystemCardProps, TableItem } from './types';

export const SYSTEM_CARDS_DATA: SystemCardProps[] = [
  {
    title: "نظام تسجيل بيانات الرخص التجارية والعقود",
    description: "إدارة الرخص والعقود، متابعة الانتهاء، والتنبيهات التلقائية مع حفظ المرفقات بسهولة.",
    icon: "account_balance",
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
    title: "نظام تسجيل الزوار والموردين",
    description: "تسجيل دخول الزوار والموردين مع تفاصيل المرفق، وقت الدخول والخروج، وتقارير دورية.",
    icon: "people_alt",
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
    tags: [
      "تقويم شهري + جدول يومي",
      "تحديد الوقت من / إلى",
      "منع التعارض الزمني"
    ]
  },
  {
    title: "نظام تسجيل استهلاك الماء والكهرباء",
    description: "تسجيل القراءات ومقارنتها شهرياً مع رسوم بيانية وتنبيهات عند تجاوز حدود الاستهلاك.",
    icon: "bolt",
    tags: [
      "تسجيل القراءات",
      "مقارنة شهرية",
      "تنبيهات تجاوز الاستهلاك"
    ]
  },
  {
    title: "نظام تسجيل المصروفات (Petty Cash)",
    description: "تسجيل المصروفات مع المبلغ والسبب والقسم والمرفقات، وحساب الإجمالي وإعداد التقارير.",
    icon: "attach_money",
    tags: [
      "إجمالي المصروفات",
      "مرفقات",
      "تقارير مالية"
    ]
  },
  {
    title: "نظام تسجيل أسماء مستلمي بطاقات الزوار",
    description: "إدارة استلام بطاقات الزوار: اسم المستلم، رقم البطاقة، التاريخ، الجهة، وتوقيع/ملاحظة.",
    icon: "badge",
    tags: [
      "سجل تاريخي كامل",
      "توقيع أو ملاحظة",
      "بحث سريع"
    ]
  }
];

export const TABLE_DATA: TableItem[] = [
  {
    id: "1",
    item: "رخصة تجارية رقم 219-ب",
    department: "إدارة العقود",
    status: "قريب الانتهاء",
    statusColor: "bg-yellow-900/40 text-yellow-400 border-yellow-700/50",
    lastUpdate: "منذ يومين"
  },
  {
    id: "2",
    item: "زائر: شركة التوريد المتحدة",
    department: "الأمن والسلامة",
    status: "نشط",
    statusColor: "bg-green-900/40 text-green-400 border-green-700/50",
    lastUpdate: "منذ 3 ساعات"
  },
  {
    id: "3",
    item: "حجز قاعة (A) 11:30 - 10:00",
    department: "الإدارة التنفيذية",
    status: "مؤكد",
    statusColor: "bg-gray-700/40 text-gray-400 border-gray-600/50",
    lastUpdate: "الآن"
  }
];