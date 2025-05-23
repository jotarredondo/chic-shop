import {Component, HostListener} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {SideMenuComponent} from '../side-menu/side-menu.component';
import {MenuService} from '../../services/menu.service';
import {RouterLink} from '@angular/router';
import {CartService} from '../../services/cart.service';
import {CartModalComponent} from '../cart-modal/cart-modal.component';

@Component({
  selector: 'app-header',
  imports: [
    MatIcon,
    MatButtonModule,
    CommonModule,
    SideMenuComponent,
    RouterLink,
    CartModalComponent
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

  constructor(private menuService: MenuService, private cartService: CartService) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
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
      this.cartCount = count;     // count debe ser 3, no "12"
    });
  }

  toggleCartModal() {
    if (this.cartCount > 0) {
      this.showCartModal = true;
    }
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
