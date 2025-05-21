import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Product} from '../../shared/models/product.model';
import {ProductCardComponent} from '../../components/product-card/product-card.component';
import {CurrencyPipe, JsonPipe, NgForOf, NgIf, NgStyle, TitleCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-category',
  imports: [
    ProductCardComponent,
    NgForOf,
    CurrencyPipe,
    FormsModule,
    NgIf,
    NgStyle,
    TitleCasePipe
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categoryName!: 'shoes' | 'bags' | 'sunglasses';
  backgroundImageUrl = '';
  subCategoryFilter: string = '';
  colorFilter: string = '';
  sizeFilter: string = '';
  maxPrice: number = 300000;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

/*  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const name = params.get('name');
      if (name === 'shoes' || name === 'bags' || name === 'sunglasses') {
        this.categoryName = name;
        this.products = this.productService.getProductsByCategory(this.categoryName);
        this.filterProducts(); // filtrado inicial
      }
    });
  }*/

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const name = params.get('name') as 'shoes' | 'bags' | 'sunglasses';
      if (name) {
        this.categoryName = name;
        this.products = this.productService.getProductsByCategory(this.categoryName);
        this.setBackgroundImage(name); // ← Aquí
        this.filterProducts();
      }
    });
  }

  setBackgroundImage(category: 'shoes' | 'bags' | 'sunglasses') {
    switch (category) {
      case 'shoes':
        this.backgroundImageUrl = 'assets/img/SLIDE_HOME/2.jpg';
        break;
      case 'bags':
        this.backgroundImageUrl = 'assets/img/SLIDE_HOME/3.jpg';
        break;
      case 'sunglasses':
        this.backgroundImageUrl = 'assets/img/SLIDE_HOME/4.jpg';
        break;
    }
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter(product => {
      if (product.price > this.maxPrice) return false;

      // Subcategoría según tipo y existencia del campo
      if (this.subCategoryFilter) {
        if (
          (this.categoryName === 'shoes' && product.subcategoryShoes !== this.subCategoryFilter) ||
          (this.categoryName === 'bags' && product.subcategoryBags !== this.subCategoryFilter) ||
          (this.categoryName === 'sunglasses' && product.subcategorySunglasses !== this.subCategoryFilter)
        ) {
          return false;
        }
      }
      // Color
      if (this.colorFilter && (!product.colors || !product.colors.includes(this.colorFilter))) {
        return false;
      }
      // Size (solo si el producto tiene talla)
      if (this.sizeFilter) {
        if (!product.sizes || !product.sizes.includes(this.sizeFilter)) return false;
      }

      return true;
    });
  }

/*  filterProducts() {
    this.filteredProducts = this.products.filter(product => {
      if (product.price > this.maxPrice) return false;

      // Subcategoría dinámica
      if (this.categoryName === 'shoes' && this.subCategoryFilter && product.subcategoryShoes !== this.subCategoryFilter) return false;
      if (this.categoryName === 'bags' && this.subCategoryFilter && product.subcategoryBags !== this.subCategoryFilter) return false;
      if (this.categoryName === 'sunglasses' && this.subCategoryFilter && product.subcategorySunglasses !== this.subCategoryFilter) return false;

      // Color
      if (this.colorFilter && product.color !== this.colorFilter) return false;

      // Size solo si el producto tiene talla
      if (this.sizeFilter && product.size !== this.sizeFilter) return false;

      return true;
    });
  }*/
}
