import React, { useState } from 'react';
import { ArrowLeft, Clock, Check, Star } from 'lucide-react';
import { Service, Stylist } from '../types';
import { STYLISTS } from '../constants';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
  onAddToCart: (service: Service, stylistId?: string) => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack, onAddToCart }) => {
  const [selectedStylistId, setSelectedStylistId] = useState<string>('');

  return (
    <div className="pt-24 pb-20 min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate hover:text-espresso transition-colors mb-8 font-sans text-sm uppercase tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Menu
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left: Visuals */}
          <div className="space-y-6">
            <div className="rounded-t-[10rem] rounded-b-2xl overflow-hidden h-[600px] shadow-2xl relative">
              <img 
                src={service.imageUrl} 
                alt={service.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20"></div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="pt-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-rosewater text-espresso px-3 py-1 rounded-full text-xs uppercase tracking-wider font-bold">
                {service.category}
              </span>
              <span className="flex items-center gap-1 text-slate text-sm">
                <Clock size={14} /> {service.duration} mins
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl text-espresso mb-6 leading-tight">
              {service.name}
            </h1>

            <p className="text-lg text-slate font-light leading-relaxed mb-8 border-l-4 border-softgold pl-6">
              {service.fullDescription}
            </p>

            <div className="mb-10">
              <h3 className="font-serif text-2xl text-espresso mb-4">The Benefits</h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate font-sans font-light">
                    <span className="bg-green-100 text-green-700 rounded-full p-1">
                      <Check size={12} />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-serif text-xl text-espresso mb-4">Customize Your Experience</h3>
              
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-widest text-slate mb-3">Select Artist</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {STYLISTS.map(stylist => (
                    <div 
                      key={stylist.id}
                      onClick={() => setSelectedStylistId(stylist.id)}
                      className={`cursor-pointer rounded-xl p-3 border transition-all flex flex-col items-center text-center ${
                        selectedStylistId === stylist.id 
                          ? 'border-mauve bg-rosewater' 
                          : 'border-gray-200 hover:border-mauve/50'
                      }`}
                    >
                      <img 
                        src={stylist.avatarUrl} 
                        alt={stylist.name} 
                        className="w-12 h-12 rounded-full object-cover mb-2"
                      />
                      <p className="text-sm font-medium text-espresso">{stylist.name}</p>
                      <p className="text-[10px] text-slate uppercase">{stylist.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                 <div>
                    <p className="text-xs uppercase tracking-widest text-slate">Total Investment</p>
                    <p className="font-serif text-3xl text-espresso">${service.price}</p>
                 </div>
                 <button 
                   onClick={() => onAddToCart(service, selectedStylistId)}
                   disabled={!selectedStylistId}
                   className={`px-8 py-4 rounded-full text-white font-sans tracking-widest uppercase transition-all shadow-lg ${
                     selectedStylistId 
                      ? 'bg-espresso hover:bg-slate cursor-pointer hover:shadow-xl' 
                      : 'bg-gray-300 cursor-not-allowed'
                   }`}
                 >
                   {selectedStylistId ? 'Add to Booking' : 'Select Stylist'}
                 </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;