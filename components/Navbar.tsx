import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (view: 'home' | 'menu') => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTeam = () => {
      document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <h1 className="font-serif text-2xl md:text-3xl tracking-[0.1em] text-espresso relative z-50 font-medium">
            Wip <span className="font-light italic text-mauve">downtown</span>
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-espresso font-sans text-xs uppercase tracking-[0.15em] font-medium">
          <button onClick={() => onNavigate('menu')} className="hover:text-mauve transition-colors relative group">
            Menu
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-mauve transition-all group-hover:w-full"></span>
          </button>
          <button onClick={scrollToTeam} className="hover:text-mauve transition-colors relative group">
            The Team
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-mauve transition-all group-hover:w-full"></span>
          </button>
          
          <button 
            onClick={onOpenCart}
            className="relative flex items-center gap-2 bg-espresso text-white px-8 py-3 rounded-full hover:bg-slate transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <span>Book Now</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-softgold text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-6">
          <button onClick={onOpenCart} className="relative text-espresso">
             <ShoppingBag size={24} strokeWidth={1.5} />
             {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-mauve text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-espresso z-50">
            {isMobileMenuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-xl transition-transform duration-500 ease-in-out flex flex-col justify-center items-center z-40 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="flex flex-col gap-8 items-center text-espresso font-serif text-3xl">
            <button onClick={() => { onNavigate('menu'); setIsMobileMenuOpen(false); }}>Menu</button>
            <button onClick={scrollToTeam}>Stylists</button>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;