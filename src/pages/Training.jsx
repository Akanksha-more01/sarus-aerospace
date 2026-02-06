import { GraduationCap, Shield, Cog, CheckCircle2, ArrowRight } from 'lucide-react';
import { getAssetPath } from '../utils/assets';

const Training = () => {
    const courses = [
        {
            icon: GraduationCap,
            title: "DGCA Certified Pilot training",
            description: "Become a certified Remote Pilot with our DGCA-compliant training program. Focused on safe and expert operations of small category drones.",
            details: [
                "Classroom Training (Theory)",
                "Simulation Training",
                "Flight Training (Dual & Solo)",
                "DGCA Remote Pilot License"
            ],
            duration: "5 Days",
            type: "Small Category (2kg-25kg)"
        },
        {
            icon: Shield,
            title: "Safety & Emergency Ops",
            description: "Advanced safety protocols for complex mission environments, including night flying and emergency recovery procedures.",
            details: [
                "Airspace Management",
                "Advanced Safety Protocols",
                "Emergency Maneuvers",
                "Weather Analysis"
            ],
            duration: "2 Days",
            type: "Advanced Module"
        },
        {
            icon: Cog,
            title: "Maintenance & Troubleshooting",
            description: "Technical training on drone hardware, motor maintenance, battery management, and software calibration.",
            details: [
                "Hardware Diagnostics",
                "Propulsion Systems",
                "Software Calibration",
                "Field Repair Kits"
            ],
            duration: "3 Days",
            type: "Technical Certification"
        },
        {
            icon: CheckCircle2,
            title: "Industrial Application Training",
            description: "Specialized courses for Agriculture (Kisan), Inspection (Torna), and Logistics (Anant) operations.",
            details: [
                "Payload Integration",
                "Mission Planning",
                "Data Analysis",
                "Application Specific Training"
            ],
            duration: "Variable",
            type: "Enterprise Specific"
        }
    ];

    return (
        <div className="bg-secondary min-h-screen text-white">
            {/* Hero Section */}
            <div className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-primary">
                <div className="absolute inset-0 opacity-20">
                    <img src={getAssetPath("training/training-bg.png")} alt="Training Background" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 text-center md:text-left">
                        <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Future of Flight</span>
                        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter uppercase">Drone Pilot <br /><span className="text-accent">Academy</span></h1>
                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-8">
                            Sarus Aerospace is establishing a premier drone pilot training institute to provide enthusiasts and professionals with certification from the <span className="text-white font-bold">Directorate General of Civil Aviation (DGCA)</span>.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <button className="bg-accent px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-xl">Join Next Batch</button>
                            <button className="border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">Download Brochure</button>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="bg-secondary/80 backdrop-blur-md p-2 rounded-[2rem] border border-white/10 shadow-2xl relative">
                            <img src={getAssetPath("training/training-main.png")} alt="Training Center" className="rounded-[1.5rem] w-full h-auto" />
                            <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-2xl shadow-xl hidden lg:block">
                                <p className="text-3xl font-black italic">100%</p>
                                <p className="text-[10px] uppercase font-bold tracking-widest text-white/80">DGCA Compliant</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Program Details Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Explore Our Programs</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive training solutions for every stage of your drone career.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {courses.map((course, index) => (
                        <div key={index} className="bg-primary/30 border border-white/5 rounded-3xl p-10 hover:border-accent/40 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <course.icon className="h-24 w-24 text-accent" />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-accent/10 p-3 rounded-xl">
                                        <course.icon className="h-6 w-6 text-accent" />
                                    </div>
                                    <span className="text-xs bg-white/10 px-3 py-1 rounded-full font-bold uppercase tracking-widest text-accent">{course.type}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    {course.description}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {course.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                                            <CheckCircle2 className="h-4 w-4 text-accent" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <Cog className="h-4 w-4" />
                                        <span className="text-sm">{course.duration}</span>
                                    </div>
                                    <button className="text-accent font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                                        Learn More <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gallery Section */}
            <div className="bg-primary/50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 text-center md:text-left">
                        <div className="mb-8 md:mb-0">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Training in Action</h2>
                            <p className="text-gray-400">Real moments from our training academies across the country.</p>
                        </div>
                        <button className="border border-white/20 px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-all uppercase tracking-widest text-xs">View Full Gallery</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group overflow-hidden rounded-[2rem] border border-white/10">
                            <img src={getAssetPath("training/training1.png")} alt="Training 1" className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="group overflow-hidden rounded-[2rem] border border-white/10 transform md:translate-y-8">
                            <img src={getAssetPath("training/training2.png")} alt="Training 2" className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="group overflow-hidden rounded-[2rem] border border-white/10">
                            <img src={getAssetPath("training/training3.png")} alt="Training 3" className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ/Cta Section */}
            <div className="relative py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-accent skew-y-3 origin-right scale-110 translate-y-12"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center py-12">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase italic">Ready to Take Flight?</h2>
                    <p className="text-xl mb-10 text-white/90">Join the next generation of DGCA certified drone pilots.</p>
                    <div className="flex flex-wrap gap-6 justify-center">
                        <button className="bg-white text-accent px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl uppercase tracking-wider">Apply Now</button>
                        <button className="bg-primary text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-secondary transition-all uppercase tracking-wider">Contact Academy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;
