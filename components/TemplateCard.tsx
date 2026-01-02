
import React from 'react';
import { Template } from '../types';

interface TemplateCardProps {
  template: Template;
  onPreview: (id: string) => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, onPreview }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={template.imageUrl} 
          alt={template.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
          <button 
            onClick={() => onPreview(template.id)}
            className="bg-white text-slate-900 px-6 py-2 rounded-full font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform"
          >
            Live Preview
          </button>
        </div>
        <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          {template.niche}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-900">{template.name}</h3>
          <span className="text-lg font-bold text-indigo-600">{template.price}</span>
        </div>
        <p className="text-slate-500 text-sm mb-4 line-clamp-2">{template.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {template.features.slice(0, 2).map((feature, idx) => (
            <span key={idx} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-[10px] font-medium uppercase tracking-tighter">
              {feature}
            </span>
          ))}
        </div>
        
        <button className="w-full py-3 bg-slate-50 text-slate-900 font-semibold rounded-xl border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
          Get Template
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
