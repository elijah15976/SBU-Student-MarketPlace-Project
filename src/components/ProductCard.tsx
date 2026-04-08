import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      className="group bg-white border border-gray-200 hover:border-sbu-red/50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-2 right-2">
          <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-sbu-red transition-colors shadow-sm">
            <Heart className="h-4 w-4" />
          </button>
        </div>
        <div className="absolute bottom-2 left-2">
          <span className="px-2 py-1 bg-sbu-black/60 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded">
            {product.condition}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-sbu-red transition-colors">
            {product.name}
          </h3>
          <span className="text-lg font-bold text-sbu-red flex-shrink-0">
            ${product.price}
          </span>
        </div>
        
        <p className="text-xs text-gray-500 line-clamp-2 h-8">
          {product.description}
        </p>

        <div className="pt-2">
          <button
            onClick={() => onAddToCart(product)}
            className="w-full flex items-center justify-center gap-2 bg-sbu-red hover:bg-sbu-red-dark text-white font-bold py-2.5 px-4 rounded-lg transition-all duration-200 text-sm shadow-sm hover:shadow-md"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
