
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Templates from './pages/Templates';
import Contact from './pages/Contact';
import PreviewModal from './components/PreviewModal';
import { TEMPLATES } from './constants';
import { Template } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [previewingTemplate, setPreviewingTemplate] = useState<Template | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); 

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: string) => {
    window.location.hash = page;
  };

  const openPreview = (id: string) => {
    const template = TEMPLATES.find(t => t.id === id);
    if (template) setPreviewingTemplate(template);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigate} onPreview={openPreview} />;
      case 'templates':
        return <Templates onPreview={openPreview} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={navigate} onPreview={openPreview} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900 ${previewingTemplate ? 'overflow-hidden h-screen' : ''}`}>
      <Navbar onNavigate={navigate} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      
      {previewingTemplate && (
        <PreviewModal 
          template={previewingTemplate} 
          onClose={() => setPreviewingTemplate(null)} 
        />
      )}
    </div>
  );
};

export default App;
