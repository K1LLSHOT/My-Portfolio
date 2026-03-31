import React from 'react';
import { Code2, ExternalLink } from 'lucide-react';

const App = () => (
  <div className="min-h-screen bg-stone-50 text-stone-900 p-8 font-serif selection:bg-rose-200">
    <div className="max-w-4xl mx-auto">
      <header className="flex justify-between items-center py-10 border-b-2 border-stone-900">
        <h1 className="text-3xl font-black uppercase tracking-widest">The Acid</h1>
        <p className="text-sm font-sans tracking-widest uppercase text-stone-500">Portfolio 2026</p>
      </header>

      <div className="mt-16 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Orchestrating <span className="italic text-rose-600">Chaos</span> into Automations.
          </h2>
          <p className="text-lg text-stone-600 font-sans leading-relaxed mb-8">
            I craft cinematic YouTube engines and autonomous Web3 trading systems. When I'm not finding alpha, I'm testing protocols.
          </p>
          <a href="#work" className="inline-flex bg-stone-900 text-stone-50 font-sans px-8 py-3 rounded-full hover:bg-stone-800 transition-colors items-center gap-2">
            View Case Studies <ExternalLink size={16}/>
          </a>
        </div>
        <div className="w-64 h-64 bg-stone-200 rounded-full overflow-hidden border-4 border-stone-900 shadow-2xl relative flex items-center justify-center flex-shrink-0">
         <img src="/pfp.jpg" alt="The Acid Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      <div id="work" className="mt-24">
        <h3 className="text-2xl font-bold mb-8 border-b border-stone-200 pb-4">Selected Works</h3>
        <div className="space-y-6 font-sans">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white border border-stone-200 rounded-xl hover:shadow-lg transition-shadow group cursor-pointer">
            <div>
              <h4 className="text-xl font-bold text-stone-900 group-hover:text-rose-600 transition-colors">The Missing Chapter</h4>
              <p className="text-sm text-stone-500 mt-1">A fully autonomous historical documentary channel driven by n8n & Gemini 3.1 Pro.</p>
            </div>
            <span className="mt-4 md:mt-0 px-4 py-1.5 bg-stone-100 rounded-full text-xs font-bold text-stone-600 tracking-wider">
              Creator & Automation Architect
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white border border-stone-200 rounded-xl hover:shadow-lg transition-shadow group cursor-pointer">
            <div>
              <h4 className="text-xl font-bold text-stone-900 group-hover:text-rose-600 transition-colors">GridZERO Protocol</h4>
              <p className="text-sm text-stone-500 mt-1">Manual stress testing and edge-case execution for Base L2 on-chain gambling dApps.</p>
            </div>
            <span className="mt-4 md:mt-0 px-4 py-1.5 bg-stone-100 rounded-full text-xs font-bold text-stone-600 tracking-wider">
              Web3 QA Tester
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white border border-stone-200 rounded-xl hover:shadow-lg transition-shadow group cursor-pointer">
            <div>
              <h4 className="text-xl font-bold text-stone-900 group-hover:text-rose-600 transition-colors">Automated Viral Tracker</h4>
              <p className="text-sm text-stone-500 mt-1">Custom Python daemon scraping competitor metrics via yt-dlp to identify daily high-retention hooks.</p>
            </div>
            <span className="mt-4 md:mt-0 px-4 py-1.5 bg-stone-100 rounded-full text-xs font-bold text-stone-600 tracking-wider">
              Data Engineer
            </span>
          </div>

        </div>
      </div>
      
      <footer className="mt-24 pt-8 border-t border-stone-200 flex justify-between items-center text-sm font-sans text-stone-500">
        <p>© 2026 The Acid</p>
        <div className="flex gap-4">
          <a href="https://twitter.com/theacidxyz" target="_blank" rel="noreferrer" className="hover:text-stone-900 transition-colors">Twitter (X)</a>
          <a href="mailto:morecryptopleasee@gmail.com" className="hover:text-stone-900 transition-colors">Email</a>
        </div>
      </footer>
    </div>
  </div>
);

export default App;
