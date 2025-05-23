import {Component, HostListener} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {SideMenuComponent} from '../side-menu/side-menu.component';
import {MenuService} from '../../services/menu.service';
import {Router, RouterLink} from '@angular/router';
import {CartService} from '../../services/cart.service';
import {CartModalComponent} from '../cart-modal/cart-modal.component';
import {ProductService} from '../../services/product.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [
    MatIcon,
    MatButtonModule,
    CommonModule,
    SideMenuComponent,
    RouterLink,
    CartModalComponent,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;
  isHovered = false;
  isMobile = window.innerWidth < 768;
  menuOpen = false;
  cartCount = 0;
  showCartModal = false;
  searchVisible = false;
  searchQuery = '';
  notFound = false;

  constructor(private menuService: MenuService,
              private cartService: CartService,
              private productService: ProductService,
              private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleSearch() {
    this.searchVisible = !this.searchVisible;
    this.searchQuery = '';
    this.notFound = false;
  }

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
    });
      this.menuService.menuOpen$.subscribe(open => this.menuOpen = open);
      this.getCartCount();
  }

  getCartCount() {
    this.cartService.getCartCount().subscribe(count => {
      this.cartCount = count;
    });
  }

  toggleCartModal() {
    if (this.cartCount > 0) {
      this.showCartModal = true;
    }
  }

  performSearch() {
    const query = this.searchQuery.trim().toLowerCase();

    if (!query) {
      this.notFound = false;
      return;
    }

    const allProducts = this.productService.getProducts();

    // Si coincide con categoría (shoes, bags, sunglasses)
    if (['shoes', 'bags', 'sunglasses'].includes(query)) {
      this.router.navigate(['/category', query]);
      this.resetSearch();
      return;
    }

    // Buscar por nombre de producto (incluso parcial)
    const found = allProducts.find(p =>
      p.name.toLowerCase().includes(query)
    );

    if (found) {
      this.router.navigate(['/product', found.id]);
      this.resetSearch();
    } else {
      this.notFound = true;
      setTimeout(() => {
        this.resetSearch();
      }, 2000);
    }
  }

  resetSearch() {
    this.searchQuery = '';
    this.searchVisible = false;
    this.notFound = false;
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}
