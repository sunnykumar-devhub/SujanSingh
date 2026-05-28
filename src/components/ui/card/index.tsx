'use client';

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  variant?: 'default' | 'glass' | 'outline' | 'interactive';
  hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hoverEffect = false, children, ...props }, ref) => {
    const baseStyles = 'rounded-2xl p-6 sm:p-8 transition-all duration-300';
    
    const variants = {
      default: 'bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)]',
      outline: 'bg-transparent border border-slate-200/80',
      glass: 'backdrop-blur-md bg-white/80 border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.03)]',
      interactive: 'bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.04)] hover:border-slate-200/80',
    };

    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : undefined}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
export { Card };
