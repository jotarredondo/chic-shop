import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CategoryComponent} from './pages/category/category.component';
import {ProductDetailComponent} from './pages/product-detail/product-detail.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {FindShopComponent} from './pages/find-shop/find-shop.component';
import {AboutMeComponent} from './pages/about-me/about-me.component';
import {OtherProjectsComponent} from './pages/other-projects/other-projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:name', component: CategoryComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'find-shop', component: FindShopComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'other-projects', component: OtherProjectsComponent },
  { path: '**', redirectTo: '' }
];
