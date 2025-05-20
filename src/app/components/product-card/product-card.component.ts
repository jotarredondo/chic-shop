import {Component, Input} from '@angular/core';
import {Product} from '../../shared/models/product.model';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;
}
