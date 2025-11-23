import React, { useState } from 'react';
import { X, Trash2, Calendar } from 'lucide-react';
import { BookingItem } from '../types';
import { STYLISTS } from '../constants';

interface BookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: BookingItem[];
  onRemoveItem: (index: number) => void;
}

const BookingDrawer: React.FC<BookingDrawerProps> = ({ isOpen, onClose, cart, onRemoveItem }) => {
  const [step, setStep] = useState<'summary' | 'details'>('summary');
  
  const totalPrice = cart.reduce((sum, item) => sum + item.service.price, 0);
  const totalDuration = cart.reduce((sum, item) => sum + item.service.duration, 0);

  const getStylistName = (id?: string) => STYLISTS.find(s => s.id === id)?.name || 'Any Stylist';

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-espresso/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full md:w-[500px] bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out animate-slide-in-right">
        
        {/* Header */}
        <div className="p-6 flex justify-between items-center border-b border-gray-100">
          <h2 className="font-serif text-2xl text-espresso">
            {step === 'summary' ? 'Your Ritual' : 'Finalize Booking'}
          </h2>
          <button onClick={onClose} className="text-slate hover:text-espresso">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
          
          {step === 'summary' ? (
            <>
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate opacity-60 space-y-4">
                  <Calendar size={48} strokeWidth={1} />
                  <p className="font-serif text-xl">Your schedule is open.</p>
                  <p className="text-sm">Add a service to begin.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 bg-rosewater/30 rounded-xl border border-rosewater">
                      <img 
                        src={item.service.imageUrl} 
                        alt={item.service.name} 
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-lg text-espresso">{item.service.name}</h4>
                          <button 
                            onClick={() => onRemoveItem(idx)}
                            className="text-slate/50 hover:text-red-400 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-xs uppercase tracking-wider text-slate mb-1">
                          with {getStylistName(item.stylistId)}
                        </p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm font-medium text-espresso">${item.service.price}</span>
                          <span className="text-xs text-slate">{item.service.duration} min</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-rosewater p-6 rounded-xl mb-6">
                <h3 className="font-serif text-xl mb-2 text-espresso">Appointment Summary</h3>
                <div className="flex justify-between text-sm text-slate mb-1">
                    <span>Services ({cart.length})</span>
                    <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm text-slate">
                    <span>Est. Duration</span>
                    <span>{Math.floor(totalDuration / 60)}h {totalDuration % 60}m</span>
                </div>
                <div className="h-px bg-mauve/30 my-3"></div>
                <div className="flex justify-between font-serif text-lg text-espresso">
                    <span>Total</span>
                    <span>${totalPrice}</span>
                </div>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label className="block text-xs uppercase tracking-widest text-slate mb-2">Full Name</label>
                    <input type="text" disabled placeholder="Jane Doe" className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 text-slate cursor-not-allowed" />
                </div>
                <div>
                    <label className="block text-xs uppercase tracking-widest text-slate mb-2">Email</label>
                    <input type="email" disabled placeholder="jane@example.com" className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 text-slate cursor-not-allowed" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-slate mb-2">Preferred Date</label>
                        <input type="date" disabled className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 text-slate cursor-not-allowed" />
                    </div>
                    <div>
                         <label className="block text-xs uppercase tracking-widest text-slate mb-2">Time</label>
                         <input type="time" disabled className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 text-slate cursor-not-allowed" />
                    </div>
                </div>
                <div className="p-3 bg-yellow-50 text-yellow-800 text-xs rounded-lg border border-yellow-100">
                    * This is a demo application. No actual booking will be made.
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-white">
          {step === 'summary' ? (
            <div className="space-y-4">
               <div className="flex justify-between items-center">
                  <span className="text-slate text-sm">Subtotal</span>
                  <span className="font-serif text-xl text-espresso">${totalPrice}</span>
               </div>
               <button 
                 onClick={() => setStep('details')}
                 disabled={cart.length === 0}
                 className={`w-full py-4 rounded-full text-white font-sans tracking-widest uppercase transition-all ${
                    cart.length > 0 ? 'bg-espresso hover:bg-slate' : 'bg-gray-300'
                 }`}
               >
                 Proceed to Checkout
               </button>
            </div>
          ) : (
             <div className="space-y-4">
                <button 
                 onClick={() => setStep('summary')}
                 className="w-full py-3 text-slate text-sm uppercase tracking-widest hover:text-espresso"
               >
                 Back to Services
               </button>
               <button 
                 className="w-full py-4 rounded-full bg-softgold hover:bg-goldhover text-white font-sans tracking-widest uppercase transition-all shadow-lg"
               >
                 Confirm Request
               </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingDrawer;