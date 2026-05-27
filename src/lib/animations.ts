import { Variants } from 'framer-motion';

export const springTransition = {
    type: "spring" as const,
    stiffness: 100,
    damping: 20,
};

export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: springTransition },
};