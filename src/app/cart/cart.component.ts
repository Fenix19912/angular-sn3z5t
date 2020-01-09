import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.info('Your order has been submitted', customerData);
    console.info('Products:', this.cartService.getItems());
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  removeFromCart(productId) {
    console.info('Your product has been removed from the cart!');
    this.cartService.removeFromCart(productId);
  }

}