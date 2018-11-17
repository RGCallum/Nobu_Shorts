import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Films from './components/Films'
import Users from './components/Users'
// import Info from './components/Info'





class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/users/" component={Users}/>
            <Route exact path="/users/:userId" component={Films}/>
            {/* <Route exact path="/films" component={Films}/> */}
            <Route path="/" component={Home}/>

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
