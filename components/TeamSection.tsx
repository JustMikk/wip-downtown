import React from 'react';
import { STYLISTS } from '../constants';

const TeamSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="team">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal">
            <div className="max-w-2xl">
                <h2 className="font-serif text-5xl md:text-6xl text-espresso mb-6">The Artisans</h2>
                <p className="text-slate font-light text-lg leading-relaxed">
                    We are a collective of artists, chemists, and dreamers. 
                    Each stylist at Nuance brings a unique mastery of hair health and 
                    aesthetic balance to unveil your most authentic self.
                </p>
            </div>
            <div className="hidden md:block h-px bg-espresso/20 w-32 mb-4"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {STYLISTS.map((stylist, index) => (
                <div 
                    key={stylist.id} 
                    className={`group cursor-pointer reveal delay-${(index * 100) + 100}`}
                >
                    <div className="relative h-[500px] overflow-hidden rounded-lg mb-6">
                        {/* Image */}
                        <img 
                            src={stylist.avatarUrl} 
                            alt={stylist.name} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale-[10%] group-hover:grayscale-0"
                        />
                        
                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-espresso/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                            <button className="bg-white text-espresso px-8 py-3 rounded-full font-sans uppercase tracking-widest text-xs font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-mauve hover:text-white">
                                Book with {stylist.name.split(' ')[0]}
                            </button>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="text-center md:text-left">
                        <h3 className="font-serif text-3xl text-espresso mb-1 group-hover:text-mauve transition-colors duration-300">
                            {stylist.name}
                        </h3>
                        <p className="text-xs font-bold text-softgold uppercase tracking-widest mb-4">
                            {stylist.role}
                        </p>
                        <p className="text-slate font-light text-sm leading-relaxed mb-4 opacity-80">
                            {stylist.bio}
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {stylist.specialties?.map(spec => (
                                <span key={spec} className="text-[10px] uppercase tracking-wider border border-gray-200 px-2 py-1 rounded-md text-slate/70">
                                    {spec}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;