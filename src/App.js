import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import StarWars from "./components/StarWars";
import "./App.css";

var isLoggedIn = false;

function LoggedIn(){
  if(!isLoggedIn) {
    return (
    <NavLink activeClassName="active" to="/login">Login</NavLink>
  )}else{
    return (
      <NavLink activeClassName="active" to="/login">Log out</NavLink>
  )}
}

function Header() {
  return (
    <ul className="header">
    <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
    <li><NavLink activeClassName="active" to="/starWars">StarWars</NavLink></li>
    <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
    <li><LoggedIn/></li>
  </ul>
  );
}

function NoMatch() {
  return (
    <div><h3>No match 404</h3></div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>CA3 - MMRS</h3>
        </header>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route path="/starWars" render={() => <StarWars />} />
              <Route path="/about" render={() => <About/>}/>
              <Route path="/login" render={() => <Login />}/>
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
