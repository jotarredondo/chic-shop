import { Injectable } from '@angular/core';
import {Product} from '../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Zapato 1',
      category: 'shoes',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
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
      name: 'Zapato 2',
      category: 'shoes',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/ZAPATOS/2/2-1.jpg',
        'assets/img/ZAPATOS/2/2-2.jpg',
        'assets/img/ZAPATOS/2/2-3.jpg'
      ],
      sizes: ['5','5.5','6','6.5','7','7.5','8','8.5','9','9.5','10']
    },
    {
      id: 3,
      name: 'Zapato 3',
      category: 'shoes',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
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
      name: 'Zapato 4',
      category: 'shoes',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/ZAPATOS/4/4-2.jpg',
        'assets/img/ZAPATOS/4/4-1.jpg'
      ]
    },
    {
      id: 5,
      name: 'Zapato 5',
      category: 'shoes',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
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
      name: 'Zapato 6',
      category: 'shoes',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/ZAPATOS/6/6-2.jpg',
        'assets/img/ZAPATOS/6/6-1.jpg',
        'assets/img/ZAPATOS/6/6-3.jpg',
        'assets/img/ZAPATOS/6/6-4.jpg'
      ]
    },
    {
      id: 7,
      name: 'Zapato 7',
      category: 'shoes',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/ZAPATOS/7/7-1.jpg',
        'assets/img/ZAPATOS/7/7-2.jpg',
        'assets/img/ZAPATOS/7/7-3.jpg'
      ]
    },
    {
      id: 11,
      name: 'lentes 1',
      category: 'sunglasses',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/SUNGLASSES/1/1-1.jpg',
        'assets/img/SUNGLASSES/1/1-2.jpg',
        'assets/img/SUNGLASSES/1/1-3.jpg'
      ]
    },
    {
      id: 12,
      name: 'lentes 2',
      category: 'sunglasses',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/SUNGLASSES/2/2-1.jpg',
        'assets/img/SUNGLASSES/2/2-2.jpg',
        'assets/img/SUNGLASSES/2/2-3.jpg'
      ]
    },
    {
      id: 13,
      name: 'lentes 3',
      category: 'sunglasses',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/SUNGLASSES/3/3-1.jpg',
        'assets/img/SUNGLASSES/3/3-2.jpg',
        'assets/img/SUNGLASSES/3/3-3.jpg',
        'assets/img/SUNGLASSES/3/3-4.jpg',
        'assets/img/SUNGLASSES/3/3-5.jpg'
      ]
    },
    {
      id: 14,
      name: 'lentes 4',
      category: 'sunglasses',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/SUNGLASSES/4/4-1.jpg',
        'assets/img/SUNGLASSES/4/4-2.jpg',
        'assets/img/SUNGLASSES/4/4-3.jpg'
      ]
    },
    {
      id: 15,
      name: 'lentes 5',
      category: 'sunglasses',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/SUNGLASSES/5/5-1.jpg',
        'assets/img/SUNGLASSES/5/5-2.jpg',
        'assets/img/SUNGLASSES/5/5-3.jpg',
        'assets/img/SUNGLASSES/5/5-4.jpg'
      ]
    },
    {
      id: 16,
      name: 'lentes 6',
      category: 'sunglasses',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/SUNGLASSES/6/6-1.jpg',
        'assets/img/SUNGLASSES/6/6-2.jpg'
      ]
    },
    {
      id: 21,
      name: 'cartera 1',
      category: 'bags',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/CARTERAS/1/1-1.jpg',
        'assets/img/CARTERAS/1/1-2.jpg',
        'assets/img/CARTERAS/1/1-3.jpg',
        'assets/img/CARTERAS/1/1-4.jpg'
      ]
    },
    {
      id: 22,
      name: 'cartera 2',
      category: 'bags',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/CARTERAS/2/2-1.jpg',
        'assets/img/CARTERAS/2/2-2.jpg',
        'assets/img/CARTERAS/2/2-3.jpg',
        'assets/img/CARTERAS/2/2-4.jpg'
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
