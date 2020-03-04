import React from 'react';
import { login } from '../repository';

export default class Login extends React.Component{
  constructor() {
    super();
    this.state = { name: '', password: '' };
  }

  handleInputChange = (event) => this.setState({[event.target.name]: event.target.value})
      
  submitLogin = (event) => {
    event.preventDefault();
    login(this.state)
      .then(token => window.location = '/')
      .catch(err => console.log(err));
  }


}
