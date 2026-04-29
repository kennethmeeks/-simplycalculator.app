import React from 'react';
import { Share2, FileDown, RotateCcw, Code } from 'lucide-react';

interface ResultActionsProps {
  onCopy: () => void;
  onDownloadPDF?: () => void;
  onReset: () => void;
  showPDF?: boolean;
  dark?: boolean;
}

export const ResultActions: React.FC<ResultActionsProps> = ({ 
  onCopy, 
  onDownloadPDF, 
  onReset,
  showPDF = true,
  dark = false
}) => {
  const [showEmbed, setShowEmbed] = React.useState(false);
  const baseColor = dark ? 'text-slate-300 hover:text-white' : 'text-slate-400 hover:text-[#0066cc]';
  const embedCode = `<iframe src="${window.location.origin}${window.location.pathname}?embed=true" width="100%" height="600" frameborder="0"></iframe>`;

  const handleCopyEmbed = () => {
    navigator.clipboard.writeText(embedCode);
    alert('Embed code copied to clipboard!');
    setShowEmbed(false);
  };
  
  return (
    <div className={`relative flex items-center gap-4 pt-6 border-t ${dark ? 'border-slate-800' : 'border-[#b3d9ff]'} mt-6`} data-html2canvas-ignore>
      <button 
        onClick={onCopy}
        className={`${baseColor} transition-colors text-[10px] font-black uppercase tracking-widest flex items-center gap-1`}
      >
        <Share2 className="w-3 h-3" />
        Copy
      </button>
      {showPDF && onDownloadPDF && (
        <button 
          onClick={onDownloadPDF}
          className={`${baseColor} transition-colors text-[10px] font-black uppercase tracking-widest flex items-center gap-1`}
        >
          <FileDown className="w-3 h-3" />
          Download PDF
        </button>
      )}
      <button 
        onClick={() => setShowEmbed(!showEmbed)}
        className={`${baseColor} transition-colors text-[10px] font-black uppercase tracking-widest flex items-center gap-1`}
      >
        <Code className="w-3 h-3" />
        Embed
      </button>
      <button 
        onClick={onReset}
        className={`${dark ? 'text-slate-300 hover:text-rose-400' : 'text-slate-400 hover:text-rose-500'} transition-colors text-[10px] font-black uppercase tracking-widest flex items-center gap-1`}
      >
        <RotateCcw className="w-3 h-3" />
        Reset
      </button>

      {showEmbed && (
        <div className="absolute bottom-full left-0 mb-4 w-72 bg-white border border-slate-200 rounded-xl shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-bottom-2">
          <p className="text-[10px] font-black uppercase tracking-widest text-[#0066cc] mb-2">Embed this Tool</p>
          <pre className="text-[9px] bg-slate-50 p-3 rounded-lg border border-slate-100 overflow-x-auto mb-3 whitespace-pre-wrap font-mono text-slate-500">
            {embedCode}
          </pre>
          <button 
            onClick={handleCopyEmbed}
            className="w-full py-2 bg-[#0066cc] text-white text-[9px] font-black uppercase tracking-widest rounded-lg hover:bg-blue-700"
          >
            Copy Snippet
          </button>
        </div>
      )}
    </div>
  );
};
