import { Product } from './types';

export const CATEGORIES = [
  'All',
  'Textbooks',
  'Dorm Essentials',
  'Electronics',
  'Graduation',
  'Clothing',
  'Other'
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Calculus: Early Transcendentals',
    price: 45,
    category: 'Textbooks',
    description: 'Used for MAT 131/132. Good condition, some highlighting.',
    image: 'https://picsum.photos/seed/calculus/400/400',
    condition: 'Good'
  },
  {
    id: '2',
    name: 'Mini Fridge - Black',
    price: 60,
    category: 'Dorm Essentials',
    description: 'Compact fridge, perfect for West Apartments or dorms. Works perfectly.',
    image: 'https://picsum.photos/seed/fridge/400/400',
    condition: 'Like New'
  },
  {
    id: '3',
    name: 'SBU Graduation Cap & Gown',
    price: 35,
    category: 'Graduation',
    description: 'Size 5\'6" - 5\'8". Worn once for May 2025 ceremony.',
    image: 'https://picsum.photos/seed/gown/400/400',
    condition: 'Like New'
  },
  {
    id: '4',
    name: 'Twin XL Mattress Topper',
    price: 25,
    category: 'Dorm Essentials',
    description: 'Memory foam topper. Sanitized and ready for a new home.',
    image: 'https://picsum.photos/seed/mattress/400/400',
    condition: 'Good'
  },
  {
    id: '5',
    name: 'TI-84 Plus CE Graphing Calculator',
    price: 80,
    category: 'Electronics',
    description: 'Essential for STEM majors. Includes charger.',
    image: 'https://picsum.photos/seed/calculator/400/400',
    condition: 'Like New'
  },
  {
    id: '6',
    name: 'Stony Brook Red Hoodie',
    price: 20,
    category: 'Clothing',
    description: 'Size Medium. Very soft, barely worn.',
    image: 'https://picsum.photos/seed/hoodie/400/400',
    condition: 'Like New'
  },
  {
    id: '7',
    name: 'Desk Lamp with USB Port',
    price: 15,
    category: 'Dorm Essentials',
    description: 'LED lamp with adjustable brightness and charging port.',
    image: 'https://picsum.photos/seed/lamp/400/400',
    condition: 'Good'
  },
  {
    id: '8',
    name: 'Organic Chemistry Model Kit',
    price: 20,
    category: 'Textbooks',
    description: 'Helpful for CHE 321/322. All pieces included.',
    image: 'https://picsum.photos/seed/modelkit/400/400',
    condition: 'Like New'
  },
  {
    id: '9',
    name: 'Electric Kettle',
    price: 18,
    category: 'Dorm Essentials',
    description: 'Fast boiling, auto shut-off. Great for tea or ramen.',
    image: 'https://picsum.photos/seed/kettle/400/400',
    condition: 'Good'
  },
  {
    id: '10',
    name: 'Graduation Stole - Class of 2025',
    price: 15,
    category: 'Graduation',
    description: 'Official SBU red stole.',
    image: 'https://picsum.photos/seed/stole/400/400',
    condition: 'New'
  },
  {
    id: '11',
    name: 'Monitor 24" Dell',
    price: 75,
    category: 'Electronics',
    description: '1080p monitor, HDMI/DP inputs. Includes stand.',
    image: 'https://picsum.photos/seed/monitor/400/400',
    condition: 'Good'
  },
  {
    id: '12',
    name: 'Laundry Hamper with Wheels',
    price: 12,
    category: 'Dorm Essentials',
    description: 'Collapsible hamper, easy to transport to laundry room.',
    image: 'https://picsum.photos/seed/hamper/400/400',
    condition: 'Fair'
  }
];
