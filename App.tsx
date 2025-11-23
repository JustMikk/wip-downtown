import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceMenu from './components/ServiceMenu';
import ServiceDetail from './components/ServiceDetail';
import BookingDrawer from './components/BookingDrawer';
import TeamSection from './components/TeamSection';
import Lookbook from './components/Lookbook'; // This is now Visual Proof
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';
import { Service, BookingItem } from './types';

const App: React.FC = () => {
  // State
  const [currentView, setCurrentView] = useState<'home' | 'menu' | 'service-detail'>('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [cart, setCart] = useState<BookingItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Handlers
  const navigateTo = (view: 'home' | 'menu') => {
    setCurrentView(view);
    if (view === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'menu') {
        if (currentView === 'home') {
             document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
        } else {
             setTimeout(() => {
                 document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
             }, 100);
        }
    }
  };

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setCurrentView('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (service: Service, stylistId?: string) => {
    setCart([...cart, { service, stylistId }]);
    setIsDrawerOpen(true);
  };

  const handleRemoveFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div className="min-h-screen bg-rosewater font-sans selection:bg-mauve selection:text-white">
      
      <Navbar 
        cartCount={cart.length} 
        onOpenCart={() => setIsDrawerOpen(true)}
        onNavigate={navigateTo}
      />

      <main>
        {currentView === 'home' && (
          <>
            <Hero />
            <ServiceMenu onSelectService={handleServiceSelect} />
            <TeamSection />
            <Lookbook />
            <Testimonials />
          </>
        )}

        {currentView === 'menu' && (
            <div className="pt-20">
                <ServiceMenu onSelectService={handleServiceSelect} />
            </div>
        )}

        {currentView === 'service-detail' && selectedService && (
          <ServiceDetail 
            service={selectedService} 
            onBack={() => setCurrentView('home')}
            onAddToCart={handleAddToCart}
          />
        )}
      </main>

      <Footer />

      <BookingDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)}
        cart={cart}
        onRemoveItem={handleRemoveFromCart}
      />

      <AIConsultant />
      
    </div>
  );
};

export default App;