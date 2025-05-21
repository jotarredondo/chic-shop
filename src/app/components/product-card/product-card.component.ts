import {Component, Input} from '@angular/core';
import {Product} from '../../shared/models/product.model';
import {CurrencyPipe, TitleCasePipe} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {Router} from '@angular/router';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-product-card',
  imports: [
    CurrencyPipe,
    TitleCasePipe,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;
  current = 0;

  constructor(private router: Router) {}

  next(): void {
    this.current = (this.current + 1) % this.product.images.length;
  }

  prev(): void {
    this.current =
      (this.current - 1 + this.product.images.length) % this.product.images.length;
  }

  goToDetail() {
    this.router.navigate(['/product', this.product.id]);
  }
}
