import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})

export class ProductCardComponent {
  @Input() product: { name: string; price: number; description: string } = {
    name: '',
    price: 0,
    description: ''
  };

  onBuyNow() {
    alert(`Buy now clicked for ${this.product.name}`);
  }
}
