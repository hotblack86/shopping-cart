import React from 'react';
import Login from './components/Login';
import Products from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import {  BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { isAuthenticated } from './repository';

class App extends Component {
  
  logOut(){
    localStorage.removeItem('x-access-token');
  }


}



export default App;
