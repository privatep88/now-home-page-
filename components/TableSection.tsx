import React from 'react';
import { TABLE_DATA } from '../constants';

const TableSection: React.FC = () => {
  return (
    <section className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-border-dark overflow-hidden shadow-lg mt-8">
      <div className="p-6 border-b border-gray-200 dark:border-border-dark flex justify-between items-center bg-gray-50 dark:bg-[#0F172A]">
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white">معاينة (نماذج جداول)</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">مثال بصري للجداول والإجراءات المطلوبة (إضافة/تعديل/حذف/تصدير).</p>
        </div>
        <button className="bg-primary hover:bg-primary_hover text-black font-bold py-2 px-6 rounded-full text-xs shadow-lg shadow-primary/20">
          فتح
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-right text-sm">
          <thead className="bg-gray-100 dark:bg-[#0F172A] text-gray-500 dark:text-gray-400 font-medium">
            <tr>
              <th className="px-6 py-4">البند</th>
              <th className="px-6 py-4">الجهة</th>
              <th className="px-6 py-4 text-center">الحالة</th>
              <th className="px-6 py-4 text-left">آخر تحديث</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-slate-800 text-gray-700 dark:text-gray-300">
            {TABLE_DATA.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
                <td className="px-6 py-4">{row.item}</td>
                <td className="px-6 py-4 text-gray-500">{row.department}</td>
                <td className="px-6 py-4 text-center">
                  <span className={`text-[10px] px-3 py-1 rounded-full border ${row.statusColor}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-left text-gray-500">{row.lastUpdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableSection;