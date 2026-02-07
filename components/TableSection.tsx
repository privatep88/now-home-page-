import React, { useState } from 'react';
import { TableItem } from '../types';

interface TableSectionProps {
  data: TableItem[];
}

const TableSection: React.FC<TableSectionProps> = ({ data }) => {
  const [activeFilter, setActiveFilter] = useState('الكل');

  const filters = ['الكل', 'قيد الاعتماد', 'مكتمل', 'مؤرشف'];

  // Logic to filter data based on the selected tab
  const filteredData = activeFilter === 'الكل' 
    ? data 
    : data.filter(item => {
        if (activeFilter === 'مكتمل') {
             // Show both 'Completed' and 'Added' items under 'Completed' tab
             return item.status === 'مكتمل' || item.status === 'تمت الإضافة';
        }
        return item.status === activeFilter;
    });

  return (
    <section className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-border-dark overflow-hidden shadow-lg mt-8 mb-8">
      {/* Header & Filters */}
      <div className="p-6 border-b border-gray-200 dark:border-border-dark flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gray-50 dark:bg-[#0F172A]">
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white">آخر الإضافات والسجلات الحديثة</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">سجل حي يوضح أحدث العمليات والإضافات التي تمت على النظام.</p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex bg-white dark:bg-slate-800 rounded-lg p-1 border border-gray-200 dark:border-slate-700">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-primary text-black shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-right text-sm">
          <thead className="bg-gray-100 dark:bg-[#0F172A] text-gray-500 dark:text-gray-400 font-medium border-b border-gray-200 dark:border-slate-800">
            <tr>
              <th className="px-6 py-4">العملية / السجل</th>
              <th className="px-6 py-4">القسم / الجهة</th>
              <th className="px-6 py-4 text-center">حالة العملية</th>
              <th className="px-6 py-4 text-left">وقت الإضافة</th>
              <th className="px-6 py-4 text-center w-24">إجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-slate-800 text-gray-700 dark:text-gray-300">
            {filteredData.length > 0 ? (
              filteredData.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition group cursor-default">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                         <span className="material-icons-outlined text-gray-500 text-sm">description</span>
                      </div>
                      <div className="flex flex-col">
                        <span>{row.item}</span>
                        <span className="text-[10px] text-gray-400 font-mono">{row.id}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{row.department}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`text-[10px] px-3 py-1 rounded-full border ${row.statusColor}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-left text-gray-500 dark:text-gray-400 font-mono text-xs">{row.lastUpdate}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-gray-500 dark:text-gray-400 hover:text-primary transition" title="عرض التفاصيل">
                        <span className="material-icons-outlined text-lg">visibility</span>
                      </button>
                      <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-gray-500 dark:text-gray-400 hover:text-blue-400 transition" title="تحميل المرفقات">
                        <span className="material-icons-outlined text-lg">file_download</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-icons-outlined text-4xl opacity-20">search_off</span>
                    <p>لا توجد سجلات مطابقة لهذا التصنيف</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer & Pagination */}
      <div className="p-4 bg-gray-50 dark:bg-[#0F172A] border-t border-gray-200 dark:border-slate-800 flex justify-between items-center text-xs">
        <span className="text-gray-500 dark:text-gray-400">
          عرض <span className="font-bold text-gray-900 dark:text-white">{filteredData.length}</span> من أصل <span className="font-bold text-gray-900 dark:text-white">24</span> سجل
        </span>
        
        <div className="flex items-center gap-2">
           <button className="px-3 py-1 rounded bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-500 disabled:opacity-50 hover:border-primary transition" disabled>
             السابق
           </button>
           <div className="flex gap-1">
             <button className="w-6 h-6 rounded bg-primary text-black font-bold flex items-center justify-center">1</button>
             <button className="w-6 h-6 rounded bg-transparent hover:bg-slate-200 dark:hover:bg-slate-800 text-gray-500 flex items-center justify-center transition">2</button>
             <button className="w-6 h-6 rounded bg-transparent hover:bg-slate-200 dark:hover:bg-slate-800 text-gray-500 flex items-center justify-center transition">3</button>
           </div>
           <button className="px-3 py-1 rounded bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-500 hover:border-primary transition">
             التالي
           </button>
        </div>
      </div>
    </section>
  );
};

export default TableSection;