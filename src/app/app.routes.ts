import { Routes } from '@angular/router';
import { ProductList } from './products/product-list/product-list';

export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: ProductList, title: 'Product Catalog' }

];
