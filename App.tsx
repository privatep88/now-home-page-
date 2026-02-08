import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SystemCard from './components/SystemCard';
import TableSection from './components/TableSection';
import Footer from './components/Footer';
import NewsTicker from './components/NewsTicker';
import LoginPage from './components/LoginPage'; 
import { SYSTEM_CARDS_DATA, TABLE_DATA } from './constants';

// Social Media Icons
const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h-.165zm-1.08 1.833h.12c2.404 0 2.688.01 3.637.054.877.04 1.354.187 1.671.31.421.163.72.358 1.003.642.284.283.479.582.642 1.003.123.317.27.794.31 1.671.043.95.053 1.234.053 3.637v.12c0 2.404-.01 2.688-.054 3.637-.04.877-.187 1.354-.31 1.671-.163.421-.358.72-.642 1.003-.283.284-.582.479-1.003.642-.317.123.794-.27 1.671-.31.95-.043 1.234-.053 3.637-.053zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.833a3.302 3.302 0 100 6.604 3.302 3.302 0 000-6.604zm5.35-3.26a1.22 1.22 0 110 2.44 1.22 1.22 0 010-2.44z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const App: React.FC = () => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
  // Dashboard State
  const [searchQuery, setSearchQuery] = useState('');
  const socialButtonClass = "bg-gray-50 dark:bg-[#0F172A] border border-gray-200 dark:border-slate-700 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:border-primary dark:hover:border-primary p-3 rounded-xl transition duration-300 hover:scale-105 shadow-sm";

  // Check localStorage for persisted session (Optional, but good UX)
  useEffect(() => {
    const session = localStorage.getItem('isLoggedIn');
    if (session === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isLoggedIn');
  };

  // Filter Systems
  const filteredSystems = useMemo(() => {
    const lowerQuery = searchQuery.toLowerCase();
    return SYSTEM_CARDS_DATA.filter(card => 
      card.title.toLowerCase().includes(lowerQuery) ||
      card.description.toLowerCase().includes(lowerQuery) ||
      card.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  }, [searchQuery]);

  // If not authenticated, show Login Page
  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // If authenticated, show Dashboard
  return (
    <div className="flex flex-col min-h-screen">
      <Header onLogout={handleLogout} />
      
      <main className="flex-grow p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8">
        
        <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {/* News Ticker */}
        <NewsTicker />

        {/* Systems Grid Header with Social Media Links */}
        <section className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 border-b border-gray-800 pb-4">
          <div>
            <p className="text-primary text-xs font-bold mb-1">الأنظمة الأساسية</p>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">اختر النظام وابدأ العمل</h2>
            <p className="text-gray-500 text-sm mt-2">بطاقات واضحة، إجراءات مباشرة، وتجربة منسقة تتناسب مع متطلبات العمل</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a 
              href="https://www.facebook.com/UAESaaed" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={socialButtonClass}
              title="Facebook"
            >
              <FacebookIcon />
            </a>
            <a 
              href="https://twitter.com/UAESaaed" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={socialButtonClass}
              title="X (Twitter)"
            >
               <TwitterIcon />
            </a>
            <a 
              href="https://instagram.com/uaesaaed/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={socialButtonClass}
              title="Instagram"
            >
              <InstagramIcon />
            </a>
             <a 
              href="https://www.linkedin.com/company/saaed-for-traffic-systems/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={socialButtonClass}
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </section>

        {/* Systems Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {filteredSystems.length > 0 ? (
            filteredSystems.map((card, index) => (
              <SystemCard
                key={index}
                {...card}
              />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-500 bg-surface-light dark:bg-surface-dark rounded-xl border border-dashed border-gray-700">
              <p>لا توجد أنظمة تطابق بحثك "{searchQuery}"</p>
            </div>
          )}
        </section>

        {/* Table Section - Moved Below Systems Grid */}
        <TableSection data={TABLE_DATA} />

      </main>

      <Footer />
    </div>
  );
};

export default App;