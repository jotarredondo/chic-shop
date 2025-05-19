export interface Product {
  id: number;
  name: string;
  category: 'zapatos' | 'carteras' | 'lentes';
  description: string;
  price: number;
  images: string[];
}
