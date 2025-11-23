import React from 'react';
import { VISUAL_PROOF } from '../constants';

const Lookbook: React.FC = () => {
  return (
    <section className="py-24 bg-rosewater/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 reveal">
             <p className="text-xs uppercase tracking-[0.3em] text-slate mb-4">The Portfolio</p>
             <h2 className="font-serif text-5xl text-espresso mb-6">Visual Proof</h2>
             <div className="w-px h-12 bg-mauve/50"></div>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {VISUAL_PROOF.map((item, index) => (
                <div 
                    key={item.id} 
                    className={`break-inside-avoid relative group overflow-hidden rounded-lg cursor-pointer reveal delay-${(index % 3) * 100}`}
                >
                    <img 
                        src={item.imageUrl} 
                        alt={item.serviceName} 
                        className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-espresso/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                        <h4 className="font-serif text-2xl text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            {item.serviceName}
                        </h4>
                        <p className="text-white/80 text-xs font-sans uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                            Stylist: {item.stylistName}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Lookbook;