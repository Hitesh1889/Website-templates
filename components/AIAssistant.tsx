
import React, { useState } from 'react';
import { getTemplateRecommendation } from '../services/gemini';
import { TEMPLATES } from '../constants';

const AIAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<any>(null);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setRecommendation(null);
    const result = await getTemplateRecommendation(input);
    setRecommendation(result);
    setLoading(false);
  };

  const recommendedTemplate = recommendation 
    ? TEMPLATES.find(t => t.id === recommendation.recommendedTemplateId) 
    : null;

  return (
    <section className="bg-indigo-900 py-16 px-4 rounded-3xl overflow-hidden relative">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-800/50 border border-indigo-700 px-4 py-2 rounded-full text-indigo-200 text-sm font-medium mb-6">
          <i className="fa-solid fa-wand-magic-sparkles"></i>
          <span>Powered by Gemini AI</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Not sure which template is right for you?</h2>
        <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
          Describe your business, your goals, and your target audience. Our AI consultant will match you with the perfect design in seconds.
        </p>

        <form onSubmit={handleConsult} className="flex flex-col md:flex-row gap-4 mb-10">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. I'm starting a high-end coffee shop in New York targeting young professionals..."
            className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-white text-indigo-900 px-8 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-indigo-900/30 border-t-indigo-900 rounded-full animate-spin"></div>
                Analyzing...
              </>
            ) : (
              'Get Advice'
            )}
          </button>
        </form>

        {recommendation && recommendedTemplate && (
          <div className="bg-white rounded-3xl p-8 text-left border border-indigo-200 shadow-2xl animate-fade-in">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <img 
                  src={recommendedTemplate.imageUrl} 
                  alt={recommendedTemplate.name} 
                  className="rounded-2xl shadow-lg border border-slate-100 w-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">AI Recommended</span>
                  <h3 className="text-2xl font-bold text-slate-900">{recommendedTemplate.name}</h3>
                </div>
                <p className="text-slate-600 mb-4 italic">"{recommendation.reasoning}"</p>
                <div className="bg-indigo-50 p-4 rounded-xl mb-6">
                  <h4 className="text-sm font-bold text-indigo-900 uppercase tracking-tight mb-1">Strategy Tip</h4>
                  <p className="text-indigo-700 text-sm">{recommendation.advice}</p>
                </div>
                <div className="flex gap-4">
                  <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all">
                    Choose This Template
                  </button>
                  <button className="text-slate-600 font-bold px-6 py-3 hover:text-indigo-600 transition-all">
                    View Other Options
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIAssistant;
