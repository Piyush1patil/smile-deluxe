import React from 'react';
import { motion } from 'framer-motion';
import { Frown, Ban, Smile, ShieldCheck, ArrowRight } from 'lucide-react';

const HelpCard = ({ title, icon: Icon, color, delay }) => {
    const isTeal = color === 'teal';
    const mainColor = isTeal ? 'text-dental-teal' : 'text-dental-purple';
    const borderColor = isTeal ? 'border-dental-purple' : 'border-dental-teal';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="flex flex-col items-center group cursor-pointer"
        >
            <div className={`relative w-24 h-24 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                {/* Dotted border ring */}
                <div className={`absolute inset-0 rounded-full border-2 border-dotted ${borderColor} opacity-60 scale-110 group-hover:rotate-45 transition-transform duration-700`}></div>

                {/* Inner solid circle */}
                <div className={`w-full h-full rounded-full ${isTeal ? 'bg-dental-teal' : 'bg-dental-purple'} flex items-center justify-center text-white shadow-lg`}>
                    <Icon size={40} strokeWidth={1.5} />
                </div>
            </div>

            <h3 className="text-xl font-inter font-medium text-brown-900 mb-2 text-center">{title}</h3>
            <ArrowRight className={`w-6 h-6 ${mainColor} opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`} />
        </motion.div>
    );
};

const HelpSection = () => {
    const cards = [
        { title: "I'm In Pain", icon: Frown, color: 'teal' },
        { title: "I Have Missing Teeth", icon: Ban, color: 'purple' },
        { title: "I Want Better Smile", icon: Smile, color: 'teal' },
        { title: "I Want To Be Cavity Free", icon: ShieldCheck, color: 'purple' },
    ];

    return (
        <section className="py-20 bg-cream-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gold-600 font-medium uppercase tracking-widest mb-2"
                    >
                        Smyle Big Smyle XL
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-playfair font-bold text-brown-900"
                    >
                        HELP US TO HELP YOU!
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        className="h-1 w-24 bg-gold-400 mx-auto mt-6 rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
                    {cards.map((card, index) => (
                        <HelpCard key={index} {...card} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HelpSection;
