import {Component, Input} from '@angular/core';
import {Product} from '../../shared/models/product.model';
import {CurrencyPipe, TitleCasePipe} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-product-card',
  imports: [
    CurrencyPipe,
    TitleCasePipe,
    MatIcon
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;

  current = 0;

  next(): void {
    this.current = (this.current + 1) % this.product.images.length;
  }

  prev(): void {
    this.current =
      (this.current - 1 + this.product.images.length) % this.product.images.length;
  }
}
