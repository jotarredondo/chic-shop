import {Component, EventEmitter, Output} from '@angular/core';
import {CartItem} from '../../shared/models/cartItem.model';
import {CartService} from '../../services/cart.service';
import {CurrencyPipe, NgForOf, TitleCasePipe} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

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

  @Output() close = new EventEmitter<void>();

  constructor(private cartService: CartService) {
    this.items = this.cartService.getCartItems();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  onContinue() {
    this.close.emit();
  }

  onLinkedIn() {
    window.open('https://www.linkedin.com/in/arredondojose/');
  }
}
