import React, { useRef } from 'react';
import { SystemCardProps } from '../types';

const SystemCard: React.FC<SystemCardProps> = ({ title, description, icon, tags, statusLabels, link }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Subtle Tilt effect calculations
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Divisor 25 controls the intensity of the tilt (higher = less tilt)
    const rotateX = ((y - centerY) / 25).toFixed(2); 
    const rotateY = (-(x - centerX) / 25).toFixed(2);

    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    // Reset rotation
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-surface-light dark:bg-surface-dark rounded-2xl p-6 border border-gray-200 dark:border-border-dark hover:border-primary dark:hover:border-primary transition duration-300 shadow-md flex flex-col h-full [perspective:1000px] overflow-hidden"
      style={{
        '--rotate-x': '0deg',
        '--rotate-y': '0deg',
      } as React.CSSProperties}
    >
      {/* Islamic Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none transition-opacity group-hover:opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%239CA3AF' stroke-width='0.5'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content Container with 3D Transform */}
      <div 
         className="relative z-10 flex flex-col h-full transition-transform duration-100 ease-out [transform-style:preserve-3d]"
         style={{
           transform: 'rotateX(var(--rotate-x)) rotateY(var(--rotate-y))'
         }}
      >
          <div className="flex justify-between items-start mb-4 [transform:translateZ(10px)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/10">
                <span className="material-icons-outlined">{icon}</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-snug group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-[10px] text-gray-400 mt-1">{description}</p>
              </div>
            </div>
            
            {statusLabels && (
              <div className="flex flex-col gap-1 items-end shrink-0 ml-2">
                {statusLabels.map((status, index) => (
                  <span 
                    key={index} 
                    className={`text-[10px] px-2 py-0.5 rounded border ${status.colorClass}`}
                  >
                    {status.text}
                  </span>
                ))}
              </div>
            )}
          </div>

          <ul className="space-y-2 mt-2 mb-6 text-xs text-gray-400 list-disc pr-4 marker:text-primary [transform:translateZ(5px)]">
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>

          <div className="mt-auto flex justify-between items-center [transform:translateZ(15px)]">
            {link ? (
              <a 
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-primary hover:text-black text-white px-4 py-2 rounded-lg text-xs transition-all duration-300 border border-gray-700 hover:border-primary shadow-lg transform active:scale-95"
              >
                <span>الدخول إلى النظام</span>
                <span className="material-icons-outlined text-sm rtl:rotate-180">login</span>
              </a>
            ) : (
              <button className="flex items-center gap-2 bg-gray-800 hover:bg-primary hover:text-black text-white px-4 py-2 rounded-lg text-xs transition-all duration-300 border border-gray-700 hover:border-primary shadow-lg transform active:scale-95">
                <span>الدخول إلى النظام</span>
                <span className="material-icons-outlined text-sm rtl:rotate-180">login</span>
              </button>
            )}
            
            <div className="flex items-center gap-1 text-gray-500 text-xs cursor-pointer hover:text-white transition-colors">
              <span className="material-icons-outlined text-sm">description</span>
              <span>الدخول الى واجهة النظام</span>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SystemCard;