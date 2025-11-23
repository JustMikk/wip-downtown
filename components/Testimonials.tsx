import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 reveal">
                    <h2 className="font-serif text-4xl text-espresso">Social Proof</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {TESTIMONIALS.map((t, idx) => (
                        <div key={t.id} className={`flex flex-col items-center text-center reveal delay-${idx * 200}`}>
                            <div className="text-mauve mb-6 opacity-50">
                                <Quote size={40} strokeWidth={1} fill="currentColor" className="fill-rosewater" />
                            </div>
                            <p className="font-serif text-xl md:text-2xl text-espresso leading-relaxed mb-8 italic">
                                "{t.text}"
                            </p>
                            <div>
                                <p className="font-sans text-xs font-bold uppercase tracking-widest text-slate mb-1">
                                    {t.author}
                                </p>
                                <p className="font-serif text-mauve italic">
                                    {t.service}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;