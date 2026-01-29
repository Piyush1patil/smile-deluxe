import { motion } from "framer-motion";
import { Check, Clock, Shield, Award } from "lucide-react";

export default function About() {
    const features = [
        {
            icon: Award,
            title: "Expert Team",
            description: "Our dentists are highly qualified with years of experience in specialized dental care."
        },
        {
            icon: Shield,
            title: "Modern Technology",
            description: "We use state-of-the-art equipment to ensure precise diagnoses and comfortable treatments."
        },
        {
            icon: Clock,
            title: "Convenient Hours",
            description: "Flexible scheduling including evenings and weekends to fit your busy lifestyle."
        }
    ];

    return (
        <section id="about" className="py-24 bg-background-light dark:bg-background-dark overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="relative">
                            {/* Main Image */}
                            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                                <img
                                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
                                    alt="Modern Dental Clinic Interior"
                                    className="w-full h-auto"
                                />
                            </div>

                            {/* Overlapping Image */}
                            <div className="absolute -bottom-10 -right-10 w-2/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 hidden md:block">
                                <img
                                    src="https://images.unsplash.com/photo-1588776814546-1ffcf4722e12?q=80&w=600&auto=format&fit=crop"
                                    alt="Dentist working"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-sans text-secondary-dark dark:text-white mb-6">
                            Experience the <span className="text-primary">BrightSmile</span> Difference
                        </h2>
                        <p className="text-lg text-text-muted dark:text-slate-400 mb-8">
                            We prioritize your comfort and dental health above all else. Our clinic is designed to provide a relaxing atmosphere where you can feel at ease.
                        </p>

                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <feature.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-secondary-dark dark:text-white mb-2">{feature.title}</h3>
                                        <p className="text-text-muted dark:text-slate-400">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
