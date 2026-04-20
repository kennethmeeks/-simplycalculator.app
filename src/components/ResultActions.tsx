import React from 'react';
import { Share2, FileDown, RotateCcw } from 'lucide-react';

interface ResultActionsProps {
  onCopy: () => void;
  onDownloadPDF?: () => void;
  onReset: () => void;
  showPDF?: boolean;
}

export const ResultActions: React.FC<ResultActionsProps> = ({ 
  onCopy, 
  onDownloadPDF, 
  onReset,
  showPDF = true 
}) => {
  return (
    <div className="flex items-center gap-4 pt-6 border-t border-[#b3d9ff] mt-6" data-html2canvas-ignore>
      <button 
        onClick={onCopy}
        className="text-slate-400 hover:text-[#0066cc] transition-colors text-[10px] font-black uppercase tracking-widest flex items-center gap-1"
      >
        <Share2 className="w-3 h-3" />
        Copy
      </button>
      {showPDF && onDownloadPDF && (
        <button 
          onClick={onDownloadPDF}
          className="text-slate-400 hover:text-[#0066cc] transition-colors text-[10px] font-black uppercase tracking-widest flex items-center gap-1"
        >
          <FileDown className="w-3 h-3" />
          Download PDF
        </button>
      )}
      <button 
        onClick={onReset}
        className="text-slate-400 hover:text-rose-500 transition-colors text-[10px] font-black uppercase tracking-widest flex items-center gap-1"
      >
        <RotateCcw className="w-3 h-3" />
        Reset
      </button>
    </div>
  );
};
