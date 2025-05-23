import {Component, EventEmitter, Output} from '@angular/core';
import {CartItem} from '../../shared/models/cartItem.model';
import {CartService} from '../../services/cart.service';
import {CurrencyPipe, NgForOf, TitleCasePipe} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-modal',
  imports: [
    CurrencyPipe,
    TitleCasePipe,
    NgForOf,
    MatIcon
  ],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.scss'
})
export class CartModalComponent {
  items: CartItem[] = [];
  total = 0;
  fadingOut = false;

  @Output() close = new EventEmitter<void>();

  constructor(private cartService: CartService,private router: Router) {
    this.items = this.cartService.getCartItems();
    this.calculateTotal();
  }


  onContinue() {
    this.fadingOut = true;
    setTimeout(() => {
      this.close.emit();
      this.router.navigate(['/']);
    }, 400);
  }

  calculateTotal() {
    this.total = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  onLinkedIn() {
    window.open('https://www.linkedin.com/in/arredondojose/');
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
    this.items = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }
}
