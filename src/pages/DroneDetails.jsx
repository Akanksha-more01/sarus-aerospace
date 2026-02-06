import { useParams, Link } from 'react-router-dom';
import { droneData } from '../data/droneData';
import { ArrowLeft, CheckCircle, ShieldCheck, Zap, Activity } from 'lucide-react';

const DroneDetails = () => {
    const { id } = useParams();
    const drone = droneData[id?.toLowerCase()];

    if (!drone) {
        return (
            <div className="min-h-screen bg-secondary flex items-center justify-center text-white px-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Drone Not Found</h1>
                    <p className="text-gray-400 mb-8">The drone you are looking for doesn't exist or has been moved.</p>
                    <Link to="/" className="text-accent flex items-center justify-center gap-2 hover:underline">
                        <ArrowLeft className="h-4 w-4" /> Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-secondary min-h-screen text-white">
            {/* Header */}
            <div className="bg-primary/50 border-b border-white/5 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <Link to="/" className="text-gray-400 hover:text-white flex items-center gap-2 mb-8 transition-colors group">
                        <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div>
                            <span className="text-accent font-semibold tracking-wider uppercase text-sm">{drone.category}</span>
                            <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-4 uppercase tracking-tight">{drone.name}</h1>
                            <p className="text-xl text-gray-400">{drone.tagline}</p>
                        </div>
                        <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
                            <div className="flex items-center gap-3 text-accent mb-2">
                                <ShieldCheck className="h-6 w-6" />
                                <span className="font-bold">Enterprise Ready</span>
                            </div>
                            <p className="text-sm text-gray-400">Tested and certified for industrial use.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Image Section */}
                    <div className="sticky top-24">
                        <div className="bg-primary/30 rounded-3xl p-8 border border-white/5 relative group">
                            <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img
                                src={drone.image}
                                alt={drone.name}
                                className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
                            />
                        </div>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12">
                            {Object.entries(drone.specs).map(([label, value]) => (
                                <div key={label} className="bg-primary/50 p-4 rounded-xl border border-white/5 text-center">
                                    <p className="text-gray-500 text-xs uppercase font-bold mb-1">{label}</p>
                                    <p className="text-lg font-bold text-white">{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Activity className="h-6 w-6 text-accent" /> Overview
                            </h2>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {drone.description}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Zap className="h-6 w-6 text-accent" /> Key Features
                            </h2>
                            <div className="space-y-4">
                                {drone.features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-4 bg-primary/20 p-4 rounded-lg border border-white/5">
                                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-300">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-6">Applications</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {drone.applications.map((app, index) => (
                                    <div key={index} className="border border-white/10 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                        <p className="font-semibold">{app}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-accent p-8 rounded-3xl text-center">
                            <h3 className="text-xl font-bold mb-4">Interested in {drone.name}?</h3>
                            <button className="bg-white text-accent px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl">
                                Request a Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DroneDetails;
