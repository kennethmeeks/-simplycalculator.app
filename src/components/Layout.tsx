import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Calculator, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight
} from 'lucide-react';
import { CATEGORIES } from '../constants/categories';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [expandedCategories, setExpandedCategories] = React.useState<Record<string, boolean>>({
    'finance': true,
    'health': true
  });
  const location = useLocation();

  const toggleCategory = (slug: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [slug]: !prev[slug]
    }));
  };

  const popularCalculators = [
    { name: 'Mortgage Calculator', path: '/mortgage' },
    { name: 'BMI Calculator', path: '/bmi' },
    { name: 'Compound Interest', path: '/compound-interest' },
    { name: 'Salary Calculator', path: '/salary' },
    { name: 'Age Calculator', path: '/age' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f2f2f2]">
      {/* Header */}
      <header className="bg-white border-b border-[#ccc]">
        <div className="max-w-[1000px] mx-auto px-4 h-16 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-[#0066cc] font-bold text-2xl">
            <Calculator className="w-8 h-8" />
            <span>simplycalculator.app</span>
          </Link>

          <div className="hidden md:flex gap-6 text-sm">
            <Link to="/" className="text-[#0066cc] font-bold hover:underline">Home</Link>
            <Link to="/about" className="text-[#0066cc] font-bold hover:underline">About</Link>
            <Link to="/contact" className="text-[#0066cc] font-bold hover:underline">Contact</Link>
          </div>

          <button
            className="md:hidden p-2 text-[#666]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#ccc] px-4 py-6 flex flex-col gap-6 overflow-y-auto max-h-[70vh]">
          {CATEGORIES.map((cat) => (
            <div key={cat.slug} className="space-y-2">
              <Link
                to={`/${cat.slug}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-[#333] font-bold text-sm uppercase tracking-wider block border-b border-[#eee] pb-1"
              >
                {cat.title}
              </Link>
              <div className="flex flex-col gap-2 pl-2">
                {cat.items.slice(0, 4).map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-[#0066cc] text-sm hover:underline"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Main Content Area */}
      <div className="max-w-[1100px] mx-auto w-full flex flex-col md:flex-row gap-8 px-4 py-8">
        {/* Sidebar */}
        <aside className="hidden md:block w-72 shrink-0">
          <div className="space-y-6">
            <div className="bg-white border border-[#ccc] p-5 shadow-sm">
                <h3 className="font-bold text-sm text-[#333] uppercase tracking-widest border-b border-[#ccc] pb-2 mb-4">Quick Links</h3>
                <nav className="flex flex-col gap-2">
                  {popularCalculators.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`text-[13px] text-[#0066cc] hover:underline ${
                        location.pathname === item.path ? 'font-bold' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
            </div>

            {CATEGORIES.map((cat) => {
              const transitionClass = "transition-all duration-300 ease-in-out";
              const isOpen = expandedCategories[cat.slug];
              
              return (
                <div key={cat.slug} className="bg-white border border-[#ccc] shadow-sm overflow-hidden">
                  <button 
                    onClick={() => toggleCategory(cat.slug)}
                    className="w-full flex items-center justify-between p-4 bg-[#fcfcfc] hover:bg-[#f5f5f5] text-left border-b border-[#eee]"
                  >
                    <span className="font-bold text-[13px] text-[#333] uppercase tracking-wide">{cat.title}</span>
                    {isOpen ? <ChevronDown className="w-4 h-4 text-[#999]" /> : <ChevronRight className="w-4 h-4 text-[#999]" />}
                  </button>
                  <div className={`${transitionClass} ${isOpen ? 'max-h-[500px] opacity-100 p-4' : 'max-h-0 opacity-0'} space-y-2 overflow-hidden`}>
                    {cat.items.slice(0, 6).map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block text-[13px] text-[#0066cc] hover:underline ${
                          location.pathname === item.path ? 'font-bold' : ''
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link 
                      to={`/${cat.slug}`}
                      className="block pt-2 text-[11px] font-bold text-[#999] hover:text-[#0066cc] uppercase tracking-tighter"
                    >
                      Explore All {cat.title} →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0">
          <div className="bg-white border border-[#ccc] p-8 shadow-sm relative">
            <div className="absolute top-4 right-8">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">
                Educational Tool • Not Financial Advice
              </span>
            </div>
            {children}
          </div>
        </main>
      </div>

      <footer className="bg-[#333] text-white py-8 mt-auto">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Calculator className="w-6 h-6" />
              <span>simplycalculator.app</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/about" className="hover:underline">About Us</Link>
              <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
              <Link to="/contact" className="hover:underline">Contact Us</Link>
              <Link to="/sitemap" className="hover:underline">Sitemap</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#444] text-center space-y-2">
            <p className="text-[#999] text-xs">
              © 2026 simplycalculator.app. All rights reserved. Providing free online calculators for everyone.
            </p>
            <p className="text-[#777] text-[10px] leading-relaxed max-w-2xl mx-auto">
              <strong>Advertiser Disclosure:</strong> simplycalculator.app is an independent, advertising-supported comparison service. We may receive compensation from the companies whose products appear on this site.
            </p>
            <p className="text-[#777] text-[10px] leading-relaxed max-w-2xl mx-auto">
              <strong>Disclaimer:</strong> The calculations provided are for illustrative purposes only and do not constitute financial, investment, or legal advice. simplycalculator.app is not a financial institution. We recommend consulting with a qualified professional before making any financial decisions. Member FDIC status applies only to products offered by our banking partners.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
