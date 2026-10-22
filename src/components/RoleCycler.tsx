import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  "FREELANCE FULL-STACK DEVELOPER",
  "SAAS & MOBILE APP ARCHITECT",
  "AI & INTELLIGENT APPS ENGINEER",
  "MERN & .NET ECOSYSTEM SPECIALIST",
];

export const RoleCycler: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-10 sm:h-12 relative flex items-center justify-start overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 24, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -24, opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono font-bold text-lg sm:text-2xl tracking-tight text-neutral-800"
        >
          <span className="text-black font-black">&gt; </span>
          {roles[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
