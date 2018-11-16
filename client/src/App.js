import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Splash from './components/Splash'
import NavBar from './components/NavBar'



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" component={Splash}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
