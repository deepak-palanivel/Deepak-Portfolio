import React from 'react';
import { motion } from 'framer-motion';

interface MotionBlurRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'down';
}

export const MotionBlurReveal: React.FC<MotionBlurRevealProps> = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { x: -40, y: 0 };
      case 'right':
        return { x: 40, y: 0 };
      case 'down':
        return { x: 0, y: -40 };
      case 'up':
      default:
        return { x: 0, y: 35 };
    }
  };

  const initialPos = getInitialPosition();

  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: 'blur(14px)',
        ...initialPos,
      }}
      whileInView={{
        opacity: 1,
        filter: 'blur(0px)',
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
