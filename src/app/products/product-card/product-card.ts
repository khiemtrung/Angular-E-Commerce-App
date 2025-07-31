import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})

export class ProductCardComponent {
  @Input() product: Product = { id: 0, name: '', price: 0, description: '', inStock: true };
  @Output() stockToggled = new EventEmitter<number>();

  onBuyNow() {
    alert(`Buy now clicked for ${this.product.name}`);
  }

  toggleStock() {
    this.stockToggled.emit(this.product.id);
  }
}
