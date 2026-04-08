import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Camera, DollarSign, Tag, FileText } from 'lucide-react';
import { CATEGORIES } from '../data';

interface SellItemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SellItemModal({ isOpen, onClose }: SellItemModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'Other',
    description: '',
    condition: 'Good'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert('Item posted successfully! (Demo only)');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 m-auto w-full max-w-lg h-fit bg-white rounded-2xl shadow-2xl z-[110] overflow-hidden"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-sbu-red text-white">
              <h2 className="text-xl font-bold">Post an Item for Sale</h2>
              <button 
                onClick={onClose}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Image Upload Placeholder */}
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center gap-2 hover:border-sbu-red/50 transition-colors cursor-pointer bg-gray-50">
                <Camera className="h-8 w-8 text-gray-400" />
                <span className="text-sm font-medium text-gray-500">Add Photos</span>
                <span className="text-xs text-gray-400">Drag and drop or click to upload</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Item Name
                  </label>
                  <div className="relative">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      required
                      type="text"
                      className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sbu-red/20 focus:border-sbu-red outline-none transition-all"
                      placeholder="What are you selling?"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                      Price
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        required
                        type="number"
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sbu-red/20 focus:border-sbu-red outline-none transition-all"
                        placeholder="0.00"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                      Category
                    </label>
                    <select
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sbu-red/20 focus:border-sbu-red outline-none transition-all appearance-none"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      {CATEGORIES.filter(c => c !== 'All').map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Description
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <textarea
                      required
                      rows={3}
                      className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sbu-red/20 focus:border-sbu-red outline-none transition-all resize-none"
                      placeholder="Describe your item (condition, usage, etc.)"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Condition
                  </label>
                  <div className="flex gap-2">
                    {['New', 'Like New', 'Good', 'Fair'].map((cond) => (
                      <button
                        key={cond}
                        type="button"
                        onClick={() => setFormData({ ...formData, condition: cond })}
                        className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-all ${
                          formData.condition === cond
                            ? 'bg-sbu-red border-sbu-red text-white'
                            : 'bg-white border-gray-200 text-gray-500 hover:border-sbu-red/30'
                        }`}
                      >
                        {cond}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-sbu-red hover:bg-sbu-red-dark text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-sbu-red/20 mt-4"
              >
                Post Item
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
