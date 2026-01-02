
import React from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-xl font-bold">
              N
            </div>
            <span className="text-xl font-bold text-slate-900">NicheNexus</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('templates')}
              className={`text-sm font-medium transition-colors ${currentPage === 'templates' ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}
            >
              Templates
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className={`text-sm font-medium transition-colors ${currentPage === 'contact' ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}
            >
              Contact Us
            </button>
            <button 
              onClick={() => onNavigate('templates')}
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
            >
              Browse Designs
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <i className="fa-solid fa-bars text-xl text-slate-600"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
