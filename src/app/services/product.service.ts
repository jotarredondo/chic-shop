import { Injectable } from '@angular/core';
import {Product} from '../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Trinity White',
      category: 'shoes',
      subcategoryShoes: 'boots',
      colors: ['white'],
      sizes: ['5','5.5','6','6.5','7','7.5','8','8.5','9'],
      description: 'Sleek white leather ankle boots for bold looks.',
      price: 420,
      images: [
        'assets/img/ZAPATOS/1/1-5.jpg',
        'assets/img/ZAPATOS/1/1-3.jpg',
        'assets/img/ZAPATOS/1/1-4.jpg',
        'assets/img/ZAPATOS/1/1-2.jpg',
        'assets/img/ZAPATOS/1/1-1.jpg'
      ]
    },
    {
      id: 2,
      name: 'Modern Loraine',
      category: 'shoes',
      colors: ['white'],
      sizes: ['5','5.5','6','6.5','7','7.5','8','8.5','9','9.5','10'],
      subcategoryShoes: 'sneakers',
      description: 'Modern sneakers with soft Italian leather finish.',
      price: 300,
      images: [
        'assets/img/ZAPATOS/2/2-1.jpg',
        'assets/img/ZAPATOS/2/2-2.jpg',
        'assets/img/ZAPATOS/2/2-3.jpg'
      ]
    },
    {
      id: 3,
      name: 'Summer Loren',
      category: 'shoes',
      subcategoryShoes: 'shoes',
      colors: ['brown', 'black'],
      sizes: ['5','5.5','6','6.5','7','7.5','8','8.5','9'],
      description: 'Versatile summer shoes in dual-tone leather.',
      price: 250,
      images: [
        'assets/img/ZAPATOS/3/3-1.jpg',
        'assets/img/ZAPATOS/3/3-2.jpg',
        'assets/img/ZAPATOS/3/3-3.jpg',
        'assets/img/ZAPATOS/3/3-4.jpg',
        'assets/img/ZAPATOS/3/3-5.jpg'
      ]
    },
    {
      id: 4,
      name: 'Classies High',
      category: 'shoes',
      subcategoryShoes: 'shoes',
      colors: ['blue'],
      sizes: ['5','5.5','6','6.5','7','7.5','8','8.5'],
      description: 'Elegant blue shoes with a high-gloss finish.',
      price: 320,
      images: [
        'assets/img/ZAPATOS/4/4-2.jpg',
        'assets/img/ZAPATOS/4/4-1.jpg'
      ]
    },
    {
      id: 5,
      name: 'Classies Full',
      category: 'shoes',
      subcategoryShoes: 'shoes',
      colors: ['brown'],
      sizes: ['5.5','6','6.5','7','7.5','8','8.5','9','9.5'],
      description: 'Classic brown leather shoes with full coverage.',
      price: 380,
      images: [
        'assets/img/ZAPATOS/5/5-1.jpg',
        'assets/img/ZAPATOS/5/5-2.jpg',
        'assets/img/ZAPATOS/5/5-3.jpg',
        'assets/img/ZAPATOS/5/5-4.jpg',
        'assets/img/ZAPATOS/5/5-5.jpg',
        'assets/img/ZAPATOS/5/5-6.jpg'
      ]
    },
    {
      id: 6,
      name: 'Court Love',
      category: 'shoes',
      subcategoryShoes: 'sneakers',
      colors: ['blue'],
      sizes: ['6','6.5','7','7.5','8','8.5','9','9.5','10','10.5'],
      description: 'Casual blue sneakers for everyday comfort.',
      price: 270,
      images: [
        'assets/img/ZAPATOS/6/6-2.jpg',
        'assets/img/ZAPATOS/6/6-1.jpg',
        'assets/img/ZAPATOS/6/6-3.jpg',
        'assets/img/ZAPATOS/6/6-4.jpg'
      ]
    },
    {
      id: 7,
      name: 'Shiff Summer',
      category: 'shoes',
      subcategoryShoes: 'shoes',
      colors: ['brown'],
      sizes: ['5','5.5','6','6.5','7','7.5','8','8.5','9'],
      description: 'Chic summer loafers with breathable design.',
      price: 300,
      images: [
        'assets/img/ZAPATOS/7/7-1.jpg',
        'assets/img/ZAPATOS/7/7-2.jpg',
        'assets/img/ZAPATOS/7/7-3.jpg'
      ]
    },
    {
      id: 11,
      name: 'Barb Summer',
      category: 'sunglasses',
      subcategorySunglasses: 'sport',
      colors: ['blue'],
      description: 'Sporty blue sunglasses for active lifestyles.',
      price: 160,
      images: [
        'assets/img/SUNGLASSES/1/1-1.jpg',
        'assets/img/SUNGLASSES/1/1-2.jpg',
        'assets/img/SUNGLASSES/1/1-3.jpg'
      ]
    },
    {
      id: 12,
      name: 'Classy Amanda',
      category: 'sunglasses',
      subcategorySunglasses: 'classy',
      colors: ['black'],
      description: 'Elegant black frame sunglasses for sunny days.',
      price: 180,
      images: [
        'assets/img/SUNGLASSES/4/4-1.jpg',
        'assets/img/SUNGLASSES/4/4-2.jpg',
        'assets/img/SUNGLASSES/4/4-3.jpg'
      ]
    },
    {
      id: 13,
      name: 'Monique Green',
      category: 'sunglasses',
      subcategorySunglasses: 'sport',
      colors: ['green'],
      description: 'Green sport sunglasses with UV protection.',
      price: 170,
      images: [
        'assets/img/SUNGLASSES/3/3-1.jpg',
        'assets/img/SUNGLASSES/3/3-2.jpg',
        'assets/img/SUNGLASSES/3/3-3.jpg',
        'assets/img/SUNGLASSES/3/3-4.jpg',
        'assets/img/SUNGLASSES/3/3-5.jpg'
      ]
    },
    {
      id: 15,
      name: 'Susan Print',
      category: 'sunglasses',
      subcategorySunglasses: 'animal print',
      colors: ['brown'],
      description: 'Trendy brown animal-print sunglasses.',
      price: 200,
      images: [
        'assets/img/SUNGLASSES/5/5-1.jpg',
        'assets/img/SUNGLASSES/5/5-2.jpg',
        'assets/img/SUNGLASSES/5/5-3.jpg',
        'assets/img/SUNGLASSES/5/5-4.jpg'
      ]
    },
    {
      id: 14,
      name: 'Marilyn Pink',
      category: 'sunglasses',
      subcategorySunglasses: 'sport',
      colors: ['pink'],
      description: 'Pink-framed sport sunglasses with attitude.',
      price: 180,
      images: [
        'assets/img/SUNGLASSES/2/2-1.jpg',
        'assets/img/SUNGLASSES/2/2-2.jpg',
        'assets/img/SUNGLASSES/2/2-3.jpg'
      ]
    },
    {
      id: 16,
      name: 'Riri Bigs',
      category: 'sunglasses',
      subcategorySunglasses: 'animal print',
      colors: ['brown'],
      description: 'Oversized animal-print frames for bold style.',
      price: 210,
      images: [
        'assets/img/SUNGLASSES/6/6-1.jpg',
        'assets/img/SUNGLASSES/6/6-2.jpg'
      ]
    },
    {
      id: 21,
      name: 'Sophia BLack',
      category: 'bags',
      subcategoryBags: 'handbag',
      colors: ['black'],
      description: 'Black leather handbag with gold details.',
      price: 420,
      images: [
        'assets/img/CARTERAS/1/1-4.jpg',
        'assets/img/CARTERAS/1/1-1.jpg',
        'assets/img/CARTERAS/1/1-2.jpg',
        'assets/img/CARTERAS/1/1-3.jpg'
      ]
    },
    {
      id: 22,
      name: 'Eva Green',
      category: 'bags',
      subcategoryBags: 'backpack',
      colors: ['green'],
      description: 'Green backpack with urban minimal design.',
      price: 320,
      images: [
        'assets/img/CARTERAS/4/4-1.jpg',
        'assets/img/CARTERAS/4/4-2.jpg'
      ]
    },
    {
      id: 23,
      name: 'Marta White',
      category: 'bags',
      subcategoryBags: 'handbag',
      colors: ['white'],
      description: 'Classic white handbag for elegant outings.',
      price: 400,
      images: [
        'assets/img/CARTERAS/2/2-1.jpg',
        'assets/img/CARTERAS/2/2-2.jpg',
        'assets/img/CARTERAS/2/2-3.jpg',
        'assets/img/CARTERAS/2/2-4.jpg'
      ]
    },
    {
      id: 24,
      name: 'Barb Blue',
      category: 'bags',
      subcategoryBags: 'backpack',
      colors: ['blue'],
      description: 'Modern blue backpack for casual chic looks.',
      price: 500,
      images: [
        'assets/img/CARTERAS/3/3-1.jpg',
        'assets/img/CARTERAS/3/3-2.jpg',
        'assets/img/CARTERAS/3/3-3.jpg'
      ]
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(p => p.category === category);
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
