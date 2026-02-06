import { ArrowRight } from 'lucide-react';
import { getAssetPath } from '../utils/assets';

const ProductCard = ({ title, category, image, description }) => (
    <div className="bg-primary rounded-xl overflow-hidden border border-white/5 hover:border-accent/50 transition-all group">
        <div className="h-48 overflow-hidden relative">
            <img src={getAssetPath(image)} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {category}
            </div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 mb-4 text-sm line-clamp-3">{description}</p>
            <button className="text-accent text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                View Details <ArrowRight className="h-4 w-4" />
            </button>
        </div>
    </div>
);

const Products = () => {
    const products = [
        {
            title: "Shourya",
            category: "VTOL Drone",
            image: "drones/shourya.png",
            description: "High-performance fixed-wing VTOL drone designed for long-range surveillance and payload delivery."
        },
        {
            title: "Torna",
            category: "Multirotor Drone",
            image: "drones/torna.png",
            description: "Versatile multi-rotor drone optimized for stability and precise inspection tasks in various environments."
        },
        {
            title: "Kisan",
            category: "Agriculture",
            image: "drones/kisan.png",
            description: "Specialized agricultural drone for precision spraying, crop monitoring, and yield maximization."
        },
        {
            title: "Anant",
            category: "Defense/Industrial",
            image: "products/anant.png",
            description: "Anant is a heavy-lift multi-utility drone designed for high-endurance missions and versatile payload integration."
        },

    ];

    return (
        <div className="bg-secondary min-h-screen">
            <div className="bg-primary py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Products</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Cutting-edge aerospace solutions tailored for modern aviation needs.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
