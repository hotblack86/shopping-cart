import React from 'react';

export default class ProductItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {quantity: 1}
  }
        
  handleInputChange = e => 
    this.setState({[e.target.name]: e.target.value})
  }