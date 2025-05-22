import { Injectable } from '@angular/core';
import {CartItem} from '../shared/models/cartItem.model';
import {BehaviorSubject, Observable} from 'rxjs';

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

  addToCart(item: CartItem): void {
    this.items.push(item);
    const totalQuantity = this.items.reduce((acc, cur) => acc + cur.quantity, 0);
    this.cartCount.next(totalQuantity);
  }
}
