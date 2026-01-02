
import React, { useState, useMemo } from 'react';
import TemplateCard from '../components/TemplateCard';
import { TEMPLATES } from '../constants';
import { NicheType } from '../types';

interface TemplatesProps {
  onPreview: (id: string) => void;
}

const Templates: React.FC<TemplatesProps> = ({ onPreview }) => {
  const [activeNiche, setActiveNiche] = useState<string>(NicheType.ALL);
  const [searchQuery, setSearchQuery] = useState('');

  const niches = Object.values(NicheType);

  const filteredTemplates = useMemo(() => {
    return TEMPLATES.filter(template => {
      const matchesNiche = activeNiche === NicheType.ALL || template.niche === activeNiche;
      const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           template.niche.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesNiche && matchesSearch;
    });
  }, [activeNiche, searchQuery]);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Template Library</h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Choose from our professionally curated collection of high-conversion templates across a dozen specialized industries.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col gap-8 mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {niches.map(niche => (
              <button
                key={niche}
                onClick={() => setActiveNiche(niche)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                  activeNiche === niche 
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-100' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'
                }`}
              >
                {niche}
              </button>
            ))}
          </div>
          
          <div className="relative w-full max-w-xl mx-auto">
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input
              type="text"
              placeholder="Search by name, niche, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-2xl pl-11 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Grid */}
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredTemplates.map(template => (
              <TemplateCard key={template.id} template={template} onPreview={onPreview} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-slate-300">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No templates found</h3>
            <p className="text-slate-500">Try adjusting your filters or search terms.</p>
            <button 
              onClick={() => {setActiveNiche(NicheType.ALL); setSearchQuery('');}}
              className="mt-6 text-indigo-600 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Custom Solution Callout */}
        <div className="mt-24 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Need something truly unique?</h2>
            <p className="text-slate-600 text-lg">
              Our award-winning design team can create a custom, high-end website tailored specifically to your brand identity.
            </p>
          </div>
          <button className="whitespace-nowrap bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
            Get a Custom Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Templates;
