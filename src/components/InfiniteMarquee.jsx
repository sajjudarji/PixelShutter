import React from 'react';

const words = ["SHOOT", "VIDEO", "DRONE", "JIB", "COMMERCIAL", "CREATIVE", "STUDIO", "PORTRAITS"];

export default function InfiniteMarquee() {
  return (
    <div className="w-full bg-surface border-y border-white/5 py-8 md:py-12 overflow-hidden flex relative group cursor-pointer">
      <div className="flex animate-marquee">
        {/* We render two identical blocks to establish the 50% loop offset */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            {words.map((word, idx) => (
              <React.Fragment key={`${i}-${idx}`}>
                <span className="text-5xl md:text-7xl lg:text-[90px] tracking-wider font-sans font-bold uppercase text-black dark:text-transparent dark:[-webkit-text-stroke:1px_rgba(255,255,255,0.3)] dark:group-hover:[-webkit-text-stroke:1px_#D4AF37] group-hover:text-gold/20 transition-all duration-500">
                  {word}
                </span>
                <span className="mx-8 md:mx-16 text-3xl md:text-5xl text-black/50 dark:text-white/30 font-light">—</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
