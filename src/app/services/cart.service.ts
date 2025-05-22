import { Injectable } from '@angular/core';
import {CartItem} from '../shared/models/cartItem.model';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];
  private cartCount = new BehaviorSubject<number>(0);

  getCartItems(): CartItem[] {
    return this.items;
  }

  getCartCount(): Observable<number> {
    return this.cartCount.asObservable();
  }
  addToCart(newItem: CartItem): void {
    // Convertimos a número por si acaso
    const qty = Number(newItem.quantity);

    // Buscamos si ya existe un ítem idéntico
    const existing = this.items.find(i =>
      i.productId === newItem.productId &&
      i.selectedSize === newItem.selectedSize &&
      i.selectedColor === newItem.selectedColor
    );

    if (existing) {
      // Suma numérica (no concatenación)
      existing.quantity = Number(existing.quantity) + qty;
    } else {
      // Nuevo ítem
      this.items.push({ ...newItem, quantity: qty });
    }

    // Recalculamos el total de unidades
    const totalQuantity = this.items
      .reduce((sum, item) => sum + Number(item.quantity), 0);

    this.cartCount.next(totalQuantity);
  }
}
