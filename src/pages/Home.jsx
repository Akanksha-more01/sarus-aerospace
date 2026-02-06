import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Rocket, Shield, Globe, Award, ArrowRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-secondary/50 p-8 rounded-xl border border-white/5 hover:border-accent/50 transition-all hover:-translate-y-1 hover:shadow-xl">
        <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
            <Icon className="h-8 w-8 text-accent" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
);

const Home = () => {
    const features = [
        {
            icon: Rocket,
            title: "Advanced Propulsion",
            description: "Developing efficient, next-gen propulsion systems that reduce carbon footprint while maximizing thrust."
        },
        {
            icon: Shield,
            title: "Safety First",
            description: "Our designs prioritize passenger safety above all, meeting and exceeding global aviation standards."
        },
        {
            icon: Globe,
            title: "Global Connectivity",
            description: "Bridging distances with aircraft designed for both regional and international travel."
        },
        {
            icon: Award,
            title: "Engineering Excellence",
            description: "Award-winning engineering teams dedicated to pushing the boundaries of aerodynamics."
        }
    ];

    return (
        <div className="bg-secondary">
            <Hero />

            {/* Features Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Sarus Aerospace?</h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        We combine cutting-edge technology with rigorous safety protocols to deliver superior aviation solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </section>

            {/* Drone Showcase Section */}
            <section className="bg-[#1e293b] border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {/* Left Card - SHOURYA */}
                    <div className="relative group overflow-hidden border-b lg:border-b-0 md:border-r border-white/5 h-[600px] flex flex-col items-center justify-center bg-gradient-to-b from-[#1e293b] to-[#0f172a] p-8">
                        <div className="absolute top-8 left-8 z-20">
                            <Link to="/drone/shourya" className="text-[10px] tracking-widest font-bold text-white border border-white/30 px-6 py-2 rounded-full hover:bg-white/10 transition-colors uppercase">
                                Learn More
                            </Link>
                        </div>
                        <div className="z-10 text-center mt-12 mb-8">
                            <h3 className="text-gray-400 text-xs tracking-[0.2em] mb-2 uppercase">Multiple Payload Compatible VTOL</h3>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#3b82f6] tracking-wider uppercase mb-12">Shourya</h2>
                        </div>
                        <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] transition-transform duration-700 group-hover:scale-105 flex items-center justify-center">
                            <img
                                src="/drones/shourya.png"
                                alt="Shourya VTOL Drone"
                                className="w-full h-full object-contain drop-shadow-2xl opacity-90"
                            />
                        </div>
                    </div>

                    {/* Middle Left Card - TORNA */}
                    <div className="relative group overflow-hidden border-b lg:border-b-0 md:border-r border-white/5 h-[600px] flex flex-col items-center justify-center bg-gradient-to-b from-[#1e293b] to-[#0f172a] p-8">
                        <div className="absolute top-8 left-8 z-20">
                            <Link to="/drone/torna" className="text-[10px] tracking-widest font-bold text-white border border-white/30 px-6 py-2 rounded-full hover:bg-white/10 transition-colors uppercase">
                                Learn More
                            </Link>
                        </div>
                        <div className="z-10 text-center mt-12 mb-8">
                            <h3 className="text-gray-400 text-xs tracking-[0.2em] mb-2 uppercase">Multiple Payload Compatible</h3>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#3b82f6] tracking-wider uppercase mb-12">Torna</h2>
                        </div>
                        <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] transition-transform duration-700 group-hover:scale-105 flex items-center justify-center">
                            <img
                                src="/drones/torna-real.png"
                                alt="Torna Drone"
                                className="w-full h-full object-contain drop-shadow-2xl opacity-90"
                            />
                        </div>
                    </div>

                    {/* Middle Right Card - ANANT */}
                    <div className="relative group overflow-hidden border-b md:border-b-0 lg:border-r border-white/5 h-[600px] flex flex-col items-center justify-center bg-gradient-to-b from-[#1e293b] to-[#0f172a] p-8">
                        <div className="absolute top-8 left-8 z-20">
                            <Link to="/drone/anant" className="text-[10px] tracking-widest font-bold text-white border border-white/30 px-6 py-2 rounded-full hover:bg-white/10 transition-colors uppercase">
                                Learn More
                            </Link>
                        </div>
                        <div className="z-10 text-center mt-12 mb-8">
                            <h3 className="text-gray-400 text-xs tracking-[0.2em] mb-2 uppercase">Heavy Lift Multi-Utility</h3>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#3b82f6] tracking-wider uppercase mb-12">Anant</h2>
                        </div>
                        <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] transition-transform duration-700 group-hover:scale-105 flex items-center justify-center">
                            <img
                                src="/drones/anant-real.png"
                                alt="Anant Drone"
                                className="w-full h-full object-contain drop-shadow-2xl opacity-90"
                            />
                        </div>
                    </div>

                    {/* Right Card - KISAN */}
                    <div className="relative group overflow-hidden h-[600px] flex flex-col items-center justify-center bg-gradient-to-b from-[#1e293b] to-[#0f172a] p-8">
                        <div className="absolute top-8 left-8 z-20">
                            <Link to="/drone/kisan" className="text-[10px] tracking-widest font-bold text-white border border-white/30 px-6 py-2 rounded-full hover:bg-white/10 transition-colors uppercase">
                                Learn More
                            </Link>
                        </div>
                        <div className="z-10 text-center mt-12 mb-8">
                            <h3 className="text-gray-400 text-xs tracking-[0.2em] mb-2 uppercase">Agriculture Drone</h3>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#3b82f6] tracking-wider uppercase mb-12">Kisan</h2>
                        </div>
                        <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] transition-transform duration-700 group-hover:scale-105 flex items-center justify-center">
                            <img
                                src="/drones/kisan-real.png"
                                alt="Kisan Drone"
                                className="w-full h-full object-contain drop-shadow-2xl opacity-90"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
