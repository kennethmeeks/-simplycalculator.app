import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calculator, Menu, X } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Mortgage Calculator', path: '/mortgage' },
    { name: 'BMI Calculator', path: '/bmi' },
    { name: 'Compound Interest', path: '/compound-interest' },
    { name: 'Salary Calculator', path: '/salary' },
    { name: 'Percentage Calculator', path: '/percentage' },
    { name: 'Age Calculator', path: '/age' },
    { name: 'Auto Loan Calculator', path: '/auto-loan' },
    { name: 'Discount Calculator', path: '/discount' },
    { name: 'Calorie Calculator', path: '/calorie' },
    { name: 'Tip Calculator', path: '/tip' },
    { name: 'Unit Converter', path: '/unit-converter' },
    { name: 'Currency Converter', path: '/currency-converter' },
    { name: 'Word Counter', path: '/word-counter' },
    { name: 'Scientific Notation', path: '/scientific-notation' },
    { name: 'Random Number', path: '/random-number' },
    { name: 'Percentage Off', path: '/percentage-off' },
    { name: 'Love Calculator', path: '/love-calculator' },
    { name: 'Sleep Calculator', path: '/sleep-calculator' },
    { name: 'Water Intake', path: '/water-intake' },
    { name: 'GPA Calculator', path: '/gpa' },
    { name: 'MPG Calculator', path: '/mpg' },
    { name: 'Test Score Calculator', path: '/test-score' },
    { name: 'Road Trip Cost', path: '/road-trip-cost' },
    { name: 'Life Insurance', path: '/life-insurance' },
    { name: 'Health Insurance', path: '/health-insurance' },
    { name: 'Car Insurance', path: '/car-insurance' },
    { name: 'Sitemap', path: '/sitemap' },
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

          <div className="hidden md:flex gap-4 text-sm font-bold">
            <Link to="/" className="text-[#0066cc] hover:underline">Home</Link>
            <Link to="/about" className="text-[#0066cc] hover:underline">About</Link>
            <Link to="/contact" className="text-[#0066cc] hover:underline">Contact</Link>
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
        <div className="md:hidden bg-white border-b border-[#ccc] px-4 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-[#0066cc] font-bold py-1 border-b border-[#eee]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* Main Content Area */}
      <div className="max-w-[1000px] mx-auto w-full flex flex-col md:flex-row gap-6 px-4 py-6">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="bg-white border border-[#ccc] p-3 mb-6">
            <h3 className="font-bold text-[#0066cc] border-b border-[#ccc] pb-1 mb-2">Calculators</h3>
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`sidebar-link ${location.pathname === item.path ? 'font-bold bg-[#f9f9f9]' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          {/* Future Ad Position 2 */}
          <div className="h-4"></div>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0">
          {/* Future Ad Position 1 */}
          <div className="h-4"></div>

          <div className="bg-white border border-[#ccc] p-6">
            <div className="mb-4 flex justify-end">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">
                Educational Tool • Not Financial Advice
              </span>
            </div>
            {children}
            
            {/* Future Ad Position 3 */}
            <div className="h-8"></div>
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
