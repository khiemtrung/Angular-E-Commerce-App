export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  inStock: boolean;
  imageUrl?: string;
}