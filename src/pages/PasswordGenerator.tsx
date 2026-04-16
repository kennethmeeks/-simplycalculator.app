import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Copy, RefreshCw, Check, Shield } from 'lucide-react';

export const PasswordGenerator: React.FC = () => {
  const [length, setLength] = useState(16);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [excludeAmbiguous, setExcludeAmbiguous] = useState(false);
  
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);
  const [strength, setStrength] = useState({ label: 'Weak', color: 'bg-red-500', width: 'w-1/4' });

  const generatePassword = () => {
    let charset = '';
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    if (excludeAmbiguous) {
      upper = upper.replace(/[IL]/g, '');
      lower = lower.replace(/[lo]/g, '');
      numbers = numbers.replace(/[01]/g, '');
      symbols = symbols.replace(/[|]/g, '');
    }

    if (includeUpper) charset += upper;
    if (includeLower) charset += lower;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;

    if (charset === '') {
      setPassword('Select at least one option');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      generatedPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(generatedPassword);
    setCopied(false);
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeUpper, includeLower, includeNumbers, includeSymbols, excludeAmbiguous]);

  useEffect(() => {
    let score = 0;
    if (length > 8) score++;
    if (length > 12) score++;
    if (includeUpper && includeLower) score++;
    if (includeNumbers) score++;
    if (includeSymbols) score++;
    
    if (score <= 2) setStrength({ label: 'Weak', color: 'bg-red-500', width: 'w-1/4' });
    else if (score <= 4) setStrength({ label: 'Medium', color: 'bg-yellow-500', width: 'w-2/4' });
    else if (score <= 5) setStrength({ label: 'Strong', color: 'bg-green-500', width: 'w-3/4' });
    else setStrength({ label: 'Very Strong', color: 'bg-emerald-600', width: 'w-full' });
  }, [password]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Password Generator | Create Secure, Random Passwords Online</title>
        <meta name="description" content="Free online password generator to create strong, secure, and random passwords. Customize length, characters, and symbols for maximum security in 2026." />
      </Helmet>

      <h1>Password Generator</h1>
      <p>Generate highly secure, random passwords to protect your online accounts. Customize the settings to meet specific security requirements.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Password Settings</div>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <label className="input-label">Password Length: <span className="text-[#0066cc] font-bold">{length}</span></label>
              </div>
              <input 
                type="range" 
                min="4" 
                max="50" 
                value={length} 
                onChange={(e) => setLength(Number(e.target.value))} 
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0066cc]" 
              />
            </div>

            <div className="grid grid-cols-1 gap-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" checked={includeUpper} onChange={(e) => setIncludeUpper(e.target.checked)} className="w-4 h-4 text-[#0066cc] rounded border-slate-300 focus:ring-[#0066cc]" />
                <span className="text-sm text-slate-700 group-hover:text-[#0066cc]">Include Uppercase (A-Z)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" checked={includeLower} onChange={(e) => setIncludeLower(e.target.checked)} className="w-4 h-4 text-[#0066cc] rounded border-slate-300 focus:ring-[#0066cc]" />
                <span className="text-sm text-slate-700 group-hover:text-[#0066cc]">Include Lowercase (a-z)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} className="w-4 h-4 text-[#0066cc] rounded border-slate-300 focus:ring-[#0066cc]" />
                <span className="text-sm text-slate-700 group-hover:text-[#0066cc]">Include Numbers (0-9)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} className="w-4 h-4 text-[#0066cc] rounded border-slate-300 focus:ring-[#0066cc]" />
                <span className="text-sm text-slate-700 group-hover:text-[#0066cc]">Include Symbols (!@#$)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group border-t pt-3 mt-1">
                <input type="checkbox" checked={excludeAmbiguous} onChange={(e) => setExcludeAmbiguous(e.target.checked)} className="w-4 h-4 text-[#0066cc] rounded border-slate-300 focus:ring-[#0066cc]" />
                <span className="text-sm text-slate-700 group-hover:text-[#0066cc]">Exclude Ambiguous (e.g. i, l, 1, L, o, 0)</span>
              </label>
            </div>

            <button 
              onClick={generatePassword}
              className="w-full bg-[#0066cc] text-white font-bold py-3 rounded hover:bg-[#0052a3] transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              Generate New Password
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Generated Password</div>
            <div className="relative">
              <div className="bg-slate-50 border-2 border-slate-200 rounded p-4 font-mono text-xl break-all min-h-[64px] flex items-center pr-12">
                {password}
              </div>
              <button 
                onClick={copyToClipboard}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-[#0066cc] transition-colors"
                title="Copy to clipboard"
              >
                {copied ? <Check className="text-green-500" /> : <Copy />}
              </button>
            </div>
            
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-500 uppercase">Strength: {strength.label}</span>
                <Shield className={`w-4 h-4 ${strength.color.replace('bg-', 'text-')}`} />
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className={`${strength.color} h-2 rounded-full transition-all duration-500 ${strength.width}`}></div>
              </div>
            </div>
          </div>

          <div className="bg-[#e7f3ff] border border-[#0066cc]/20 rounded p-4 text-sm text-[#004d99]">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Security Tip
            </h4>
            <p>Never reuse passwords across different sites. Use a password manager to store your unique, strong passwords securely.</p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Importance of Strong Passwords in 2026</h2>
        <p>
          In an era of increasing cyber threats, your first line of defense is a strong, unique password. Our <strong>password generator</strong> is designed to create complex strings that are nearly impossible for hackers to guess or "brute-force" using modern computing power.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">What Makes a Password "Strong"?</h3>
        <p>
          Security experts generally agree on several key factors that contribute to password strength:
        </p>
        <ul>
          <li><strong>Length:</strong> Longer is almost always better. A 16-character password is exponentially harder to crack than an 8-character one.</li>
          <li><strong>Complexity:</strong> Mixing uppercase letters, lowercase letters, numbers, and symbols increases the "entropy" or randomness of the password.</li>
          <li><strong>Unpredictability:</strong> Avoid using common words, names, birthdays, or keyboard patterns (like "qwerty"). Random strings are the most secure.</li>
          <li><strong>Uniqueness:</strong> Every account should have its own password. If one site is compromised, your other accounts remain safe.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">How Our Generator Works</h3>
        <p>
          Our tool uses a cryptographically secure random number generator in your browser to select characters from the sets you specify. 
        </p>
        
        <h4 className="font-bold text-slate-900">Excluding Ambiguous Characters</h4>
        <p>
          Some characters look very similar in certain fonts, such as the lowercase "l", the uppercase "I", and the number "1". By selecting the "Exclude Ambiguous" option, you can ensure your password is easy to read and type correctly without confusion.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Is it safe to generate passwords online?</p>
            <p>Yes, as long as the generation happens locally in your browser and is not sent to a server. Our generator runs entirely on your device, ensuring your new password is never transmitted over the internet during creation.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How often should I change my passwords?</p>
            <p>While the old advice was to change them every 90 days, modern security standards suggest only changing them if you suspect a breach. It's more important to have a truly strong password and use Multi-Factor Authentication (MFA).</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is a Password Manager?</p>
            <p>A password manager is a tool that stores all your passwords in an encrypted "vault." You only need to remember one master password to access all your other accounts. This allows you to use 50-character random passwords for every site without needing to memorize them.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Best Practices for Account Security</h3>
        <p>
          Beyond using a strong password, we highly recommend enabling <strong>Two-Factor Authentication (2FA)</strong> or Multi-Factor Authentication (MFA) on all sensitive accounts, especially your email and financial services. This provides an extra layer of security even if your password is stolen.
        </p>
      </div>
    </div>
  );
};
