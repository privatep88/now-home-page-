import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SystemCard from './components/SystemCard';
import TableSection from './components/TableSection';
import Footer from './components/Footer';
import { SYSTEM_CARDS_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8">
        
        <HeroSection />

        {/* Systems Grid Header */}
        <section className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 border-b border-gray-800 pb-4">
          <div>
            <p className="text-primary text-xs font-bold mb-1">الأنظمة الأساسية</p>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">اختر النظام وابدأ العمل</h2>
            <p className="text-gray-500 text-sm mt-2">بطاقات واضحة، إجراءات مباشرة، وتجربة متسقة تتناسب مع متطلبات العمل الحالية</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-xs transition border border-gray-700">إضافة</button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-xs transition border border-gray-700">تعديل</button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-xs transition border border-gray-700">حذف</button>
            <button className="bg-primary hover:bg-primary_hover text-black font-bold px-4 py-2 rounded-lg text-xs transition">تصدير Excel</button>
          </div>
        </section>

        {/* Systems Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SYSTEM_CARDS_DATA.map((card, index) => (
            <SystemCard
              key={index}
              {...card}
            />
          ))}
        </section>

        <TableSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;