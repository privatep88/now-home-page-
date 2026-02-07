import React from 'react';
import { SystemCardProps } from '../types';

const SystemCard: React.FC<SystemCardProps> = ({ title, description, icon, tags, statusLabels, link }) => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 border border-gray-200 dark:border-border-dark hover:border-primary/50 transition duration-300 shadow-md flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-primary shrink-0">
            <span className="material-icons-outlined">{icon}</span>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-snug">{title}</h3>
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

      <ul className="space-y-2 mt-2 mb-6 text-xs text-gray-400 list-disc pr-4 marker:text-primary">
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>

      <div className="mt-auto flex justify-between items-center">
        {link ? (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-xs transition border border-gray-700 group"
          >
            <span>الدخول إلى النظام</span>
            <span className="material-icons-outlined text-sm text-primary group-hover:translate-x-1 transition-transform rtl:rotate-180">login</span>
          </a>
        ) : (
          <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-xs transition border border-gray-700 group">
            <span>الدخول إلى النظام</span>
            <span className="material-icons-outlined text-sm text-primary group-hover:translate-x-1 transition-transform rtl:rotate-180">login</span>
          </button>
        )}
        
        <div className="flex items-center gap-1 text-gray-500 text-xs cursor-pointer hover:text-white">
          <span className="material-icons-outlined text-sm">description</span>
          <span>الدخول الى واجهة النظام</span>
        </div>
      </div>
    </div>
  );
};

export default SystemCard;