
import React, { useState } from 'react';
import { Template } from '../types';

interface PreviewModalProps {
  template: Template;
  onClose: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ template, onClose }) => {
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const getFrameWidth = () => {
    switch (viewMode) {
      case 'mobile': return 'max-w-[375px]';
      case 'tablet': return 'max-w-[768px]';
      default: return 'max-w-full';
    }
  };

  return (
    <div className="fixed inset-0 z-[60] bg-slate-900 flex flex-col">
      {/* Top Bar */}
      <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="text-slate-500 hover:text-slate-900 p-2">
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
          <div className="h-6 w-px bg-slate-200"></div>
          <div>
            <h3 className="font-bold text-slate-900">{template.name}</h3>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{template.niche} Preview</p>
          </div>
        </div>

        {/* View Switchers */}
        <div className="hidden md:flex items-center bg-slate-100 p-1 rounded-xl">
          <button 
            onClick={() => setViewMode('desktop')}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${viewMode === 'desktop' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <i className="fa-solid fa-desktop mr-2"></i> Desktop
          </button>
          <button 
            onClick={() => setViewMode('tablet')}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${viewMode === 'tablet' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <i className="fa-solid fa-tablet-screen-button mr-2"></i> Tablet
          </button>
          <button 
            onClick={() => setViewMode('mobile')}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${viewMode === 'mobile' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <i className="fa-solid fa-mobile-screen-button mr-2"></i> Mobile
          </button>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-indigo-600 font-bold hidden sm:inline">{template.price}</span>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-bold hover:bg-indigo-700 transition-all">
            Buy Now
          </button>
        </div>
      </div>

      {/* Frame Area */}
      <div className="flex-1 bg-slate-800 p-4 md:p-8 overflow-auto flex justify-center">
        <div className={`w-full ${getFrameWidth()} bg-white rounded-t-2xl shadow-2xl transition-all duration-500 flex flex-col relative overflow-hidden`}>
          {/* Simulated Browser Bar */}
          <div className="bg-slate-100 px-4 py-2 flex items-center gap-3 border-b border-slate-200">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
            </div>
            <div className="flex-1 bg-white border border-slate-200 rounded-md text-[10px] py-1 px-3 text-slate-400 truncate">
              https://{template.name.toLowerCase().replace(/\s+/g, '-')}.nichenexus.demo
            </div>
          </div>

          {/* Content Scroll Area */}
          <div className="flex-1 overflow-y-auto bg-white custom-scrollbar">
            {/* Simulated Hero Section */}
            <div className="relative h-96">
              <img src={template.imageUrl} className="w-full h-full object-cover" alt="Hero" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8 text-center">
                <div>
                  <h1 className="text-white text-4xl font-bold mb-4">{template.name}</h1>
                  <p className="text-white/80 max-w-lg mx-auto text-lg mb-8">{template.description}</p>
                  <div className="flex gap-4 justify-center">
                    <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold">Get Started</button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold">Learn More</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Placeholder */}
            <div className="p-12">
              <h2 className="text-2xl font-bold mb-8 text-center">Premium Features Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {template.features.map((f, i) => (
                  <div key={i} className="p-6 border border-slate-100 rounded-2xl bg-slate-50 text-center">
                    <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`fa-solid ${['fa-bolt', 'fa-shield', 'fa-mobile', 'fa-palette', 'fa-rocket'][i % 5]}`}></i>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{f}</h3>
                    <p className="text-sm text-slate-500">Fully customizable components optimized for high performance and conversions.</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Section */}
            <div className="bg-slate-900 text-white py-16 px-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Start Your {template.niche} Journey</h2>
              <p className="text-slate-400 mb-8">Ready to dominate your industry with a world-class website?</p>
              <button className="bg-indigo-600 px-8 py-4 rounded-full font-bold">Connect With Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
