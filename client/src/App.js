import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Films from './components/Films'
import Users from './components/Users'




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" component={Home}/>
            <Route exact path="/user" component={Users}/>
            <Route exact path="/films/:filmId" component={Films}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
