import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax feel */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 animate-pulse-slow"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop")',
        }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-black/20 z-10 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-rosewater z-10 opacity-90"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
        <div className="overflow-hidden mb-6">
            <p className="text-white/90 font-sans uppercase tracking-[0.4em] text-xs md:text-sm reveal active delay-100">
            Holistic Hair Sanctuary
            </p>
        </div>
        
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-xl mb-8 leading-none reveal active delay-200 opacity-0">
          Unveil your <br/> <i className="font-light text-softgold/90">Radiance</i>
        </h1>
        
        <p className="text-white/90 font-sans font-light max-w-lg mx-auto leading-relaxed mb-12 text-lg reveal active delay-300 opacity-0">
          Where conscious beauty meets high fashion. Experience non-toxic luxury tailored to your unique essence.
        </p>
        
        <div className="reveal active delay-300 opacity-0">
             <button className="border border-white/40 hover:bg-white hover:text-espresso text-white px-10 py-3 rounded-full uppercase tracking-widest text-xs transition-all duration-500">
                Explore the Menu
             </button>
        </div>
      </div>
      
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20 text-white/50">
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
       </div>
    </header>
  );
};

export default Hero;