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
import { CanonicalSEO } from './CanonicalSEO';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [expandedCategories, setExpandedCategories] = React.useState<Record<string, boolean>>({
    'finance': true,
  });
  const location = useLocation();
  const isEmbed = new URLSearchParams(location.search).get('embed') === 'true';

  const toggleCategory = (slug: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [slug]: !prev[slug]
    }));
  };

  const popularCalculators = [
    { name: 'Mortgage Calculator', path: '/mortgage' },
    { name: 'Basic Calculator', path: '/math/basic-calculator' },
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
      <CanonicalSEO />
      {/* Header */}
      {!isEmbed && (
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-[1400px] mx-auto px-4 h-16 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3 font-bold text-xl tracking-tight group">
              <div className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-lg">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <span className="text-slate-900">simplycalculator<span className="text-blue-600">.app</span></span>
            </Link>

            <div className="hidden md:flex gap-8 text-[12px] font-bold uppercase tracking-wider items-center text-slate-600">
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/finance" className="hover:text-blue-600 transition-colors">Finance</Link>
              <Link to="/health" className="hover:text-blue-600 transition-colors">Health</Link>
              <div className="h-4 w-[1px] bg-slate-200 mx-2"></div>
              <Link to="/about" className="hover:text-blue-600 transition-colors text-slate-400">Info</Link>
            </div>

            <button
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </header>
      )}

      {/* Mobile Nav */}
      {!isEmbed && isMenuOpen && (
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
      <div className={`max-w-[1400px] mx-auto w-full flex flex-col md:flex-row flex-1 ${isEmbed ? 'p-0' : 'gap-8 lg:gap-12 px-6 py-6 lg:py-12'}`}>
        {/* Sidebar */}
        {!isEmbed && (
          <aside className="hidden md:block w-72 shrink-0 h-[calc(100vh-120px)] sticky top-24 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200">
          <div className="space-y-8">
            {/* Search Box */}
            <div className="bg-white border border-slate-200 rounded-lg">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                <input 
                  type="text" 
                  placeholder="Search 1,900+ tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-transparent outline-none text-[12px] font-bold tracking-tight placeholder:text-slate-300"
                />
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-4">
                  <Star className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
                  <h3 className="font-bold text-[11px] text-slate-800 uppercase tracking-wider leading-none">Priority Hub</h3>
                </div>
                <nav className="flex flex-col gap-3">
                  {popularCalculators.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`text-[13px] font-medium text-slate-600 hover:text-blue-600 transition-colors ${
                        location.pathname === item.path ? 'text-blue-600 font-bold' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
            </div>

            <div className="space-y-3">
              {filteredCategories.map((cat) => {
                const isOpen = expandedCategories[cat.slug] || searchTerm.length > 0;
                
                return (
                  <div key={cat.slug} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                    <button 
                      onClick={() => toggleCategory(cat.slug)}
                      className={`w-full flex items-center justify-between py-3 px-4 transition-all ${
                        isOpen ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="font-bold text-[11px] uppercase tracking-wider">{cat.title}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? '' : '-rotate-90'}`} />
                    </button>
                    
                    {isOpen && (
                      <div className="p-3 bg-white space-y-2 border-t border-slate-100">
                        {cat.items.slice(0, 30).map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`block text-[12px] font-medium text-slate-500 hover:text-blue-600 transition-colors truncate ${
                              location.pathname === item.path ? 'text-blue-600 font-bold' : ''
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
        )}

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

      {!isEmbed && (
        <footer className="bg-slate-900 text-white py-16 mt-auto">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <Calculator className="w-6 h-6 text-blue-500" />
                <span>simplycalculator<span className="text-blue-500">.app</span></span>
              </div>
              <p className="text-slate-400 text-sm max-w-sm mb-6">
                The world's most comprehensive collection of high-precision mathematical tools. 
                Updated for 2026 with over 1900+ calculators for finance, science, and life.
              </p>
              <div className="flex gap-4">
                 <Link to="/sitemap" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-bold transition-all uppercase tracking-wider">Site Index</Link>
                 <Link to="/about" className="px-4 py-2 border border-slate-700 hover:border-slate-500 rounded-lg text-xs font-bold transition-all uppercase tracking-wider">About Hub</Link>
              </div>
            </div>
            
            {CATEGORIES.slice(0, 4).map(cat => (
              <div key={cat.slug} className="space-y-4">
                <h4 className="text-[11px] font-black uppercase tracking-[2px] text-blue-500">{cat.title}</h4>
                <ul className="space-y-2">
                  {cat.items.slice(0, 6).map(item => (
                    <li key={item.path}>
                      <Link to={item.path} className="text-slate-400 hover:text-white text-[13px] transition-colors">{item.name}</Link>
                    </li>
                  ))}
                  <li>
                    <Link to={`/${cat.slug}`} className="text-slate-500 hover:text-blue-400 text-[11px] font-bold uppercase tracking-wider">View All →</Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-6 text-[11px] font-bold uppercase tracking-widest text-slate-500">
              <Link to="/about" className="hover:text-white">About Us</Link>
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of Service</Link>
              <Link to="/contact" className="hover:text-white">Contact Us</Link>
              <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
            </div>
          </div>

          <div className="mt-8 text-center space-y-4">
            <p className="text-slate-600 text-xs">
              © 2026 simplycalculator.app — Built for Precision. Delivering 1900+ verified algorithms.
            </p>
            <div className="max-w-3xl mx-auto space-y-2">
                <p className="text-slate-700 text-[9px] leading-relaxed italic">
                  <strong>Advertiser & Affiliate Disclosure:</strong> simplycalculator.app is supported by its users. When you browse our tools, we may earn affiliate commissions from companies like Amazon, Bank of America, or Progressive. 
                </p>
                <p className="text-slate-700 text-[9px] leading-relaxed">
                  <strong>Legal Disclaimer:</strong> Calculations are provided "as-is" for educational purposes. We are not a licensed financial advisor. Consult with registered CPAs or Attorneys for critical decisions. Member FDIC status is provider-dependent.
                </p>
            </div>
          </div>
        </div>
      </footer>
      )}
    </div>
  );
};
