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
      <header className="bg-[#111] text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-[1400px] mx-auto px-4 h-16 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 font-black text-xl tracking-tighter uppercase group">
            <div className="w-8 h-8 bg-[#0066cc] flex items-center justify-center rounded-sm">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <span className="tracking-tight">simplycalculator<span className="text-[#0066cc]">.app</span></span>
          </Link>

          <div className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-widest items-center">
            <Link to="/" className="hover:text-[#0066cc] transition-colors">Home</Link>
            <Link to="/finance" className="hover:text-[#0066cc] transition-colors">Finance</Link>
            <Link to="/health" className="hover:text-[#0066cc] transition-colors">Health</Link>
            <div className="h-4 w-[1px] bg-white/10 mx-2"></div>
            <Link to="/about" className="hover:text-[#0066cc] transition-colors text-white/50">Info</Link>
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
            <div className="bg-white border border-slate-200 rounded-sm">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                <input 
                  type="text" 
                  placeholder="SEARCH 500+ TOOLS..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-transparent outline-none text-[12px] font-bold tracking-widest placeholder:text-slate-300"
                />
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-sm p-5 shadow-sm">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-4">
                  <Star className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
                  <h3 className="font-black text-[11px] text-slate-800 uppercase tracking-widest leading-none">Priority Hub</h3>
                </div>
                <nav className="flex flex-col gap-3">
                  {popularCalculators.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`text-[13px] font-bold text-slate-600 hover:text-[#0066cc] transition-colors ${
                        location.pathname === item.path ? 'text-[#0066cc]' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
            </div>

            <div className="space-y-4">
              {filteredCategories.map((cat) => {
                const isOpen = expandedCategories[cat.slug] || searchTerm.length > 0;
                
                return (
                  <div key={cat.slug} className="bg-white border border-slate-200 rounded-sm overflow-hidden">
                    <button 
                      onClick={() => toggleCategory(cat.slug)}
                      className={`w-full flex items-center justify-between py-3.5 px-4 transition-all border border-slate-200 group-hover:border-slate-300 ${
                        isOpen ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <span className="font-black text-[11px] uppercase tracking-[0.1em]">{cat.title}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? '' : '-rotate-90'}`} />
                    </button>
                    
                    {isOpen && (
                      <div className="p-4 bg-white space-y-2 border-t border-slate-100 animate-in slide-in-from-top-1 duration-200">
                        {cat.items.slice(0, 30).map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`block text-[12px] font-medium text-slate-600 hover:text-[#0066cc] transition-colors truncate ${
                              location.pathname === item.path ? 'text-[#0066cc] font-bold' : ''
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
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
        <div className="max-w-[1400px] mx-auto px-6">
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
              <strong>Affiliate Disclaimer:</strong> simplycalculator.app participates in affiliate marketing programs, which means we may earn a commission on sales made through our links to retailer sites. This comes at no additional cost to you and helps us keep our tools free for everyone.
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
