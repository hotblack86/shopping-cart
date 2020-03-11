import React from 'react';
import { isAuthenticated, getCartProducts, pay } from '../repository';
import {  Redirect, Link } from 'react-router-dom';

export default class Checkout extends React.Component {

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

  pay = () => pay().then(data => alert(data)).catch(err => console.log(err))
  
}