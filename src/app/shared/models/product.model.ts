export interface Product {
  id: number;
  name: string;
  category: 'shoes' | 'bags' | 'sunglasses';
  description: string;
  price: number;
  images: string[];
}
