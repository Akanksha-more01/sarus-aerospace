import { getAssetPath } from '../utils/assets';

const About = () => {
    return (
        <div className="bg-secondary min-h-screen">
            {/* Header */}
            <div className="bg-primary py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <img src={getAssetPath("sarus-logo.png")} alt="Sarus Aerospace Logo" className="h-20 w-auto mx-auto mb-6 brightness-0 invert" />
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Sarus Aerospace</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Visionaries in aerospace engineering, committed to building a sustainable future for aviation.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto mb-20">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                        <div className="prose prose-invert text-gray-300 space-y-4">
                            <p>
                                Sarus Aerospace was founded with a singular vision: to revolutionize the aerospace industry through indigenous innovation and cutting-edge technology.
                            </p>
                            <p>
                                Led by R.K. Patil, our team comprises industry veterans and brilliant young engineers working together to design aircraft that are not only high-performing but also environmentally responsible.
                            </p>
                            <p>
                                We believe in the power of engineering to solve global challenges. From advanced propulsion systems to lightweight composite materials, every aspect of our work is driven by a passion for excellence.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Vision & Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-primary p-8 rounded-xl border border-white/5">
                        <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                        <p className="text-gray-400">
                            To be a global leader in aerospace innovation, delivering sustainable and safe aviation solutions that connect the world.
                        </p>
                    </div>
                    <div className="bg-primary p-8 rounded-xl border border-white/5">
                        <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                        <p className="text-gray-400">
                            To design, develop, and manufacture advanced aircraft systems through continuous research, fostering indigenous talent, and adhering to the highest standards of safety and quality.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
