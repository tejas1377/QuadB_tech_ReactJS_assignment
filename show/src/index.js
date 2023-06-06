import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ShowScreen from './screens/ShowScreen';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={HomeScreen} exact />
      <Route path="/shows/:id" component={ShowScreen} exact />
    </Switch>
  </Router>,
  document.getElementById('root')
);
