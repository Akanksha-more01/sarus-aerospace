import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-drone.png"
                    alt="Aerospace Background"
                    className="w-full h-full object-cover blur-sm scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/40"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full">
                <div className="max-w-3xl animate-slide-up">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Innovating the Future of <span className="text-accent">Aerospace</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                        Sarus Aerospace is dedicated to designing and manufacturing next-generation aircraft and sustainable aviation solutions for a connected world.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/products"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30"
                        >
                            Explore Our Solutions
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 border border-gray-400 text-base font-medium rounded-md text-white hover:bg-white/10 transition-all"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
