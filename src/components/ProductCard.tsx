import React, { useState } from 'react';
import { Product } from '../types';
import { ShoppingCart, Heart, MoreHorizontal, Flag, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ActionMenuItem = ({ 
  icon: Icon, 
  activeIcon: ActiveIcon,
  label, 
  isActive,
  colorClass = "text-gray-700", 
  activeColorClass = "text-sbu-red",
  hoverText = "hover:text-sbu-red" 
}: { 
  icon: any, 
  activeIcon?: any,
  label: string, 
  isActive?: boolean,
  colorClass?: string, 
  activeColorClass?: string,
  hoverText?: string 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const DisplayIcon = (isActive && ActiveIcon) ? ActiveIcon : Icon;

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center gap-2 p-2 rounded-full bg-white shadow-md border border-gray-100 transition-all duration-300 ${isActive ? activeColorClass : colorClass} ${hoverText} relative z-20`}
    >
      <DisplayIcon className="h-4 w-4 shrink-0" />
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="overflow-hidden whitespace-nowrap text-xs font-bold pr-2"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        
        {/* Action Menu */}
        <div 
          className="absolute top-2 right-2 z-10 flex flex-col items-end gap-2"
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          <ActionMenuItem 
            icon={MoreHorizontal} 
            activeIcon={Heart}
            label="Favorite" 
            isActive={isMenuOpen}
          />

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-end gap-2"
              >
                <ActionMenuItem icon={EyeOff} label="Not Interested" />
                <ActionMenuItem 
                  icon={Flag} 
                  label="Report" 
                  colorClass="text-red-600" 
                  activeColorClass="text-red-600"
                  hoverText="hover:text-red-700" 
                />
              </motion.div>
            )}
          </AnimatePresence>
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
