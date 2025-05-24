import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CategoryComponent} from './pages/category/category.component';
import {ProductDetailComponent} from './pages/product-detail/product-detail.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {FoundationComponent} from './pages/foundation/foundation.component';
import {FindShopComponent} from './pages/find-shop/find-shop.component';
import {ContactComponent} from './pages/contact/contact.component';
import {AboutMeComponent} from './pages/about-me/about-me.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:name', component: CategoryComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'find-shop', component: FindShopComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'foundation', component: FoundationComponent },
  { path: '**', redirectTo: '' }
];
