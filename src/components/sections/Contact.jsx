import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '../ui/button';

const InputField = ({ label, type = "text", placeholder }) => (
    <div className="mb-4">
        <label className="block text-brown-900 dark:text-cream-100 font-inter font-medium mb-2">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            className="w-full px-4 py-3 rounded-lg bg-cream-50 dark:bg-brown-900/50 border border-gold-200 dark:border-brown-700 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all font-inter text-brown-800 dark:text-cream-100"
        />
    </div>
);

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white dark:bg-neutral-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-50/50 dark:bg-brown-900/20 -skew-x-12 transform translate-x-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-gold-600 font-medium uppercase tracking-widest text-sm mb-2 block">Get in Touch</span>
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brown-900 dark:text-cream-100 mb-6">
                            Book Your Appointment
                        </h2>
                        <p className="text-brown-800/70 dark:text-cream-200/70 font-inter mb-10 max-w-md">
                            Ready to transform your smile? Fill out the form below and our team will get back to you immediately to confirm your visit.
                        </p>

                        <form className="bg-white dark:bg-brown-900 p-8 rounded-2xl shadow-xl border border-gold-100 dark:border-brown-800">
                            <div className="grid md:grid-cols-2 gap-4">
                                <InputField label="Full Name" placeholder="John Doe" />
                                <InputField label="Phone Number" type="tel" placeholder="+1 (555) 000-0000" />
                            </div>
                            <InputField label="Email Address" type="email" placeholder="john@example.com" />
                            <div className="mb-4">
                                <label className="block text-brown-900 dark:text-cream-100 font-inter font-medium mb-2">Preferred Date</label>
                                <input type="date" className="w-full px-4 py-3 rounded-lg bg-cream-50 dark:bg-brown-900/50 border border-gold-200 dark:border-brown-700 focus:border-gold-500 outline-none text-brown-800 dark:text-cream-100" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-brown-900 dark:text-cream-100 font-inter font-medium mb-2">Message (Optional)</label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell us about your dental needs..."
                                    className="w-full px-4 py-3 rounded-lg bg-cream-50 dark:bg-brown-900/50 border border-gold-200 dark:border-brown-700 focus:border-gold-500 outline-none transition-all font-inter text-brown-800 dark:text-cream-100"
                                ></textarea>
                            </div>
                            <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white text-lg py-6 font-playfair shadow-lg">
                                Submit Request
                            </Button>
                        </form>
                    </motion.div>

                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-center gap-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gold-100 dark:bg-brown-800 rounded-full flex items-center justify-center shrink-0">
                                <MapPin className="text-gold-600 dark:text-gold-400" size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-playfair font-bold text-brown-900 dark:text-gold-100 mb-1">Our Location</h4>
                                <p className="text-brown-800/70 dark:text-cream-200/70 font-inter">
                                    123 Dental Avenue, Suite 400<br />Beverly Hills, CA 90210
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gold-100 dark:bg-brown-800 rounded-full flex items-center justify-center shrink-0">
                                <Phone className="text-gold-600 dark:text-gold-400" size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-playfair font-bold text-brown-900 dark:text-gold-100 mb-1">Phone Number</h4>
                                <p className="text-brown-800/70 dark:text-cream-200/70 font-inter">
                                    +1 (555) 123-4567<br />+1 (555) 987-6543
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gold-100 dark:bg-brown-800 rounded-full flex items-center justify-center shrink-0">
                                <Mail className="text-gold-600 dark:text-gold-400" size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-playfair font-bold text-brown-900 dark:text-gold-100 mb-1">Email Address</h4>
                                <p className="text-brown-800/70 dark:text-cream-200/70 font-inter">
                                    concierge@smyluxedental.com<br />info@smyluxedental.com
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gold-100 dark:bg-brown-800 rounded-full flex items-center justify-center shrink-0">
                                <Clock className="text-gold-600 dark:text-gold-400" size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-playfair font-bold text-brown-900 dark:text-gold-100 mb-1">Working Hours</h4>
                                <p className="text-brown-800/70 dark:text-cream-200/70 font-inter">
                                    Mon - Fri: 9:00 AM - 7:00 PM<br />Sat: 10:00 AM - 4:00 PM<br />Sun: Closed
                                </p>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-64 bg-cream-100 rounded-2xl mt-8 overflow-hidden shadow-inner border border-gold-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26456.16053303866!2d-118.40698745!3d34.0725597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
