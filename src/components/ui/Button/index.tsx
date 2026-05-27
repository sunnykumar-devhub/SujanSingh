'use client';

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-98 select-none border tracking-wide uppercase text-xs',
  {
    variants: {
      variant: {
        primary:
          'bg-blue-600 border-blue-600 !text-white shadow-[0_4px_16px_rgba(37,99,235,0.25)] hover:bg-blue-700 hover:border-blue-700 hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)] focus:ring-blue-500',
        secondary:
          'bg-slate-900 border-slate-900 !text-white shadow-[0_4px_16px_rgba(15,23,42,0.15)] hover:bg-slate-800 hover:border-slate-800 focus:ring-slate-500',
        outline:
          'bg-transparent border-slate-300 !text-slate-800 hover:bg-slate-100 hover:border-slate-400 focus:ring-blue-500',
        ghost:
          'bg-transparent border-transparent !text-slate-600 hover:bg-slate-100 focus:ring-slate-500',
        danger:
          'bg-red-600 border-red-600 !text-white shadow-[0_4px_16px_rgba(220,38,38,0.25)] hover:bg-red-700 hover:border-red-700 focus:ring-red-500',
      },
      size: {
        sm: 'px-5 py-2 min-h-[38px]',
        md: 'px-6 py-3 min-h-[44px]',
        lg: 'px-8 py-3.5 min-h-[50px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'ref' | 'color' | 'children'>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, disabled, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        disabled={disabled || isLoading}
        whileHover={{ y: disabled || isLoading ? 0 : -1 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : null}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
export { Button, buttonVariants };

