import React from 'react';
import { MapPin, Clock, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-espresso text-white pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-16">
                
                {/* Brand */}
                <div className="lg:col-span-1">
                    <h2 className="font-serif text-3xl tracking-widest mb-6">Wip <span className="text-mauve italic normal-case">downtown</span></h2>
                    <p className="font-sans text-white/60 font-light text-sm leading-relaxed mb-8">
                        A sanctuary for conscious beauty. Where sustainable practices meet high-fashion artistry.
                    </p>
                    <div className="flex gap-4 text-white/60">
                        <a href="#" className="hover:text-white transition-colors text-sm uppercase tracking-wider">Insta</a>
                        <a href="#" className="hover:text-white transition-colors text-sm uppercase tracking-wider">Fb</a>
                        <a href="#" className="hover:text-white transition-colors text-sm uppercase tracking-wider">Tt</a>
                    </div>
                </div>

                {/* Visit / Map */}
                <div className="space-y-6">
                    <h4 className="font-serif text-xl text-softgold flex items-center gap-2">
                        <MapPin size={18} /> Visit Us
                    </h4>
                    <div className="bg-white/5 h-32 w-full rounded-lg flex items-center justify-center border border-white/10 overflow-hidden relative group cursor-pointer">
                        {/* Placeholder Map Visual */}
                         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity grayscale"></div>
                        <span className="relative z-10 text-xs uppercase tracking-widest font-bold">Open Map</span>
                    </div>
                    <div>
                        <p className="text-sm font-light text-white/80">108 Rue de Rose</p>
                        <p className="text-sm font-light text-white/80">Downtown District, 75003</p>
                    </div>
                </div>

                {/* Hours */}
                <div>
                    <h4 className="font-serif text-xl text-softgold flex items-center gap-2 mb-6">
                        <Clock size={18} /> Hours
                    </h4>
                    <ul className="space-y-4 text-sm font-light text-white/80">
                        <li className="flex justify-between border-b border-white/10 pb-2">
                            <span>Tue - Fri</span>
                            <span>10am — 8pm</span>
                        </li>
                        <li className="flex justify-between border-b border-white/10 pb-2 text-softgold/90 font-normal">
                            <span>Saturday</span>
                            <span>9am — 6pm</span>
                        </li>
                         <li className="flex justify-between border-b border-white/10 pb-2 text-mauve/80">
                            <span>Sun - Mon</span>
                            <span>Closed</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="font-serif text-xl text-softgold flex items-center gap-2 mb-6">
                        <Mail size={18} /> The Inner Circle
                    </h4>
                    <p className="text-xs text-white/60 mb-4">Subscribe for exclusive invites and seasonal hair journals.</p>
                    <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="email" 
                            placeholder="Your email address" 
                            className="w-full bg-white/5 border border-white/10 rounded-none p-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-mauve transition-colors"
                        />
                        <button className="w-full bg-white text-espresso uppercase tracking-widest text-xs font-bold py-3 hover:bg-softgold hover:text-white transition-colors">
                            Join
                        </button>
                    </form>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/40 font-sans tracking-widest uppercase">
                <p>© 2024 Wip downtown. ALL RIGHTS RESERVED.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white">Privacy</a>
                    <a href="#" className="hover:text-white">Terms</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;