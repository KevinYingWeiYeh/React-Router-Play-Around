import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import About from './about';
import Topics from './topics';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Link to='/About'>About</Link>
          <div> </div>
          <Link to='/Topics'>Topics</Link>
          <div> </div>
          <Link to='/'>Home</Link>
          <Switch>
            <Route exact path='/' render={props => (
              <h1>
              Home!!!
              </h1>
            )} />
            <Route path='/About' component={About} />
            <Route path='/Topics' component={Topics} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
