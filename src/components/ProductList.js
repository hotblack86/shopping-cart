import React from 'react';
import ProductItem from './ProductItem';
import { getProducts } from '../repository';
import { Link } from 'react-router-dom';

export default class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    products: []
    }
  }

  componentDidMount() {
    getProducts().then((products) =>this.setState({ products }));
  }
}