'use client';

import { useEffect } from 'react';
import { CheckCircle2, XCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, type, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed bottom-4 right-4 z-[9999] animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className={`
        flex items-start gap-3 p-4 rounded-lg shadow-lg backdrop-blur-sm border
        min-w-[320px] max-w-md
        ${type === 'success'
          ? 'bg-green-500/10 border-green-500/50 text-green-600 dark:text-green-400'
          : 'bg-red-500/10 border-red-500/50 text-red-600 dark:text-red-400'
        }
      `}>
        {type === 'success' ? (
          <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
        ) : (
          <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
        )}

        <div className="flex-1">
          <p className="text-sm font-medium">
            {type === 'success' ? 'Success!' : 'Error'}
          </p>
          <p className="text-sm opacity-90 mt-1">
            {message}
          </p>
        </div>

        <button
          onClick={onClose}
          className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Close notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
