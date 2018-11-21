import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Users from './components/Users'
import UserShow from './components/UserShow';
import Profile from './components/Profile';
import SignUp from './components/SignUp';







class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/users" component={Users}/>
            <Route exact path="/users/:userId" component={UserShow}/>
            <Route exact path="/users/:userId/profile/" component={Profile}/>
            <Route exact path="/signup" component={SignUp}/>


            
            <Route path="/" component={Home}/>

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
