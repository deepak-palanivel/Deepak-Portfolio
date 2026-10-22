import React from 'react';

interface MotionBlurMarqueeProps {
  items?: string[];
}

export const MotionBlurMarquee: React.FC<MotionBlurMarqueeProps> = ({
  items = [
    "FULL-STACK ARCHITECT",
    "SAAS TOOL BUILDER",
    "AI SYSTEMS & GEMINI API",
    "REACT & NEXT.JS",
    "C# .NET & NODE.JS",
    "SCALABLE ARCHITECTURE",
    "MOBILE APPS WITH REACT NATIVE",
    "HIGH PERFORMANCE CODE",
  ]
}) => {
  return (
    <div className="relative w-full overflow-hidden border-y-2 border-black bg-black py-4 select-none my-12">
      {/* Edge motion blur vignettes */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent" />

      <div className="animate-ticker flex whitespace-nowrap gap-12 text-white font-black tracking-tighter text-2xl sm:text-3xl uppercase">
        {/* Double array for seamless loop */}
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 group cursor-default">
            <span className="hover:text-neutral-400 transition-colors duration-200">
              {item}
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-white inline-block opacity-60" />
          </div>
        ))}
      </div>
    </div>
  );
};
