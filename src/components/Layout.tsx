import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Calculator, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  Search,
  Star
} from 'lucide-react';
import { CATEGORIES } from '../constants/categories';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [expandedCategories, setExpandedCategories] = React.useState<Record<string, boolean>>({
    'finance': true,
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

  const filteredCategories = React.useMemo(() => {
    if (!searchTerm) return CATEGORIES;
    return CATEGORIES.map(cat => ({
      ...cat,
      items: cat.items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(cat => cat.items.length > 0);
  }, [searchTerm]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] font-sans">
      {/* Header */}
      <header className="bg-[#111] text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 font-black text-xl tracking-tighter uppercase group">
            <div className="w-8 h-8 bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <span>simplycalculator<span className="text-blue-500">.app</span></span>
          </Link>

          <div className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-widest items-center">
            <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
            <Link to="/finance" className="hover:text-blue-500 transition-colors">Finance</Link>
            <Link to="/health" className="hover:text-blue-500 transition-colors">Health</Link>
            <div className="h-4 w-[1px] bg-white/20 mx-2"></div>
            <Link to="/about" className="hover:text-blue-500 transition-colors text-white/60">Info</Link>
          </div>

          <button
            className="md:hidden p-2 text-white"
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
      <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row gap-8 lg:gap-12 px-6 py-6 lg:py-12 flex-1">
        {/* Sidebar */}
        <aside className="hidden md:block w-72 shrink-0 h-[calc(100vh-120px)] sticky top-24 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200">
          <div className="space-y-8">
            {/* Search Box */}
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#aaa] group-focus-within:text-blue-600 transition-colors" />
              <input 
                type="text" 
                placeholder="Search 500+ tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#eee] focus:border-blue-600 outline-none text-[12px] font-bold uppercase tracking-wider transition-all placeholder:text-[#ccc]"
              />
            </div>

            <div className="bg-white border-2 border-[#111] p-6 shadow-[6px_6px_0px_0px_rgba(17,17,17,1)]">
                <div className="flex items-center gap-2 border-b-2 border-[#eee] pb-3 mb-4">
                  <Star className="w-3 h-3 text-blue-600 fill-blue-600" />
                  <h3 className="font-black text-[10px] text-[#111] uppercase tracking-[0.2em]">Priority Hub</h3>
                </div>
                <nav className="flex flex-col gap-2">
                  {popularCalculators.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`text-[12px] font-bold text-[#666] hover:text-blue-600 transition-colors ${
                        location.pathname === item.path ? 'text-blue-600' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
            </div>

            <div className="space-y-4">
              {filteredCategories.map((cat) => {
                const transitionClass = "transition-all duration-300 ease-in-out";
                const isOpen = expandedCategories[cat.slug] || searchTerm.length > 0;
                
                return (
                  <div key={cat.slug} className="group">
                    <button 
                      onClick={() => toggleCategory(cat.slug)}
                      className={`w-full flex items-center justify-between py-3 px-4 border-2 transition-all ${
                        isOpen ? 'bg-[#111] border-[#111] text-white' : 'bg-white border-[#eee] hover:border-[#111] text-[#111]'
                      }`}
                    >
                      <div className="flex flex-col text-left">
                        <span className="font-black text-[10px] uppercase tracking-widest">{cat.title}</span>
                        {!isOpen && <span className="text-[8px] opacity-40 uppercase tracking-tighter mt-0.5">{cat.items.length} Tools</span>}
                      </div>
                      {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </button>
                    
                    <div className={`${transitionClass} overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100 mt-2 border-l-2 border-[#eee] ml-2 pl-4' : 'max-h-0 opacity-0'}`}>
                      <div className="space-y-2 py-2">
                        {cat.items.slice(0, 30).map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`block text-[12px] font-bold text-[#666] hover:text-blue-600 transition-colors truncate ${
                              location.pathname === item.path ? 'text-blue-600' : ''
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                        {cat.items.length > 30 && (
                          <div className="text-[9px] text-[#999] font-black uppercase tracking-widest py-1 border-t border-[#eee]">
                            + {cat.items.length - 30} more
                          </div>
                        )}
                        <Link 
                          to={`/${cat.slug}`}
                          className="block pt-2 text-[10px] font-black text-blue-600 hover:text-blue-700 uppercase tracking-widest"
                        >
                          View Full Category »
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1 flex flex-col xl:flex-row gap-8 lg:gap-12 min-w-0">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="relative">
              {children}
            </div>
          </main>
        </div>
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
