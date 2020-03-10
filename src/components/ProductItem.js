import React from 'react';

export default class ProductItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {quantity: 1}
  }
        
  handleInputChange = e => 
    this.setState({[e.target.name]: e.target.value})
  }

  addToCart = () => {
    let cart = localStorage.getItem('cart') 
                  ? JSON.parse(localStorage.getItem('cart')) : {};
    let id = this.props.product.id.toString();
    cart[id] = (cart[id] ? cart[id]: 0);
    let qty = cart[id] + parseInt(this.state.quantity);
    if (this.props.product.available_quantity < qty) {
      cart[id] = this.props.product.available_quantity; 
    } else {
      cart[id] = qty
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }