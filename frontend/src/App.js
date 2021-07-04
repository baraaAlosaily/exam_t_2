import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import Header from "./components/Header"
import Main from "./components/Main"
import Favorite from './components/Favorite';
export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route exact path='/favorate'>
              <Favorite />
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
