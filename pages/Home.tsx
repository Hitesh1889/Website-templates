
import React from 'react';
import AIAssistant from '../components/AIAssistant';
import TemplateCard from '../components/TemplateCard';
import { TEMPLATES } from '../constants';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const featuredTemplates = TEMPLATES.slice(0, 3);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full text-indigo-600 text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
              New templates added every week
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-tight">
              Launch your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">online presence</span> in minutes.
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
              Premium, high-performance website templates designed for conversion. Choose from 50+ niche-specific layouts or get a custom site built by our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => onNavigate('templates')}
                className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100"
              >
                Browse All Templates
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all"
              >
                Hire Us for Custom Work
              </button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
              <i className="fa-brands fa-shopify text-3xl"></i>
              <i className="fa-brands fa-wordpress text-3xl"></i>
              <i className="fa-brands fa-react text-3xl"></i>
              <i className="fa-brands fa-figma text-3xl"></i>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-3xl shadow-2xl overflow-hidden border-8 border-white">
              <img 
                src="https://picsum.photos/seed/hero/1200/900" 
                alt="Template Showcase" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-purple-100 rounded-full -z-10 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full -z-10 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Featured Templates</h2>
            <p className="text-slate-500">Hand-picked designs for your next big project</p>
          </div>
          <button 
            onClick={() => onNavigate('templates')}
            className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
          >
            View All <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTemplates.map(template => (
            <TemplateCard key={template.id} template={template} onPreview={() => {}} />
          ))}
        </div>
      </section>

      {/* AI Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <AIAssistant />
      </section>

      {/* Stats/Trust */}
      <section className="bg-slate-900 py-24 rounded-[3rem] text-white overflow-hidden relative mx-4 sm:mx-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-16">Trusted by 2,000+ businesses worldwide</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full">
            <div>
              <div className="text-5xl font-extrabold text-indigo-400 mb-2">50+</div>
              <div className="text-slate-400 font-medium">Industry Niches</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-indigo-400 mb-2">15k+</div>
              <div className="text-slate-400 font-medium">Global Users</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-indigo-400 mb-2">4.9/5</div>
              <div className="text-slate-400 font-medium">Customer Rating</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-indigo-400 mb-2">24h</div>
              <div className="text-slate-400 font-medium">Expert Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
