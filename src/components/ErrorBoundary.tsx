import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-white border-4 border-red-500 shadow-[20px_20px_0px_0px_rgba(239,68,68,0.1)]">
          <h2 className="text-3xl font-black text-[#111] uppercase tracking-tighter mb-4">Mathematics Engine Failure</h2>
          <p className="text-[#666] mb-8 font-medium">A calculation error occurred in this module. Please try again or check your parameters.</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-8 py-4 bg-[#111] text-white font-black uppercase tracking-widest hover:bg-red-600 transition-colors"
          >
            Restart Application
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
