import { CATEGORIES } from '../data';

interface SidebarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
}

export default function Sidebar({ 
  selectedCategory, 
  onSelectCategory, 
  priceRange, 
  onPriceChange 
}: SidebarProps) {
  return (
    <aside className="w-64 flex-shrink-0 hidden lg:block">
      <div className="sticky top-20 space-y-8">
        {/* Categories */}
        <div>
          <h3 className="text-sm font-bold text-sbu-red uppercase tracking-widest mb-4 border-b-2 border-sbu-red/20 pb-1">
            Categories
          </h3>
          <ul className="space-y-1">
            {CATEGORIES.map((category) => (
              <li key={category}>
                <button
                  onClick={() => onSelectCategory(category)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-sbu-red text-white shadow-md shadow-sbu-red/20'
                      : 'text-gray-600 hover:bg-sbu-red/5 hover:text-sbu-red'
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Filter */}
        <div>
          <h3 className="text-sm font-bold text-sbu-red uppercase tracking-widest mb-4 border-b-2 border-sbu-red/20 pb-1">
            Price Range
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => onPriceChange([Number(e.target.value), priceRange[1]])}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-sbu-red focus:border-sbu-red"
                placeholder="Min"
              />
              <span className="text-gray-400">-</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => onPriceChange([priceRange[0], Number(e.target.value)])}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-sbu-red focus:border-sbu-red"
                placeholder="Max"
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>$0</span>
              <span>$500+</span>
            </div>
          </div>
        </div>

        {/* Condition Filter (Bonus) */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
            Condition
          </h3>
          <div className="space-y-2">
            {['New', 'Like New', 'Good', 'Fair'].map((condition) => (
              <label key={condition} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="rounded text-sbu-red focus:ring-sbu-red" />
                <span className="text-sm text-gray-600 group-hover:text-sbu-red transition-colors">
                  {condition}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
