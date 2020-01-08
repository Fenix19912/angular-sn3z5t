import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor() { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeFromCart(productId) {
    if (productId > -1) {
      this.items.splice(productId, 1);
    }
    return this.items;
  }

}