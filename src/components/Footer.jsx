import { Plane, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAssetPath } from '../utils/assets';

const Footer = () => {
    return (
        <footer className="bg-primary text-gray-300 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <img src={getAssetPath("sarus-logo.png")} alt="Sarus Aerospace Logo" className="h-8 w-auto brightness-0 invert" />
                            <span className="text-white font-bold text-lg tracking-wider">SARUS AEROSPACE</span>
                        </div>
                        <p className="text-sm text-gray-400">
                            Pioneering the future of aviation with advanced engineering and sustainable solutions.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link to="/products" className="hover:text-accent transition-colors">Products</Link></li>
                            <li><Link to="/training" className="hover:text-accent transition-colors">Training</Link></li>
                            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-accent transition-colors">Aircraft Design</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Aerospace Engineering</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Consultancy</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Maintenance</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Info</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-accent" />
                                <span>Headquarters, Tech Park, India</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-accent" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-accent" />
                                <span>info@sarusaerospace.in</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Sarus Aerospace. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
