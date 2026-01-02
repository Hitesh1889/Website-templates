
import React, { useState, useRef } from 'react';
import { Template, NicheType } from '../types';

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

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('template-cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const InternalNav = () => (
    <nav className="h-16 border-b border-slate-100 px-6 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-20">
      <div className="font-black text-lg tracking-tighter text-slate-900">{template.name.split(' ')[0]}</div>
      <div className="hidden md:flex gap-6 text-sm font-bold text-slate-600">
        <a href="#" onClick={(e) => {e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'});}} className="hover:text-indigo-600">Home</a>
        <a href="#features" className="hover:text-indigo-600">Features</a>
        <a href="#about" className="hover:text-indigo-600">About</a>
      </div>
      <button onClick={scrollToCTA} className="bg-slate-900 text-white px-5 py-2 rounded-lg text-xs font-bold hover:bg-indigo-600 transition-colors">
        Get Started
      </button>
    </nav>
  );

  // --- Niche Specific Full Renderers ---

  const renderCorporate = () => (
    <div className="flex flex-col">
      <InternalNav />
      <div className="bg-slate-900 text-white py-24 px-8 text-center border-b border-white/10">
        <div className="inline-block bg-indigo-500/20 text-indigo-300 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 animate-pulse">Enterprise Solution</div>
        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[1.1]">The future of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">digital commerce</span>.</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12 leading-relaxed">Join 500+ tech leaders who use {template.name} to accelerate their growth through intelligent automation and real-time data insights.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={scrollToCTA} className="bg-indigo-600 px-10 py-4 rounded-xl font-black hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20">Start Free Trial</button>
          <button className="bg-white/5 border border-white/10 px-10 py-4 rounded-xl font-black hover:bg-white/10 transition-all">Schedule Demo</button>
        </div>
      </div>
      
      <div className="py-20 bg-white px-8" id="features">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4">Engineered for Scale</h2>
            <p className="text-slate-500">Every component is optimized for speed, accessibility, and conversion.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'Global Infrastructure', icon: 'fa-server', color: 'bg-blue-100 text-blue-600' },
              { title: 'Advanced Security', icon: 'fa-shield-halved', color: 'bg-emerald-100 text-emerald-600' },
              { title: 'Smart Analytics', icon: 'fa-brain', color: 'bg-purple-100 text-purple-600' },
              { title: '24/7 Expert Support', icon: 'fa-headset', color: 'bg-orange-100 text-orange-600' }
            ].map((f, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center text-xl transition-transform group-hover:scale-110 ${f.color}`}>
                  <i className={`fa-solid ${f.icon}`}></i>
                </div>
                <div>
                  <h4 className="font-black text-xl mb-2">{f.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Built with the latest web standards to ensure your business stays ahead of the competition at all times.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderRealEstate = () => (
    <div className="flex flex-col">
      <InternalNav />
      <div className="relative h-[600px] overflow-hidden">
        <img src={template.imageUrl} className="w-full h-full object-cover animate-slow-zoom" alt="Hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex items-end p-12">
          <div className="max-w-3xl w-full">
            <span className="text-white/60 font-bold uppercase tracking-widest text-xs mb-4 block">Luxury Listings in California</span>
            <h1 className="text-white text-5xl md:text-7xl font-black mb-8 leading-tight">Your New <span className="italic text-indigo-400">Chapter</span> Starts Here.</h1>
            <div className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 max-w-2xl">
              <div className="flex-1 flex items-center px-4 py-2 border-r border-slate-100">
                <i className="fa-solid fa-location-dot text-indigo-600 mr-3"></i>
                <input type="text" placeholder="Enter neighborhood..." className="w-full focus:outline-none text-slate-900" />
              </div>
              <button onClick={scrollToCTA} className="bg-indigo-600 text-white px-10 py-4 rounded-xl font-black hover:bg-indigo-700 transition-all">Search Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 px-8" id="listings">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-2">Curated Collection</h2>
              <p className="text-slate-500">Discover the most exclusive properties in our portfolio.</p>
            </div>
            <button className="px-6 py-3 border-2 border-slate-900 rounded-xl font-black hover:bg-slate-900 hover:text-white transition-all">View Full Portfolio</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { price: '$4,250,000', loc: 'Bel Air Estates', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600' },
              { price: '$2,100,000', loc: 'Malibu Shores', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600' },
              { price: '$1,850,000', loc: 'Palo Alto Modern', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600' }
            ].map((prop, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl mb-4">
                  <img src={prop.img} className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full font-black text-slate-900 shadow-lg">{prop.price}</div>
                </div>
                <h4 className="font-black text-xl mb-1">{prop.loc}</h4>
                <p className="text-slate-500 text-sm">4 Beds • 5 Baths • 3,200 sqft</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderRestaurant = () => (
    <div className="flex flex-col bg-[#0c0c0c] text-white min-h-full">
      <div className="h-20 border-b border-white/5 px-8 flex items-center justify-between sticky top-0 bg-[#0c0c0c]/80 backdrop-blur-xl z-20">
        <div className="text-2xl font-serif italic tracking-wider">{template.name.split(' ')[0]}</div>
        <div className="hidden lg:flex gap-10 text-[10px] uppercase font-black tracking-[0.3em]">
          <a href="#" className="text-orange-500">The Kitchen</a>
          <a href="#" className="hover:text-orange-500">Menu</a>
          <a href="#" className="hover:text-orange-500">Our Story</a>
          <a href="#" className="hover:text-orange-500">Contact</a>
        </div>
        <button onClick={scrollToCTA} className="border border-orange-500 text-orange-500 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all">
          Reservations
        </button>
      </div>

      <div className="py-32 px-12 text-center relative overflow-hidden">
        <img src={template.imageUrl} className="absolute inset-0 w-full h-full object-cover opacity-30 scale-110" alt="Hero" />
        <div className="relative z-10">
          <div className="w-px h-24 bg-orange-500 mx-auto mb-10"></div>
          <h1 className="text-7xl md:text-9xl font-serif italic mb-8 leading-none tracking-tight">The Art of <br/> Dining.</h1>
          <p className="text-white/60 max-w-xl mx-auto text-xl font-light mb-16 italic">"A culinary journey that speaks to the soul through fire and seasonal alchemy."</p>
          <button onClick={scrollToCTA} className="bg-orange-600 text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-orange-700 transition-all shadow-2xl shadow-orange-600/30">
            View Tonight's Menu
          </button>
        </div>
      </div>

      <div className="py-32 bg-[#080808] px-12 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.4em] block text-center mb-4">Degustation</span>
          <h2 className="text-5xl font-serif text-center mb-24 italic">Seasonal Selections</h2>
          <div className="space-y-16">
            {[
              { n: 'Wild Mushroom Carpaccio', d: 'With fermented honey, pine nuts and shaved black truffle', p: '$28' },
              { n: 'Cured Atlantic Halibut', d: 'Kombu aged, served with sea buckthorn and radish', p: '$34' },
              { n: 'Dry Aged Duck Breast', p: '$48', d: 'Cherry wood smoked with heritage beets and jus' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row justify-between items-baseline group border-b border-white/5 pb-10">
                <div className="flex-1">
                  <h3 className="text-3xl font-serif italic mb-2 group-hover:text-orange-500 transition-colors">{item.n}</h3>
                  <p className="text-white/40 font-light">{item.d}</p>
                </div>
                <span className="text-orange-500 text-2xl font-serif italic mt-4 md:mt-0">{item.p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderPortfolio = () => (
    <div className="flex flex-col bg-white">
      <div className="h-20 px-12 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-md z-20">
        <div className="font-black text-2xl lowercase tracking-tighter text-slate-900">{template.name.split(' ')[0]}.</div>
        <div className="hidden sm:flex gap-12 font-bold text-xs uppercase tracking-widest">
          <a href="#" className="hover:line-through">Work</a>
          <a href="#" className="hover:line-through">About</a>
          <a href="#" className="hover:line-through">Contact</a>
        </div>
        <button onClick={scrollToCTA} className="w-10 h-10 rounded-full border-2 border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div className="px-12 py-32">
        <div className="max-w-4xl">
          <h1 className="text-7xl md:text-9xl font-black text-slate-900 leading-[0.8] tracking-tighter mb-12">Building <br/> Digital <br/> Dreams.</h1>
          <p className="text-slate-500 text-2xl md:text-3xl font-medium max-w-2xl leading-relaxed">We design digital products that define industries and inspire humans across the globe.</p>
        </div>
      </div>

      <div className="px-12 grid grid-cols-1 md:grid-cols-2 gap-12 pb-32">
        {[
          { t: 'The New Minimal', c: 'Brand Identity', i: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800' },
          { t: 'Audio Sync', c: 'UI/UX Design', i: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=800' },
          { t: 'Future Lab', c: 'Motion Design', i: 'https://images.unsplash.com/photo-1541462608141-ad4d05941485?auto=format&fit=crop&w=800' },
          { t: 'Aesthetic Flow', c: 'E-commerce', i: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800' }
        ].map((item, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[4/5] bg-slate-100 rounded-[2rem] overflow-hidden mb-6 relative">
              <img src={item.i} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
              <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h3 className="font-black text-3xl mb-1">{item.t}</h3>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">{item.c}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const getContent = () => {
    switch (template.niche) {
      case NicheType.BUSINESS: return renderCorporate();
      case NicheType.REAL_ESTATE: return renderRealEstate();
      case NicheType.RESTAURANT: return renderRestaurant();
      case NicheType.PORTFOLIO: return renderPortfolio();
      case NicheType.PHOTOGRAPHY: return renderPortfolio();
      case NicheType.ARCHITECTURE: return renderPortfolio();
      default: return renderCorporate();
    }
  };

  return (
    <div className="fixed inset-0 z-[60] bg-slate-950 flex flex-col">
      {/* Simulation Dashboard */}
      <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 shadow-sm z-50">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="text-slate-400 hover:text-slate-900 p-2 transition-all hover:rotate-90">
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
          <div className="h-6 w-px bg-slate-100 hidden sm:block"></div>
          <div className="hidden md:block">
            <h3 className="font-black text-slate-900 text-sm">{template.name}</h3>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Live Environment Simulation</p>
            </div>
          </div>
        </div>

        {/* Device Selection */}
        <div className="flex items-center bg-slate-50 p-1 rounded-2xl border border-slate-200">
          <button 
            onClick={() => setViewMode('desktop')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'desktop' ? 'bg-white shadow-xl text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
          >
            <i className="fa-solid fa-desktop"></i> <span className="hidden sm:inline">Desktop</span>
          </button>
          <button 
            onClick={() => setViewMode('tablet')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'tablet' ? 'bg-white shadow-xl text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
          >
            <i className="fa-solid fa-tablet"></i> <span className="hidden sm:inline">Tablet</span>
          </button>
          <button 
            onClick={() => setViewMode('mobile')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'mobile' ? 'bg-white shadow-xl text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
          >
            <i className="fa-solid fa-mobile"></i> <span className="hidden sm:inline">Mobile</span>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-black text-xs hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 uppercase tracking-widest">
            Buy Template
          </button>
        </div>
      </div>

      {/* Interactive Frame Canvas */}
      <div className="flex-1 bg-slate-900 p-4 sm:p-12 overflow-auto flex justify-center custom-scrollbar">
        <div className={`w-full ${getFrameWidth()} bg-white rounded-3xl shadow-[0_45px_100px_-15px_rgba(0,0,0,0.8)] transition-all duration-700 flex flex-col relative overflow-hidden h-fit mb-24`}>
          {/* Virtual Browser Bar */}
          <div className="bg-slate-50 px-6 py-4 flex items-center gap-4 border-b border-slate-200 shrink-0">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            </div>
            <div className="flex-1 bg-white border border-slate-200 rounded-xl text-[11px] font-medium py-2 px-4 text-slate-400 truncate flex items-center gap-3 shadow-inner">
              <i className="fa-solid fa-shield-halved text-green-500"></i>
              https://demo.nichenexus.site/templates/{template.id}/{template.name.toLowerCase().replace(/\s+/g, '-')}
              <i className="fa-solid fa-rotate-right ml-auto opacity-40"></i>
            </div>
          </div>

          {/* Template Content Hook */}
          <div className="flex-1">
            {getContent()}

            {/* Simulated Lead Gen Section (Final destination for Get Started) */}
            <div id="template-cta" className="py-32 px-12 bg-slate-50 border-t border-slate-100 text-center">
                <div className="max-w-3xl mx-auto">
                    <div className="inline-block bg-indigo-100 text-indigo-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Launch Your Site</div>
                    <h2 className="text-5xl font-black mb-6 text-slate-900">Make this template yours.</h2>
                    <p className="text-slate-500 mb-12 text-lg">Download {template.name} today and join 2,000+ creators building a better web with NicheNexus.</p>
                    
                    <div className="max-w-md mx-auto bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-indigo-100/50 border border-indigo-50">
                        <div className="space-y-4">
                            <div className="text-left">
                              <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest px-1">Your Full Name</label>
                              <input type="text" placeholder="Alex Rivers" className="w-full p-5 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-4 focus:ring-indigo-500/10 outline-none font-bold text-slate-900 transition-all" />
                            </div>
                            <div className="text-left">
                              <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest px-1">Email Address</label>
                              <input type="email" placeholder="alex@company.com" className="w-full p-5 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-4 focus:ring-indigo-500/10 outline-none font-bold text-slate-900 transition-all" />
                            </div>
                            <button className="w-full bg-indigo-600 text-white p-5 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 mt-4 active:scale-95">
                                Download for {template.price}
                            </button>
                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-6 flex items-center justify-center gap-2">
                              <i className="fa-solid fa-lock"></i> AES-256 Secure Checkout
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Frame Footer */}
            <footer className="py-16 px-12 bg-white border-t border-slate-100">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
                    <div className="font-black text-xl text-slate-900 tracking-tighter">
                      <span className="text-indigo-600">NN.</span> {template.name}
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <a href="#" className="hover:text-indigo-600 transition-colors">Documentation</a>
                        <a href="#" className="hover:text-indigo-600 transition-colors">Support Center</a>
                        <a href="#" className="hover:text-indigo-600 transition-colors">Community</a>
                        <a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400"><i className="fa-brands fa-twitter text-xs"></i></div>
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400"><i className="fa-brands fa-instagram text-xs"></i></div>
                    </div>
                </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
