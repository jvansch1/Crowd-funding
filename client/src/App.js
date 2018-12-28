import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './components/home.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreatorsIndexContainer from './containers/creators/creators_index_container.js';
import configureStore from './store/store.js'
import { Provider } from 'react-redux';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/creators' component={CreatorsIndexContainer} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
