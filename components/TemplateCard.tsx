
import React from 'react';
import { Template } from '../types';

interface TemplateCardProps {
  template: Template;
  onPreview: (id: string) => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, onPreview }) => {
  const handleGetTemplate = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.hash = 'contact';
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-indigo-400 hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={template.imageUrl} 
          alt={template.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-[2px]">
          <button 
            onClick={() => onPreview(template.id)}
            className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold shadow-xl transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 hover:bg-indigo-50 active:scale-95"
          >
            Live Preview
          </button>
        </div>
        <div className="absolute top-4 left-4 flex gap-2">
          <div className="bg-indigo-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
            {template.niche}
          </div>
        </div>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">{template.name}</h3>
          <span className="text-lg font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg">{template.price}</span>
        </div>
        <p className="text-slate-500 text-sm md:text-base mb-6 line-clamp-3 leading-relaxed">{template.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {template.features.map((feature, idx) => (
            <span key={idx} className="bg-slate-50 text-slate-500 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-tight border border-slate-100">
              <i className="fa-solid fa-check mr-1.5 text-indigo-400"></i>
              {feature}
            </span>
          ))}
        </div>
        
        <button 
          onClick={handleGetTemplate}
          className="w-full py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-indigo-600 transition-all duration-300 shadow-lg active:scale-[0.98]"
        >
          Get Template
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
