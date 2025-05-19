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
      category: 'zapatos',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/ZAPATOS/1/1-1.jpg',
        'assets/img/ZAPATOS/1/1-2.jpg',
        'assets/img/ZAPATOS/1/1-3.jpg',
        'assets/img/ZAPATOS/1/1-4.jpg',
        'assets/img/ZAPATOS/1/1-5.jpg',
      ]
    },
    {
      id: 2,
      name: 'Zapato 2',
      category: 'zapatos',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/ZAPATOS/1/2-1.jpg',
        'assets/img/ZAPATOS/1/2-2.jpg',
        'assets/img/ZAPATOS/1/2-3.jpg'
      ]
    },
    {
      id: 3,
      name: 'Zapato 3',
      category: 'zapatos',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/ZAPATOS/1/3-1.jpg',
        'assets/img/ZAPATOS/1/3-2.jpg',
        'assets/img/ZAPATOS/1/3-3.jpg',
        'assets/img/ZAPATOS/1/3-4.jpg',
        'assets/img/ZAPATOS/1/3-5.jpg'
      ]
    },
    {
      id: 4,
      name: 'Zapato 4',
      category: 'zapatos',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/ZAPATOS/1/4-1.jpg',
        'assets/img/ZAPATOS/1/4-2.jpg'
      ]
    },
    {
      id: 5,
      name: 'Zapato 5',
      category: 'zapatos',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/ZAPATOS/1/5-1.jpg',
        'assets/img/ZAPATOS/1/5-2.jpg',
        'assets/img/ZAPATOS/1/5-3.jpg',
        'assets/img/ZAPATOS/1/5-4.jpg',
        'assets/img/ZAPATOS/1/5-5.jpg',
        'assets/img/ZAPATOS/1/5-6.jpg'
      ]
    },
    {
      id: 6,
      name: 'Zapato 6',
      category: 'zapatos',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/ZAPATOS/1/6-1.jpg',
        'assets/img/ZAPATOS/1/6-2.jpg',
        'assets/img/ZAPATOS/1/6-3.jpg',
        'assets/img/ZAPATOS/1/6-4.jpg'
      ]
    },
    {
      id: 7,
      name: 'Zapato 7',
      category: 'zapatos',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/ZAPATOS/1/7-1.jpg',
        'assets/img/ZAPATOS/1/7-2.jpg',
        'assets/img/ZAPATOS/1/7-3.jpg'
      ]
    },
    {
      id: 11,
      name: 'lentes 1',
      category: 'lentes',
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
      category: 'lentes',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/SUNGLASSES/1/2-1.jpg',
        'assets/img/SUNGLASSES/1/2-2.jpg',
        'assets/img/SUNGLASSES/1/2-3.jpg'
      ]
    },
    {
      id: 13,
      name: 'lentes 3',
      category: 'lentes',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/SUNGLASSES/1/3-1.jpg',
        'assets/img/SUNGLASSES/1/3-2.jpg',
        'assets/img/SUNGLASSES/1/3-3.jpg',
        'assets/img/SUNGLASSES/1/3-4.jpg',
        'assets/img/SUNGLASSES/1/3-5.jpg'
      ]
    },
    {
      id: 14,
      name: 'lentes 4',
      category: 'lentes',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/SUNGLASSES/1/4-1.jpg',
        'assets/img/SUNGLASSES/1/4-2.jpg',
        'assets/img/SUNGLASSES/1/4-3.jpg'
      ]
    },
    {
      id: 15,
      name: 'lentes 5',
      category: 'lentes',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/SUNGLASSES/1/5-1.jpg',
        'assets/img/SUNGLASSES/1/5-2.jpg',
        'assets/img/SUNGLASSES/1/5-3.jpg',
        'assets/img/SUNGLASSES/1/5-4.jpg'
      ]
    },
    {
      id: 16,
      name: 'lentes 6',
      category: 'lentes',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/SUNGLASSES/1/6-1.jpg',
        'assets/img/SUNGLASSES/1/6-2.jpg'
      ]
    },
    {
      id: 21,
      name: 'cartera 1',
      category: 'carteras',
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
      category: 'carteras',
      description: 'Elegante zapato de cuero italiano.',
      price: 150000,
      images: [
        'assets/img/CARTERAS/1/2-1.jpg',
        'assets/img/CARTERAS/1/2-2.jpg',
        'assets/img/CARTERAS/1/2-3.jpg',
        'assets/img/CARTERAS/1/2-4.jpg'
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
