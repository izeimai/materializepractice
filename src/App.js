import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import AsanaPage from './components/AsanaPage';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={AsanaPage} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
