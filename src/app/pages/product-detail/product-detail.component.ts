import { Component } from '@angular/core';
import {CurrencyPipe, NgForOf, NgIf, NgStyle, TitleCasePipe} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Product} from '../../shared/models/product.model';
import {MatIcon} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  imports: [
    NgStyle,
    MatIcon,
    TitleCasePipe,
    CurrencyPipe,
    NgIf,
    NgForOf,
    FormsModule
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product!: Product;
  current = 0;
  backgroundImageUrl = '';
  quantities = [1, 2, 3, 4, 5];
  selectedColor: string | null = null;
  selectedSize: string | null = null;
  selectedQuantity = 1;
  availableSizes: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const found = this.productService.getProductById(id);
    if (found) {
      this.product = found;

      // Imagen de fondo según categoría
      if (this.product.category === 'shoes') this.backgroundImageUrl = 'assets/img/SLIDE_HOME/2.jpg';
      if (this.product.category === 'bags') this.backgroundImageUrl = 'assets/img/SLIDE_HOME/3.jpg';
      if (this.product.category === 'sunglasses') this.backgroundImageUrl = 'assets/img/SLIDE_HOME/4.jpg';

      // Preselección de color solo si hay
      if (this.product.colors?.length) {
        this.selectedColor = null;
      }

      // Tallas: si existen, no se preselecciona ninguna
      if (this.product.sizes?.length) {
        this.availableSizes = this.product.sizes;
        this.selectedSize = null;
      } else {
        // Si no hay tallas, se usa "One Size" preseleccionado
        this.availableSizes = ['One Size'];
        this.selectedSize = 'One Size';
      }
    }
  }

/*  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const found = this.productService.getProductById(id);
    if (found) {
      this.product = found;
      if (this.product.category === 'shoes') this.backgroundImageUrl = 'assets/img/SLIDE_HOME/2.jpg';
      if (this.product.category === 'bags') this.backgroundImageUrl = 'assets/img/SLIDE_HOME/3.jpg';
      if (this.product.category === 'sunglasses') this.backgroundImageUrl = 'assets/img/SLIDE_HOME/4.jpg';
    }
  }*/
/*  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const found = this.productService.getProductById(id);
    if (found) {
      this.product = found;

      // Asignar imagen de fondo
      if (this.product.category === 'shoes') this.backgroundImageUrl = 'assets/img/SLIDE_HOME/2.jpg';
      if (this.product.category === 'bags') this.backgroundImageUrl = 'assets/img/SLIDE_HOME/3.jpg';
      if (this.product.category === 'sunglasses') this.backgroundImageUrl = 'assets/img/SLIDE_HOME/4.jpg';

      // Selección automática de color (si hay)
      if (this.product.colors?.length) {
        this.selectedColor = this.product.colors[0];
      }

      // Lógica de talla (automáticamente 'One Size' si no hay)
      if (this.product.sizes?.length) {
        this.availableSizes = this.product.sizes;
        this.selectedSize = this.product.sizes[0];
      } else {
        this.availableSizes = ['One Size'];
        this.selectedSize = 'One Size';
      }
    }
  }*/

  next() {
    this.current = (this.current + 1) % this.product.images.length;
  }

  prev() {
    this.current = (this.current - 1 + this.product.images.length) % this.product.images.length;
  }

  get isReadyToAdd(): boolean {
    return (
      (!this.product.colors || !!this.selectedColor) &&
      (!this.product.sizes || !!this.selectedSize) &&
      this.selectedQuantity > 0
    );
  }
}
