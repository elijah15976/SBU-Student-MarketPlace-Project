import { ShoppingCart, User, Search, Menu, Plus } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onSearch: (query: string) => void;
  onOpenCart: () => void;
  onOpenSell: () => void;
}

export default function Navbar({ cartCount, onSearch, onOpenCart, onOpenSell }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-sbu-red/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <div className="flex items-center gap-3">
              <img 
                src="https://145102638.cdn6.editmysite.com/uploads/1/4/5/1/145102638/QX5QZMACPVBAJPHIVVKRWDDT.jpeg"
                alt="SBU Logo" 
                className="h-10 w-auto"
              />
              <span className="hidden md:block text-xl font-black tracking-tighter text-sbu-red uppercase">
                Stony Brook <span className="text-sbu-black">Marketplace</span>
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-sbu-grey placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-sbu-red focus:border-sbu-red sm:text-sm transition-all"
                placeholder="Search for textbooks, dorm gear, etc..."
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={onOpenSell}
              className="flex items-center gap-2 px-4 py-2 bg-sbu-red text-white rounded-full font-bold text-sm hover:bg-sbu-red-dark transition-all shadow-sm hover:shadow-md"
            >
              <Plus className="h-5 w-5" />
              <span className="hidden lg:inline">Sell Item</span>
            </button>
            <button className="p-2 text-gray-600 hover:text-sbu-red transition-colors hidden sm:block">
              <User className="h-6 w-6" />
            </button>
            <button 
              onClick={onOpenCart}
              className="p-2 text-gray-600 hover:text-sbu-red transition-colors relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-sbu-red rounded-full"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>
            <button className="p-2 text-gray-600 hover:text-sbu-red transition-colors md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
