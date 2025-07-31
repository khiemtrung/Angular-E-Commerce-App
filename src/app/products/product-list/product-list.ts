import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 999.99, description: 'High-performance laptop.', inStock: true },
    { id: 2, name: 'Smartphone', price: 699.99, description: 'Latest model smartphone.', inStock: true },
    { id: 3, name: 'Headphones', price: 99.99, description: 'Noise-cancelling headphones.', inStock: false }
  ];
}
