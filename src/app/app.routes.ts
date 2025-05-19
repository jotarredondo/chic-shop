import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CategoryComponent} from './pages/category/category.component';
import {ProductDetailComponent} from './pages/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categoria/:nombre', component: CategoryComponent },
  { path: 'producto/:id', component: ProductDetailComponent },
];
