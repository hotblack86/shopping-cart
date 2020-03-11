import React from 'react';
import { Link } from 'react-router-dom';
import { getCartProducts } from '../repository';
import CartItem from './CartItem';

export default class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = { products: [], total: 0 }
  }
  
  componentDidMount() {
    let cart = localStorage.getItem('cart');
    if (!cart) return; 
    getCartProducts(cart).then((products) => {
      let total = 0;
      for (var i = 0; i < products.length; i++) {
        total += products[i].price * products[i].qty;
      }
      this.setState({ products, total });
      });
  }
}