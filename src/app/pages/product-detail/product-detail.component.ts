import { Component } from '@angular/core';
import {CurrencyPipe, NgForOf, NgIf, NgStyle, TitleCasePipe} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Product} from '../../shared/models/product.model';
import {MatIcon} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {CartItem} from '../../shared/models/cartItem.model';
import {CartService} from '../../services/cart.service';
import {CartModalComponent} from '../../components/cart-modal/cart-modal.component';

@Component({
  selector: 'app-product-detail',
  imports: [
    NgStyle,
    MatIcon,
    TitleCasePipe,
    CurrencyPipe,
    NgIf,
    NgForOf,
    FormsModule,
    CartModalComponent
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
  showModal = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
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

  addToCart() {
    if (!this.isReadyToAdd) return;

    // Asegúrate de que selectedQuantity es un number
    const qty = Number(this.selectedQuantity);

    const item: CartItem = {
      productId: this.product.id,
      name: this.product.name,
      price: this.product.price,
      quantity: qty,               // aquí usamos `qty` como number
      selectedSize: this.selectedSize ?? undefined,
      selectedColor: this.selectedColor ?? undefined,
      image: this.product.images[0]
    };

    console.log('👉 Adding to cart:', item);
    this.cartService.addToCart(item);
    this.openConfirmationModal();
  }

  /*addToCart() {
    if (!this.isReadyToAdd) return;

    const item: CartItem = {
      productId: this.product.id,
      name: this.product.name,
      price: this.product.price,
      quantity: this.selectedQuantity,
      selectedSize: this.selectedSize,
      selectedColor: this.selectedColor,
      image: this.product.images[0]
    };

    this.cartService.addToCart(item);
    this.openConfirmationModal();
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

  openConfirmationModal() {
    this.showModal = true;

/*    setTimeout(() => {
      this.showModal = false;
    }, 5000);*/
  }
}
