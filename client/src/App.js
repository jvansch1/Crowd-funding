import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './components/home.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/home' component={Home} />
      </Router>
    );
  }
}

export default App;
