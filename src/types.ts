export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  condition: 'New' | 'Like New' | 'Good' | 'Fair';
}

export interface CartItem extends Product {
  quantity: number;
}
