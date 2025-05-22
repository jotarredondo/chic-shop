export interface CartItem {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  selectedSize?: string | null;
  selectedColor?: string | null;
  image: string;
}
