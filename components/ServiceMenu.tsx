import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';

interface ServiceMenuProps {
  onSelectService: (service: Service) => void;
}

const ServiceMenu: React.FC<ServiceMenuProps> = ({ onSelectService }) => {
  const [filter, setFilter] = useState<'All' | 'Cut' | 'Color' | 'Styling' | 'Smoothing' | 'Treatment'>('All');

  const [showAll, setShowAll] = useState(false);

  const allFilteredServices = filter === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === filter);

  const displayedServices = showAll ? allFilteredServices : allFilteredServices.slice(0, 6);

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto" id="menu">
      <div className="text-center mb-20 reveal">
        <h2 className="font-serif text-5xl md:text-6xl text-espresso mb-6">Our Rituals</h2>
        <div className="w-px h-16 bg-softgold mx-auto mb-8"></div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4">
          {['All', 'Cut', 'Color', 'Styling', 'Smoothing', 'Treatment'].map((cat) => (
            <button
              key={cat}
              onClick={() => { setFilter(cat as any); setShowAll(false); }}
              className={`px-8 py-3 rounded-full text-xs uppercase font-sans tracking-widest transition-all duration-500 border border-transparent ${filter === cat
                ? 'bg-espresso text-white shadow-xl transform -translate-y-1'
                : 'bg-white text-slate hover:border-mauve/30 hover:text-mauve'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
        {displayedServices.map((service, idx) => (
          <div
            key={service.id}
            onClick={() => onSelectService(service)}
            className={`group cursor-pointer bg-transparent reveal`}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div className="relative h-[400px] overflow-hidden rounded-t-[50%] rounded-b-xl mb-6 shadow-sm group-hover:shadow-2xl transition-shadow duration-500 transform-gpu isolation-auto">
              <img
                src={service.imageUrl}
                alt={service.name}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>

              {/* Price Tag */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur px-5 py-2 rounded-full font-serif text-xl text-espresso shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                ${service.price}
              </div>
            </div>

            <div className="text-center px-4">
              <h3 className="font-serif text-3xl text-espresso mb-2 group-hover:text-mauve transition-colors">{service.name}</h3>
              <p className="text-slate font-sans font-light text-sm leading-relaxed mb-4 line-clamp-2">
                {service.description}
              </p>
              <div className="inline-block overflow-hidden">
                <span className="block text-[10px] font-bold text-softgold uppercase tracking-widest transform translate-y-0 group-hover:-translate-y-full transition-transform duration-300">
                  View Details
                </span>
                <span className="block text-[10px] font-bold text-mauve uppercase tracking-widest transform translate-y-full group-hover:-translate-y-full transition-transform duration-300">
                  Book Now
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      {allFilteredServices.length > 6 && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-block px-10 py-4 border border-espresso text-espresso font-sans text-xs uppercase tracking-[0.2em] hover:bg-espresso hover:text-white transition-all duration-500"
          >
            {showAll ? 'View Less' : 'View All Rituals'}
          </button>
        </div>
      )}
    </section>
  );
};

export default ServiceMenu;