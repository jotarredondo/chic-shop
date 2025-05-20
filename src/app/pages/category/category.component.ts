import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Product} from '../../shared/models/product.model';
import {ProductCardComponent} from '../../components/product-card/product-card.component';
import {CurrencyPipe, JsonPipe, NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-category',
  imports: [
    ProductCardComponent,
    NgForOf,
    CurrencyPipe,
    FormsModule
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  categoryName!: string;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  maxPrice: number = 300000;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('name') || '';
      this.products = this.productService.getProductsByCategory(this.categoryName);
      this.filterProducts();
    });
  }

  ngDoCheck(): void {
    this.filterProducts();
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(p => p.price <= this.maxPrice);
  }
/*  categoryName!: string;
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('name') || '';
      this.products = this.productService.getProductsByCategory(this.categoryName);
    });
  }*/
}
