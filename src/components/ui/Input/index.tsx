'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, helperText, error, id, ...props }, ref) => {
    return (
      <div className="w-full space-y-2 text-left">
        {label && (
          <label 
            htmlFor={id} 
            className="block text-xs font-bold text-slate-500 uppercase tracking-wider"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          ref={ref}
          className={cn(
            "w-full px-4 py-3.5 rounded-xl border bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 text-sm transition-all min-h-[48px]",
            error 
              ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" 
              : "border-slate-200/80 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white",
            className
          )}
          {...props}
        />
        {helperText && (
          <p className={cn("text-xs font-light", error ? "text-red-500" : "text-slate-400")}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
export { Input };