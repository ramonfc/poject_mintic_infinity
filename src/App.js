import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FormRegProd from './components/FormRegProd/FormRegProd';

class App extends Component {
  render() {
    return (
     <FormRegProd />
    )
  }
}

export default App

