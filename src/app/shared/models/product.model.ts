export interface Product {
  id: number;
  name: string;
  category: 'shoes' | 'bags' | 'sunglasses';
  subcategoryShoes?: 'sneakers' | 'shoes' | 'boots';
  subcategorySunglasses?: 'sport' | 'classy' | 'animal print';
  subcategoryBags?: 'handbag' | 'backpack' | 'fanny pack';
  color?: 'black' | 'white' | 'blue' | 'green' | 'brown' | 'red' | 'pink' | 'purple' | 'orange' | 'multicolor';
  season?: 'spring-summer' | 'fall-winter' | 'all-season';
  sizes?: string[];
  /*size?: '5' | '5.5' |'6' |'6.5' |'7' |'7.5' |'8' |'8.5' |'9' |'9.5' |'10' |'10.5';*/
  description: string;
  price: number;
  images: string[];
}
