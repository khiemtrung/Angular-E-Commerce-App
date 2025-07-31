import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './products/product-card/product-card';
import { Meta, Title } from '@angular/platform-browser';
import { Header } from './shared/header/header';
import { ProductList } from './products/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, Header, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('E-Commerce Store - Quality Products');
    this.meta.addTags([
      { name: 'description', content: 'Shop high-quality products at our online store.'},
      { name: 'keywords', content: 'e-commerce, products, online shopping'}
    ]);
  }
}
