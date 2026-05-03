import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  Mail, 
  MessageSquare, 
  Clock, 
  HelpCircle, 
  ArrowRight,
  Twitter,
  Linkedin,
  Lightbulb,
  Copy,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('support@simplycalculator.app');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-slate-50/50">
      <Helmet>
        <title>Contact Us [Free & No Sign-up]</title>
        <meta name="description" content="Have questions or suggestions? Reach out to the simplycalculator.app team. We're here to help with your calculation needs and technical inquiries." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full"
            >
              Get in Touch
            </motion.span>
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight"
            >
              How can we <span className="text-blue-600">help you</span> today?
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 leading-relaxed"
            >
              Whether you've found a bug, have a brilliant idea for a new calculator, or just want to share your experience, we're all ears.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Info & Socials */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="lg:col-span-4 space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Contact Information</h2>
              
              <motion.div variants={itemVariants} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email Us</h3>
                  <p className="text-sm text-slate-500 mb-1">Direct support line:</p>
                  <a href="mailto:support@simplycalculator.app" className="text-blue-600 font-semibold hover:underline">support@simplycalculator.app</a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Response Time</h3>
                  <p className="text-sm text-slate-500">We aim to respond within 24 hours on business days.</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                  <HelpCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Help Center</h3>
                  <p className="text-sm text-slate-500">Check our <Link to="/sitemap" className="text-purple-600 hover:underline">sitemap</Link> for all available tools.</p>
                </div>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-slate-200 text-center">
              <p className="text-[#999] text-[10px] leading-relaxed max-w-2xl mx-auto">
                <strong>Affiliate Disclaimer:</strong> simplycalculator.app participates in affiliate marketing programs, which means we may earn a commission on sales made through our links to retailer sites. This comes at no additional cost to you and helps us keep our tools free for everyone.
              </p>
            </div>

            {/* Quick Tips Card */}
            <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="text-yellow-400" size={20} />
                  Quick Tip
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Before reaching out, try searching for your calculation on our homepage. Most tools have detailed FAQs at the bottom!
                </p>
                <Link 
                  to="/" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Browse all tools <ArrowRight size={16} />
                </Link>
              </div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl"></div>
            </div>
          </motion.div>

          {/* Right Column: Direct Contact CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <div className="bg-white border border-slate-200 p-8 md:p-16 rounded-[3rem] shadow-2xl shadow-slate-200/50 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-3">
                  <Mail className="w-12 h-12 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                  Reach out via email
                </h2>
                <p className="text-slate-600 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                  Click below to open your email app, or copy our address to your clipboard.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a 
                    href="mailto:support@simplycalculator.app"
                    className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 shadow-xl shadow-blue-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-lg"
                  >
                    <Mail className="w-6 h-6" />
                    Send Email
                  </a>
                  <button 
                    onClick={copyEmail}
                    className="w-full sm:w-auto px-10 py-5 bg-slate-100 text-slate-900 rounded-2xl font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-3 text-lg"
                  >
                    {copied ? <Check className="w-6 h-6 text-green-600" /> : <Copy className="w-6 h-6" />}
                    {copied ? 'Copied!' : 'Copy Address'}
                  </button>
                </div>

                <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100 inline-block">
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-2">Direct Support Email</p>
                  <p className="text-xl md:text-2xl font-mono font-bold text-slate-800">support@simplycalculator.app</p>
                </div>

                <p className="mt-8 text-sm text-slate-400 max-w-sm mx-auto">
                  Note: Clicking "Send Email" will open your device's default mail application.
                </p>
              </div>
              
              {/* Decorative background shape */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-50"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <MessageSquare className="w-16 h-16 text-blue-500 mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want to request a specific calculator?</h2>
            <p className="text-slate-400 text-lg mb-10">
              We're constantly expanding our library. If there's a specific tool you need, let us know and we might build it next!
            </p>
            <button 
              onClick={() => {
                window.location.href = 'mailto:support@simplycalculator.app?subject=Feature Suggestion';
              }}
              className="px-10 py-4 bg-white text-slate-900 rounded-2xl font-bold hover:bg-slate-100 transition-all inline-flex items-center gap-2"
            >
              Request a Tool <ArrowRight size={20} />
            </button>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>
        </motion.div>
      </div>
    </div>
  );
};

